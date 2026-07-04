export type ContactInput = {
  fullName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  companyName: string;
  country: string;
  serviceType: string;
  budget: string;
  timeline: string;
  message: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+\d{7,15}$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

// Helper to parse E.164 phone numbers into code and subscriber number
export function parsePhoneNumber(fullPhone: string): { phoneCode: string; phoneNumber: string } {
  const cleanPhone = fullPhone.replace(/\s+/g, ""); // remove spaces
  if (!cleanPhone.startsWith("+")) {
    return { phoneCode: "", phoneNumber: cleanPhone };
  }
  
  // List of 3-digit country codes
  const codes3 = ["211", "212", "213", "216", "218", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "239", "240", "241", "242", "243", "244", "245", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "290", "291", "297", "298", "299", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "370", "371", "372", "373", "374", "375", "376", "377", "378", "380", "381", "382", "385", "386", "387", "389", "420", "421", "423", "500", "501", "502", "503", "504", "505", "506", "507", "509", "590", "591", "592", "593", "594", "595", "597", "598", "599", "670", "672", "673", "674", "675", "676", "677", "678", "679", "680", "681", "682", "683", "685", "686", "687", "688", "689", "690", "691", "692", "850", "852", "853", "855", "856", "880", "886", "960", "961", "962", "963", "964", "965", "966", "967", "968", "970", "971", "972", "973", "974", "975", "976", "977", "992", "993", "994", "995", "996", "998"];
  
  // List of 2-digit country codes
  const codes2 = ["20", "27", "30", "31", "32", "33", "34", "36", "39", "40", "41", "43", "44", "45", "46", "47", "48", "49", "51", "52", "54", "55", "56", "57", "58", "60", "61", "62", "63", "64", "65", "66", "81", "82", "84", "86", "90", "91", "92", "93", "94", "95", "98"];
  
  const digits = cleanPhone.slice(1); // remove '+'
  
  if (digits.length >= 3 && codes3.includes(digits.slice(0, 3))) {
    return { phoneCode: "+" + digits.slice(0, 3), phoneNumber: digits.slice(3) };
  }
  
  if (digits.length >= 2 && codes2.includes(digits.slice(0, 2))) {
    return { phoneCode: "+" + digits.slice(0, 2), phoneNumber: digits.slice(2) };
  }
  
  if (digits.length >= 1 && (digits.startsWith("1") || digits.startsWith("7"))) {
    return { phoneCode: "+" + digits.slice(0, 1), phoneNumber: digits.slice(1) };
  }
  
  return { phoneCode: "", phoneNumber: cleanPhone };
}

const validServices = [
  "Website Development",
  "Web Application Development",
  "Mobile App Development",
  "AI Solutions",
  "Custom Software",
  "UI/UX Design",
  "E-commerce Development",
  "Other"
];

const validBudgets = [
  "Less than $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

const validTimelines = [
  "Immediately",
  "Within 2 Weeks",
  "Within 1 Month",
  "1-3 Months",
  "Flexible"
];

export function validateContact(payload: unknown): { data?: ContactInput; error?: string } {
  const body = payload as Record<string, unknown>;
  
  // The client may send raw phone, or phoneCode/phoneNumber. We handle both.
  const rawPhone = clean(body.phoneNumber || body.phone);
  const parsed = parsePhoneNumber(rawPhone);
  
  const data: ContactInput = {
    fullName: clean(body.fullName),
    email: clean(body.email).toLowerCase(),
    phoneCode: clean(body.phoneCode) || parsed.phoneCode,
    phoneNumber: clean(body.phoneNumber) || parsed.phoneNumber,
    companyName: clean(body.companyName),
    country: clean(body.country),
    serviceType: clean(body.serviceType),
    budget: clean(body.budget),
    timeline: clean(body.timeline),
    message: clean(body.message),
  };

  if (data.fullName.length < 2) return { error: "Full name must be at least 2 characters." };
  if (data.fullName.length > 100) return { error: "Full name must not exceed 100 characters." };
  if (!emailPattern.test(data.email)) return { error: "Please enter a valid email address." };
  
  const fullPhoneNumber = data.phoneCode + data.phoneNumber;
  if (!phonePattern.test(fullPhoneNumber)) {
    return { error: "Please enter a valid international phone number format (e.g. +919876543210)." };
  }
  
  if (data.country.length < 2) return { error: "Please select your country." };
  if (!validServices.includes(data.serviceType)) return { error: "Please select a valid service option." };
  if (data.budget && !validBudgets.includes(data.budget)) return { error: "Please select a valid budget range." };
  if (data.timeline && !validTimelines.includes(data.timeline)) return { error: "Please select a valid expected timeline." };
  
  if (data.message.length < 20) return { error: "Project description must be at least 20 characters." };
  if (data.message.length > 2000) return { error: "Project description must not exceed 2000 characters." };

  return { data };
}

export function validateLogin(payload: unknown): { data?: LoginInput; error?: string } {
  const body = payload as Record<string, unknown>;
  const data = {
    email: clean(body.email).toLowerCase(),
    password: clean(body.password),
  };

  if (!emailPattern.test(data.email)) return { error: "A valid email is required." };
  if (data.password.length < 8) return { error: "Password must be at least 8 characters." };
  return { data };
}
