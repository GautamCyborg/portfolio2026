'use client';

import React from 'react';
import { ReactLenis } from 'lenis/react';

export default function SmoothScrollWrapper({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
