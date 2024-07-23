import { useState, useEffect, Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    let timer;
    
    const handleSpinTimeout = () => {
      timer = setTimeout(() => {
        setShowArrow(true);
      }, 7000); 
    };

    handleSpinTimeout();

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isRotating) {
      setShowArrow(false); // Hide the arrow when the screen starts rotating
    }
  }, [isRotating]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -47];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.6];
      screenPosition = [0, -1.4, 0];
    } else {
      screenScale = [3, 3, 3.3];
      screenPosition = [0, -3, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      {showArrow && !isRotating && (
        <div className="arrow-container">
          <div className="arrow">↻</div>
          <div className="arrow-box">
            <div className="arrow-text">Spin the screen to explore the island!</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
