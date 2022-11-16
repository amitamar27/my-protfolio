import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export function ParticlesBgc() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <main className="particles-container">
      <Particles init={particlesInit} options={particlesConfig}></Particles>
    </main>
  );
}
