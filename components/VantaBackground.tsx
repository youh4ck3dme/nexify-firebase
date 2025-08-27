
import React, { useEffect, useRef } from 'react';
import { useSettings } from '../hooks/useSettings';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const VantaBackground: React.FC = () => {
  const { settings } = useSettings();
  const vantaContainerRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null); // Use a ref to hold the instance across re-renders

  useEffect(() => {
    // This is the definitive fix for the recurring Vanta.js errors.
    // It uses a useRef to explicitly manage the Vanta instance's lifecycle,
    // which is more robust than a closure-scoped variable under React 19's
    // aggressive Strict Mode (which mounts/unmounts/remounts components).

    if (settings.background3d) {
      // If the setting is ON and there is NO active instance, create one.
      if (!vantaEffectRef.current && vantaContainerRef.current) {
        if (window.VANTA && window.THREE) {
          vantaEffectRef.current = window.VANTA.FOG({
            el: vantaContainerRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xff00c7,
            midtoneColor: 0x2f00ff,
            lowlightColor: 0x0,
            baseColor: 0xd001f,
            blurFactor: 0.5,
            speed: 1.2,
            zoom: 0.6,
          });
        }
      }
    }

    // The cleanup function is the most critical part. It runs whenever the
    // component unmounts or before the effect re-runs due to dependency changes.
    return () => {
      if (vantaEffectRef.current) {
        // If an instance exists, destroy it.
        vantaEffectRef.current.destroy();
        // CRITICAL: Set the ref to null so the logic above knows to re-create it on the next mount.
        vantaEffectRef.current = null;
      }
    };
  }, [settings.background3d]); // The effect only depends on the user's setting.

  return <div ref={vantaContainerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default VantaBackground;