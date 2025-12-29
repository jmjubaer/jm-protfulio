'use client';

export default function GradientButton() {
  return (
    <button
      className="group relative inline-flex items-center gap-3
                 px-8 py-4 rounded-full
                 text-white font-semibold text-lg
                 bg-gradient-to-r from-cyan-500 to-blue-700
                 shadow-[0_0_20px_rgba(59,130,246,0.5)]
                 transition-all duration-300 ease-out
                 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
                 hover:scale-[1.03]"
    >
      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

      <span>More About Us</span>

      {/* Inner glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full
                   bg-gradient-to-r from-white/20 to-transparent
                   opacity-0 group-hover:opacity-100
                   transition duration-300"
      />
    </button>
  );
}