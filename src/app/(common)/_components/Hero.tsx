"use client"
import { motion } from "framer-motion"
import { World } from "@/components/ui/globe"

export function Hero() {
  const globeConfig = {
    pointSize: 6,
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#84cc16",
    atmosphereAltitude: 0.2,
    emissive: "#000000",
    emissiveIntensity: 0.15,
    shininess: 1.2,
    polygonColor: "rgba(132, 204, 22, 0.8)",
    ambientLight: "#84cc16",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 800,
    arcLength: 0.9,
    rings: 2,
    maxRings: 4,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  const colors = ["#84cc16", "#65a30d", "#a3e635", "#bef264"]

  const globalArcs = [
    // Original arcs
    {
      order: 1,
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.4,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 4,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.5,
      color: colors[3],
    },
    {
      order: 5,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.4,
      color: colors[0],
    },
    {
      order: 6,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.6,
      color: colors[1],
    },
    // Additional connecting arcs for more dots
    {
      order: 7,
      startLat: 55.7558,
      startLng: 37.6176,
      endLat: 39.9042,
      endLng: 116.4074,
      arcAlt: 0.35,
      color: colors[2],
    },
    {
      order: 8,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 41.9028,
      endLng: 12.4964,
      arcAlt: 0.25,
      color: colors[3],
    },
    {
      order: 9,
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: -26.2041,
      endLng: 28.0473,
      arcAlt: 0.45,
      color: colors[0],
    },
    {
      order: 10,
      startLat: 59.9311,
      startLng: 30.3609,
      endLat: 60.1699,
      endLng: 24.9384,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 11,
      startLat: 19.4326,
      startLng: -99.1332,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.4,
      color: colors[2],
    },
    {
      order: 12,
      startLat: 31.2304,
      startLng: 121.4737,
      endLat: 37.5665,
      endLng: 126.978,
      arcAlt: 0.3,
      color: colors[3],
    },
    {
      order: 13,
      startLat: 6.5244,
      startLng: 3.3792,
      endLat: -1.2921,
      endLng: 36.8219,
      arcAlt: 0.35,
      color: colors[0],
    },
    {
      order: 14,
      startLat: 13.7563,
      startLng: 100.5018,
      endLat: 21.0285,
      endLng: 105.8542,
      arcAlt: 0.25,
      color: colors[1],
    },
    {
      order: 15,
      startLat: -37.8136,
      startLng: 144.9631,
      endLat: -41.2865,
      endLng: 174.7762,
      arcAlt: 0.3,
      color: colors[2],
    },
  ]

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/5 rounded-full blur-3xl"></div>

        {/* Circuit-like tech elements */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1920 1080">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#84cc16" strokeWidth="0.5" opacity="0.3" />
              <circle cx="10" cy="10" r="2" fill="#84cc16" opacity="0.6" />
              <circle cx="90" cy="90" r="2" fill="#a3e635" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Abstract flowing shapes */}
        <div className="absolute top-10 right-10 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin" style={{ animationDuration: "20s" }}>
            <path d="M50,100 Q100,50 150,100 Q100,150 50,100" fill="none" stroke="#84cc16" strokeWidth="2" />
            <path d="M75,100 Q100,75 125,100 Q100,125 75,100" fill="none" stroke="#a3e635" strokeWidth="1" />
          </svg>
        </div>

        {/* Data stream lines */}
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent animate-pulse delay-500"></div>

        {/* Corner tech elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-lime-400/40"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-lime-400/40"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-lime-400/40"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-lime-400/40"></div>
      </div>

      <div className="relative z-30 container mx-auto px-4 pt-20 pb-16 min-h-screen">
        <div className="flex flex-col items-center text-center space-y-16 min-h-[90vh]">
          {/* Top Content - Futuristic Header */}
          <motion.div
            className="space-y-8 max-w-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-lime-400 to-lime-300 text-black px-8 py-4 rounded-full text-sm font-bold tracking-widest shadow-lg shadow-lime-400/25 border border-lime-300/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ◆ GLOBAL NETWORK ACTIVE ◆
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tighter">
                <span className="block text-white font-mono">QUALITY FIRST</span>
                <span className="block bg-gradient-to-r from-lime-400 via-lime-300 to-lime-500 bg-clip-text text-transparent font-mono">
                  QUANTITY NEXT
                </span>
              </h1>

              <div className="flex items-center justify-center gap-4 text-lime-400 font-mono text-lg tracking-widest">
                <div className="w-8 h-px bg-lime-400"></div>
                <span>CONNECTING WORLDS</span>
                <div className="w-8 h-px bg-lime-400"></div>
              </div>
            </motion.div>

            <motion.p
              className="text-slate-300 text-lg lg:text-xl leading-relaxed max-w-3xl font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience the future of global connectivity through our advanced neural network infrastructure.
              Seamlessly linking continents with quantum-speed data transmission and AI-powered optimization.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center w-full max-w-5xl h-[700px] lg:h-[800px] -mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Globe Container */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 z-10">
                <World data={globalArcs} globeConfig={globeConfig} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
    </section>
  )
}
