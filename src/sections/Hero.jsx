import { Canvas } from "@react-three/fiber";
// import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help brands and startups gain a competitive edge by building high-performance, scalable full-stack web solutions.
`;
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Full Stack Developer"}
        title={"Shammi N."}
        text={text}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[0, 5, -9]}
                scale={10}
                color="#00ff00"
              />
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[0, 3, 1]}
                scale={10}
                color="#0066ff"
              />
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[-5, -1, -1]}
                scale={10}
                color="#ff3300"
              />
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[10, 1, 0]}
                scale={16}
                color="#ffffff"
              />
            </group>
          </Environment>
        </Canvas> */}
      </figure>
    </section>
  );
};

export default Hero;
