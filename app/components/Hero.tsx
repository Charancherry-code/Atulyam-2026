export default function Hero() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
      <div className="text-center animate-fade-in-up px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-linear-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          ATULYAM
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 bg-linear-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
          Haru no Stars
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 italic mb-4 tracking-wider">
          Where Cultures Bloom & Stars Shine
        </p>
        <span className="inline-block text-3xl sm:text-4xl animate-bounce">
          🌸
        </span>
      </div>
    </div>
  );
}
