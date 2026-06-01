'use client';

import { useEffect } from 'react';
import type { MetricType } from 'web-vitals';

export function WebVitalsReporter() {
  useEffect(() => {
    // Dynamic import to avoid blocking page load
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      const sendVitalToAnalytics = (metric: MetricType) => {
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
          });

          navigator.sendBeacon('/api/vitals', body);
        }
      };

      // Measure Web Vitals
      onCLS(sendVitalToAnalytics);
      onFCP(sendVitalToAnalytics);
      onINP(sendVitalToAnalytics);
      onLCP(sendVitalToAnalytics);
      onTTFB(sendVitalToAnalytics);
    });
  }, []);

  return null;
}
