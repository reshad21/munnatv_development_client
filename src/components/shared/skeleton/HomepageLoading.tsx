"use client";

import { motion } from "framer-motion";

export default function HomepageLoading() {
  return (
    <div className="flex items-center justify-center h-screen ">
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center space-y-6"
      >
        {/* Logo / Spinner */}
        <motion.div
          className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        />

        {/* Company Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-wide"
        >
          Softysta
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl font-light"
        >
          Building Web Solutions with Impact
        </motion.p>
      </motion.div>
    </div>
  );
}
