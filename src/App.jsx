import FuturisticGridBackground from './components/FuturisticGridBackground';
import AuthBox from "./components/AuthBox";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">
      {/* Background grid */}
      <FuturisticGridBackground />

      {/* Title + Tagline at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          Cognicalc
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-300">
          The Cognitive Calculator of the Future
        </p>
      </div>

      {/* Centered AuthBox */}
      <div className="flex items-center justify-center h-screen z-10 relative">
        <AuthBox />
      </div>
    </div>
  );
}

export default App;
