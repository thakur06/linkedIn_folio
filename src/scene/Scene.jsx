import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../Scene.css'; // We'll create this CSS file separately

const BOUNDS = 50;

const Cuboid = ({ className = '' }) => {
  return (
    <div className={`cuboid ${className}`}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="cuboid__side"></div>
      ))}
    </div>
  );
};

const Scene = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const handlePointerMove = ({ x, y }) => {
      const newX = gsap.utils.mapRange(0, window.innerWidth, -BOUNDS, BOUNDS, x);
      const newY = gsap.utils.mapRange(0, window.innerHeight, BOUNDS, -BOUNDS, y);
      gsap.set(document.documentElement, {
        '--rotate-x': newY,
        '--rotate-y': newX,
      });
    };

    const handlePointerDown = () => {
      setChecked(prev => {
        document.documentElement.style.setProperty('--dark', !prev ? 1 : 0);
        return !prev;
      });
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return (
    <div className="scene">
      {/* Cloud One */}
      <div className="cloud cloud--one">
        <div className="cloud__shift">
          <div className="cloud__body">
            {[0, 1, 2].map(i => (
              <div key={i}>
                <Cuboid className="cuboid--cloud" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud Two */}
      <div className="cloud cloud--two">
        <div className="cloud__shift">
          <div className="cloud__body">
            {[0, 1, 2].map(i => (
              <div key={i}>
                <Cuboid className="cuboid--cloud" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud Three */}
      <div className="cloud cloud--three">
        <div className="cloud__shift">
          <div className="cloud__body">
            {[0, 1, 2].map(i => (
              <div key={i}>
                <Cuboid className="cuboid--cloud" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plane */}
      <div className="plane__floater">
        <div className="plane__looper">
          <div className="plane">
            <div className="plane__wheels">
              <div className="plane__axle">
                <Cuboid className="cuboid--axle" />
              </div>
              <div className="plane__wheel plane__wheel--left">
                <Cuboid className="cuboid--wheel-left" />
              </div>
              <div className="plane__wheel plane__wheel--right">
                <Cuboid className="cuboid--wheel-right" />
              </div>
            </div>

            <div className="plane__body">
              <Cuboid className="cuboid--body" />
            </div>

            <div className="plane__nose">
              <Cuboid className="cuboid--nose" />
            </div>

            <div className="plane__propellor">
              <div className="propellor"></div>
            </div>

            <div className="plane__screen">
              <Cuboid className="cuboid--screen" />
            </div>

            <div className="plane__wings wings">
              <div className="wings__top">
                <Cuboid className="cuboid--wings-top" />
              </div>
              <div className="wings__ghost">
                <Cuboid className="cuboid--wings-ghost" />
              </div>
              <div className="wings__bottom">
                <Cuboid className="cuboid--wings-bottom" />
              </div>
              <div className="wings__strobe wings__strobe--left">
                <Cuboid className="cuboid--strobe" />
              </div>
              <div className="wings__strobe wings__strobe--right">
                <Cuboid className="cuboid--strobe" />
              </div>
            </div>

            <div className="plane__tail">
              <Cuboid className="cuboid--tail" />
            </div>

            <div className="plane__stabilizer plane__stabilizer--horizontal">
              <Cuboid className="cuboid--horizontal-stabilizer" />
            </div>

            <div className="plane__stabilizer plane__stabilizer--vertical">
              <Cuboid className="cuboid--vertical-stabilizer" />
            </div>

            <div className="plane__beacon">
              <Cuboid className="cuboid--beacon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scene;
