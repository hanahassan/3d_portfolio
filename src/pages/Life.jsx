import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { useState, Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import Loader from '../components/Loader';
import Earth from '../models/Earth';


const Life = () => {
  const [isEarthRotating, setIsEarthRotating] = useState(false);

  const adjustEarthForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -47];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [6, 6, 6];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="pink-gradient_text font-semibold drop-shadow-sm">Life</span> In a Nutshell
      </h1>

      <div>
        <p className="mt-5 flex-col gap-3 text-slate-500">
          Here's a small breakdown of a few different parts of my life.
        </p>
      </div>

      <div className="relative w-full h-[50vh]">
        <Canvas
        className={`w-full h-screen bg-transparent ${isEarthRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            <Earth 
              position={earthPosition}
              scale={earthScale}
              rotation={earthRotation} 
              isEarthRotating={isEarthRotating}
              setIsEarthRotating={setIsEarthRotating}
            />        
          </Suspense>
        </Canvas>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}

export default Life;
