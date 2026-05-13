import { useCursorGlow } from '../hooks/useCursorGlow';

export default function BackgroundEffects() {
  const glowRef = useCursorGlow();

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow--purple"></div>
      <div className="bg-glow bg-glow--blue"></div>
      <div className="bg-glow bg-glow--cyan"></div>
      <div className="cursor-glow" ref={glowRef}></div>
    </>
  );
}
