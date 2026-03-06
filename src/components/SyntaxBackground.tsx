"use client";

export default function SyntaxBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Noise/Grain Effect */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white/[0.03] blur-[100px] rounded-full" />
    </div>
  );
}