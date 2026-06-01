import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Log the vitals data
    console.log('Web Vitals received:', {
      timestamp: new Date().toISOString(),
      ...data,
      userAgent: request.headers.get('user-agent'),
    });

    // Here you can:
    // 1. Store in database
    // 2. Send to external analytics service (Vercel Analytics, Google Analytics, etc.)
    // 3. Alert if metrics exceed thresholds

    // Example: Check if metrics are poor
    const metricValue = parseFloat(data.value);
    if (data.name === 'LCP' && metricValue > 2500) {
      console.warn(`Poor LCP detected: ${metricValue}ms`);
    }
    if (data.name === 'CLS' && metricValue > 0.1) {
      console.warn(`Poor CLS detected: ${metricValue}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing vitals:', error);
    return NextResponse.json(
      { error: 'Failed to process vitals' },
      { status: 500 }
    );
  }
}
