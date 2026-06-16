import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, Cpu, Award, Zap, Activity } from 'lucide-react';

// Specialized eye-testing growth metrics
const chartData = [
  { year: '2021', accuracy: 91.2, volume: 15, sensors: 4, indexName: 'Standard Diagnostic' },
  { year: '2022', accuracy: 93.8, volume: 32, sensors: 8, indexName: 'Auto-Ref HD 1.0' },
  { year: '2023', accuracy: 96.1, volume: 54, sensors: 12, indexName: 'Wavefront Map v2' },
  { year: '2024', accuracy: 98.4, volume: 78, sensors: 18, indexName: 'Zero-Error Digital' },
  { year: '2025', accuracy: 99.5, volume: 95, sensors: 24, indexName: 'Double Aspheric AI' },
  { year: '2026', accuracy: 99.9, volume: 120, sensors: 32, indexName: 'Clinically Certified Ultimate' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-slate-700/60 p-4 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="font-display font-bold text-xs text-amber-400 mb-2 uppercase tracking-widest">
          Year {label} Evolution
        </p>
        <p className="font-sans text-[11px] text-gray-400 font-bold mb-1">
          Machine Gen: <span className="text-white font-extrabold">{data.indexName}</span>
        </p>
        <div className="space-y-1.5 pt-1.5 border-t border-slate-800">
          <div className="flex items-center justify-between gap-6">
            <span className="font-sans text-[10px] text-gray-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full inline-block" />
              Sensor Precision Accuracy:
            </span>
            <span className="font-mono text-xs font-black text-blue-300">
              {data.accuracy}%
            </span>
          </div>
          <div className="flex items-center justify-between gap-6">
            <span className="font-sans text-[10px] text-gray-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full inline-block" />
              Daily Digital Exams Run:
            </span>
            <span className="font-mono text-xs font-black text-amber-300">
              {data.volume}+ / day
            </span>
          </div>
          <div className="flex items-center justify-between gap-6">
            <span className="font-sans text-[10px] text-gray-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
              Advanced Diagnostics:
            </span>
            <span className="font-mono text-xs font-black text-emerald-300">
              {data.sensors} Active Sensors
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function TechnologyGrowthChart() {
  const [activeMetric, setActiveMetric] = useState<'accuracy' | 'volume'>('accuracy');

  return (
    <motion.div
      id="tech-evolution-panel"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-navy-100/20 max-w-5xl mx-auto mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Descriptive Column */}
        <div className="lg:col-span-5 space-y-5 text-left">
          <span className="inline-flex items-center gap-1.5 bg-navy-50 text-navy-600 font-sans text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            <Cpu className="h-3 w-3 text-navy-500 animate-spin" style={{ animationDuration: '4s' }} />
            Diagnostic Innovation
          </span>
          
          <h3 className="font-display text-2xl font-bold text-navy-950 tracking-tight leading-tight">
            Specialized Tech Growth & Precision Metrics
          </h3>
          
          <p className="font-sans text-sm text-gray-500 leading-relaxed">
            By continually deploying modern Wavefront laser scanners and computed autorefracting systems, LensFab reached <strong className="text-navy-900 font-semibold font-sans">99.9% clinical accuracy</strong> in 2026. This chart visualizes our progression in error correction over time.
          </p>

          {/* Metric Selector Toggles */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <button
              id="metric-toggle-accuracy"
              onClick={() => setActiveMetric('accuracy')}
              className={`flex items-center justify-between sm:justify-start gap-3 p-3 rounded-xl border text-left transition-all flex-1 cursor-pointer ${
                activeMetric === 'accuracy'
                  ? 'bg-navy-600 border-navy-650 text-white shadow-md shadow-navy-600/10'
                  : 'bg-[#FAFDFE] hover:bg-navy-50/50 border-gray-150 text-navy-950'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${activeMetric === 'accuracy' ? 'bg-navy-500 text-white' : 'bg-navy-100/50 text-navy-600'}`}>
                <Activity className="h-4 w-4" />
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase font-extrabold tracking-wider opacity-85 block">
                  Sensor Testing Precision
                </span>
                <span className="font-sans text-xs font-bold block mt-0.5">
                  91.2% → 99.9% Rate
                </span>
              </div>
            </button>

            <button
              id="metric-toggle-volume"
              onClick={() => setActiveMetric('volume')}
              className={`flex items-center justify-between sm:justify-start gap-3 p-3 rounded-xl border text-left transition-all flex-1 cursor-pointer ${
                activeMetric === 'volume'
                  ? 'bg-navy-600 border-navy-650 text-white shadow-md shadow-navy-600/10'
                  : 'bg-[#FAFDFE] hover:bg-navy-50/50 border-gray-150 text-navy-950'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${activeMetric === 'volume' ? 'bg-navy-500 text-white' : 'bg-navy-100/50 text-navy-600'}`}>
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase font-extrabold tracking-wider opacity-85 block">
                  Daily Patient Surveys
                </span>
                <span className="font-sans text-xs font-bold block mt-0.5">
                  15 to 120+ Daily Exams
                </span>
              </div>
            </button>
          </div>

          {/* Core Highlights list */}
          <div className="space-y-3 pt-3 border-t border-gray-100">
            <div className="flex items-start gap-2.5">
              <div className="bg-emerald-50 text-emerald-600 p-1 rounded-md mt-0.5">
                <Award className="h-3.5 w-3.5" />
              </div>
              <div>
                <h5 className="font-sans text-xs font-bold text-navy-950">Zero-Error Precision Standards</h5>
                <p className="font-sans text-[11px] text-gray-400 mt-0.5">Eliminated conventional testing margin defects using digital cross-sensor verification.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="bg-amber-50 text-amber-600 p-1 rounded-md mt-0.5">
                <Zap className="h-3.5 w-3.5" />
              </div>
              <div>
                <h5 className="font-sans text-xs font-bold text-navy-950">Double Aspheric Auto Mapping</h5>
                <p className="font-sans text-[11px] text-gray-400 mt-0.5">Dual lasers automatically trace and structure index values in 4.2 milliseconds.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recharts Container Column */}
        <div className="lg:col-span-7 bg-[#FAFDFE] border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-inner relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-sans text-[9px] text-gray-400 uppercase font-black tracking-widest block">
                Historical Progression
              </span>
              <h4 className="font-sans text-xs font-bold text-navy-900 mt-0.5">
                {activeMetric === 'accuracy' ? 'Precision Accuracy Level (%)' : 'Automated Eye-Tests Checked Daily'}
              </h4>
            </div>
            <span className="font-mono text-[10px] text-navy-600 bg-navy-50 px-2 py-1 rounded-md font-extrabold">
              Unit: {activeMetric === 'accuracy' ? 'Accuracy Rate %' : 'Exams Count'}
            </span>
          </div>

          <div className="h-[280px] w-full font-mono text-[10px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={activeMetric === 'accuracy' ? '#3b82f6' : '#d97706'} stopOpacity={0.25}/>
                    <stop offset="95%" stopColor={activeMetric === 'accuracy' ? '#3b82f6' : '#d97706'} stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="year" 
                  tickLine={false} 
                  axisLine={false} 
                  stroke="#94a3b8" 
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 'bold' }}
                />
                <YAxis 
                  tickLine={false} 
                  axisLine={false} 
                  domain={activeMetric === 'accuracy' ? [90, 101] : [0, 130]} 
                  stroke="#94a3b8"
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey={activeMetric} 
                  stroke={activeMetric === 'accuracy' ? '#2563eb' : '#d97706'} 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  activeDot={{ r: 6, strokeWidth: 0, fill: activeMetric === 'accuracy' ? '#1d4ed8' : '#b45309' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-5 mt-4 pt-4 border-t border-gray-100/60 font-sans text-[10px] text-gray-400 font-bold">
            <div className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${activeMetric === 'accuracy' ? 'bg-blue-600' : 'bg-amber-600'}`} />
              <span>{activeMetric === 'accuracy' ? 'Digital Calibration (Accuracy %)' : 'Survey Volumes (Daily)'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Diagnostic Instruments</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
