'use client';

import { useEffect } from 'react';

export function WebVitalsReporter() {
  useEffect(() => {
    // Dynamic import to avoid blocking page load
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const sendVitalToAnalytics = (metric: any) => {
        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`${metric.name}:`, metric.value);
        }

        // Send to analytics endpoint (optional)
        if ('sendBeacon' in navigator) {
          const body = JSON.stringify({
            name: metric.name,
            value: metric.value.toFixed(2),
            rating: metric.rating,
            delta: metric.delta?.toFixed(2),
            id: metric.id,
            attribution: metric.attribution,
          });

          navigator.sendBeacon('/api/vitals', body);
        }
      };

      // Measure Web Vitals
      getCLS(sendVitalToAnalytics);
      getFID(sendVitalToAnalytics);
      getFCP(sendVitalToAnalytics);
      getLCP(sendVitalToAnalytics);
      getTTFB(sendVitalToAnalytics);
    });
  }, []);

  return null;
}
