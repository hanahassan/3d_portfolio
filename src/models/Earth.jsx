import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import earthScene from '../assets/3d/earth.glb';

const Earth = ({ isEarthRotating, setIsEarthRotating, ...props }) => {
  const earthRef = useRef();
  const group = useRef();
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsEarthRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsEarthRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (isEarthRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      earthRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isEarthRotating) setIsEarthRotating(true);
      earthRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (e.key === 'ArrowRight') {
      if (!isEarthRotating) setIsEarthRotating(true);
      earthRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsEarthRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl]);

  useFrame(() => {
    if (!isEarthRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      earthRef.current.rotation.y += rotationSpeed.current;
    }
  });

  const { nodes, materials } = useGLTF(earthScene);

  return (
    <a.group ref={earthRef} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="578a67fb859c4432ad395a9d408af1e7fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Earth" rotation={[-Math.PI / 2, 0, 0.681]} scale={358.622}>
                  <mesh name="Earth_Ice_0" geometry={nodes.Earth_Ice_0.geometry} material={materials.material} />
                  <mesh name="Earth_Water_0" geometry={nodes.Earth_Water_0.geometry} material={materials.Water} />
                  <mesh name="Earth_Sand_0" geometry={nodes.Earth_Sand_0.geometry} material={materials.Sand} />
                  <mesh name="Earth_Grass_0" geometry={nodes.Earth_Grass_0.geometry} material={materials.Grass} />
                  <group name="Earth_Details" position={[0.163, -0.812, 0.592]} rotation={[-0.525, -0.789, -2.962]} scale={[0.006, 0.006, 0.009]}>
                    <mesh name="Earth_Details_Wood_0" geometry={nodes.Earth_Details_Wood_0.geometry} material={materials.Wood} />
                    <mesh name="Earth_Details_Tree_0" geometry={nodes.Earth_Details_Tree_0.geometry} material={materials.Tree} />
                    <mesh name="Earth_Details_Tree_0_1" geometry={nodes.Earth_Details_Tree_0_1.geometry} material={materials.Tree} />
                    <mesh name="Earth_Details_Ice_0" geometry={nodes.Earth_Details_Ice_0.geometry} material={materials.material} />
                    <mesh name="Earth_Details_Blue_0" geometry={nodes.Earth_Details_Blue_0.geometry} material={materials.Blue} />
                    <mesh name="Earth_Details_Sand_0" geometry={nodes.Earth_Details_Sand_0.geometry} material={materials.Sand} />
                    <mesh name="Earth_Details_red_0" geometry={nodes.Earth_Details_red_0.geometry} material={materials.material_7} />
                  </group>
                  <group name="Clouds_and_Stars" position={[-0.577, -0.085, 0.844]} rotation={[-1.555, -0.135, 2.627]} scale={0.042}>
                    <mesh name="Clouds_and_Stars_Ice_0" geometry={nodes.Clouds_and_Stars_Ice_0.geometry} material={materials.material} />
                    <mesh name="Clouds_and_Stars_Star_0" geometry={nodes.Clouds_and_Stars_Star_0.geometry} material={materials.Star} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Earth;
