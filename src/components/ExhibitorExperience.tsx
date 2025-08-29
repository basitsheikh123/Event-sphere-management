"use client"

import { useState } from "react";
import { motion } from "motion/react";
import { IconMapPin, IconUsers, IconCalendar, IconTrendingUp } from "@tabler/icons-react";
import boothGridImage from "@/assets/booth-grid.jpg";

const booths = [
  { id: "A1", status: "available", price: "$2,500", size: "10x10", features: ["Power", "WiFi", "Storage"] },
  { id: "A2", status: "booked", price: "$2,500", size: "10x10", features: ["Power", "WiFi"] },
  { id: "A3", status: "premium", price: "$4,500", size: "15x15", features: ["Power", "WiFi", "Storage", "Display"] },
  { id: "B1", status: "available", price: "$3,000", size: "10x15", features: ["Power", "WiFi", "Storage"] },
  { id: "B2", status: "available", price: "$2,200", size: "8x10", features: ["Power", "WiFi"] },
  { id: "B3", status: "booked", price: "$3,500", size: "12x12", features: ["Power", "WiFi", "Storage"] },
  { id: "C1", status: "premium", price: "$5,000", size: "20x20", features: ["Power", "WiFi", "Storage", "Display", "Meeting Room"] },
  { id: "C2", status: "available", price: "$2,800", size: "10x12", features: ["Power", "WiFi", "Storage"] },
  { id: "C3", status: "available", price: "$2,600", size: "10x10", features: ["Power", "WiFi"] }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "available": return "bg-green-500/80 hover:bg-green-400";
    case "booked": return "bg-red-500/80 cursor-not-allowed";
    case "premium": return "bg-vivid-blue/80 hover:bg-vivid-blue";
    default: return "bg-gray-500/80";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "available": return "Available";
    case "booked": return "Booked";
    case "premium": return "Premium";
    default: return "Unknown";
  }
};

export function ExhibitorExperience() {
  const [selectedBooth, setSelectedBooth] = useState<string | null>(null);
  const [hoveredBooth, setHoveredBooth] = useState<string | null>(null);

  const selectedBoothData = booths.find(booth => booth.id === selectedBooth);

  return (
    <section className="py-24 bg-gradient-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-white mb-6">
            Exhibitor
            <span className="block bg-linear-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
              Marketplace
            </span>
          </h2>
          <p className="font-quicksand text-xl text-white/80 max-w-3xl mx-auto">
            Interactive booth selection with real-time availability, pricing, and AI-powered recommendations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booth Grid */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Image */}
              <div className="relative rounded-2xl overflow-hidden p-8 min-h-[500px]">
                <img 
                  src={boothGridImage.src} 
                  alt="Interactive booth layout grid"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-linear-to-br from-navy/80 to-deep-navy/90" />
                
                {/* Grid Overlay */}
                <div className="relative z-10 grid grid-cols-3 gap-4 h-full">
                  {booths.map((booth) => (
                    <motion.div
                      key={booth.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      onClick={() => booth.status !== "booked" && setSelectedBooth(booth.id)}
                      onHoverStart={() => setHoveredBooth(booth.id)}
                      onHoverEnd={() => setHoveredBooth(null)}
                      className={`
                        relative p-4 rounded-lg transition-all duration-300 cursor-pointer
                        ${getStatusColor(booth.status)}
                        ${selectedBooth === booth.id ? "ring-4 ring-white/50" : ""}
                        ${hoveredBooth === booth.id ? "shadow-glow" : ""}
                        ${booth.status === "booked" ? "opacity-50" : ""}
                      `}
                    >
                      <div className="text-white">
                        <div className="font-quicksand font-bold text-lg mb-1">{booth.id}</div>
                        <div className="font-quicksand text-sm opacity-90">{booth.size}</div>
                        <div className="font-quicksand text-xs mt-2 font-semibold">{booth.price}</div>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute -top-2 -right-2 px-2 py-1 bg-white/20 backdrop-blur-xs rounded-full text-xs font-quicksand text-white">
                        {getStatusText(booth.status)}
                      </div>

                      {/* Hover Details */}
                      {hoveredBooth === booth.id && booth.status !== "booked" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 right-0 mt-2 p-3 glass-card rounded-lg z-20 bg-navy/80 backdrop-blur-sm"
                        >
                          <div className="text-white text-xs space-y-1">
                            <div className="font-semibold">Features:</div>
                            {booth.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-vivid-blue rounded-full" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 flex gap-4 text-white text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-vivid-blue rounded" />
                    <span>Premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded" />
                    <span>Booked</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Details Panel */}
          <div className="space-y-6">
            {selectedBoothData ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-6"
              >
                <h3 className="font-quicksand text-2xl font-bold text-white mb-4">
                  Booth {selectedBoothData.id}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <IconMapPin className="w-5 h-5 text-vivid-blue" />
                    <div>
                      <div className="font-quicksand text-white text-sm">Size</div>
                      <div className="font-quicksand text-white/80 text-xs">{selectedBoothData.size} ft</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <IconTrendingUp className="w-5 h-5 text-vivid-blue" />
                    <div>
                      <div className="font-quicksand text-white text-sm">Price</div>
                      <div className="font-quicksand text-white/80 text-xs">{selectedBoothData.price}</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-quicksand text-white text-sm mb-2">Included Features</div>
                    <div className="space-y-2">
                      {selectedBoothData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-vivid-blue rounded-full" />
                          <span className="font-quicksand text-white/80 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedBoothData.status === "available" && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-linear-to-r from-vivid-blue to-royal-blue rounded-lg font-quicksand font-semibold text-white transition-all"
                    >
                      Reserve Booth
                    </motion.button>
                  )}

                  {selectedBoothData.status === "premium" && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-linear-to-r from-yellow-500 to-orange-500 rounded-lg font-quicksand font-semibold text-white transition-all"
                    >
                      Reserve Premium
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-card p-6 text-center"
              >
                <IconMapPin className="w-12 h-12 text-vivid-blue mx-auto mb-4" />
                <h3 className="font-quicksand text-xl font-bold text-white mb-2">
                  Select a Booth
                </h3>
                <p className="font-quicksand text-white/70 text-sm">
                  Click on any available booth to view details and pricing
                </p>
              </motion.div>
            )}

            {/* Quick Stats */}
            <div className="glass-card p-6">
              <h4 className="font-quicksand text-lg font-bold text-white mb-4">Event Stats</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-quicksand text-white/70 text-sm">Available Booths</span>
                  <span className="font-quicksand text-green-400 font-semibold">
                    {booths.filter(b => b.status === "available").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-quicksand text-white/70 text-sm">Premium Booths</span>
                  <span className="font-quicksand text-vivid-blue font-semibold">
                    {booths.filter(b => b.status === "premium").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-quicksand text-white/70 text-sm">Expected Attendees</span>
                  <span className="font-quicksand text-white font-semibold">12,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}