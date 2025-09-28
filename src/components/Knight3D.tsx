import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

interface Knight3DProps {
  onMove: () => void;
}

const KnightMesh = ({ onRotate }: { onRotate: () => void }) => {
  const meshRef = useRef<Mesh>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [isRotating, setIsRotating] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && !isRotating) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  useEffect(() => {
    if (isRotating) {
      const timer = setTimeout(() => {
        setIsRotating(false);
        onRotate();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isRotating, onRotate]);

  const handlePointerDown = () => {
    if (!isRotating) {
      setIsRotating(true);
      setRotation(prev => ({
        x: prev.x + Math.PI * 2,
        y: prev.y + Math.PI * 2,
        z: prev.z + Math.PI
      }));
    }
  };

  return (
    <Center>
      <mesh
        ref={meshRef}
        onPointerDown={handlePointerDown}
        rotation={[rotation.x, rotation.y, rotation.z]}
        scale={2}
      >
        {/* Knight base */}
        <cylinderGeometry args={[0.6, 0.8, 0.3, 8]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.8} 
          roughness={0.2}
        />
        
        {/* Knight body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.8, 1, 0.6]} />
          <meshStandardMaterial 
            color="#16213e" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Knight head/mane */}
        <mesh position={[0, 1.2, 0.2]} rotation={[0.2, 0, 0]}>
          <coneGeometry args={[0.5, 0.8, 6]} />
          <meshStandardMaterial 
            color="#0f3460" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        {/* Knight ears */}
        <mesh position={[-0.2, 1.5, 0.3]}>
          <coneGeometry args={[0.1, 0.3, 4]} />
          <meshStandardMaterial 
            color="#0f3460" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0.2, 1.5, 0.3]}>
          <coneGeometry args={[0.1, 0.3, 4]} />
          <meshStandardMaterial 
            color="#0f3460" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        {/* Golden accents */}
        <mesh position={[0, 0.8, 0.4]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial 
            color="#d4af37" 
            metalness={1} 
            roughness={0}
          />
        </mesh>
      </mesh>
    </Center>
  );
};

export const Knight3D = ({ onMove }: Knight3DProps) => {
  const [startTouch, setStartTouch] = useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setStartTouch({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!startTouch) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - startTouch.x;
    const deltaY = touch.clientY - startTouch.y;
    
    // Check if it's a swipe (minimum distance)
    if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
      // Trigger rotation and transition
      setTimeout(() => {
        onMove();
      }, 1200);
    }
    
    setStartTouch(null);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-chess text-white p-4 sm:p-8"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-center mb-6 sm:mb-8 animate-fade-in px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-3 sm:mb-4 leading-tight">
          Welcome, my pleasure to have you here.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl opacity-90">
          Touch or swipe the knight to enter.
        </p>
      </div>

      <div className="w-full max-w-lg h-96 sm:h-[500px] md:h-[600px]">
        <Canvas
          camera={{ position: [0, 2, 5], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            color="#d4af37"
          />
          <directionalLight 
            position={[-10, -10, -5]} 
            intensity={0.5} 
            color="#ffffff"
          />
          <pointLight 
            position={[0, 5, 0]} 
            intensity={0.8} 
            color="#d4af37"
          />
          
          <KnightMesh onRotate={onMove} />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
          />
        </Canvas>
      </div>

      <div className="mt-6 sm:mt-8 text-center animate-fade-in px-4">
        <p className="text-sm sm:text-lg opacity-75">
          Click, touch, or swipe the knight to begin your journey
        </p>
      </div>
    </div>
  );
};