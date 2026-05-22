// components/WebsiteDemo.tsx
import { useState } from "react";

interface WebsiteView {
  image: string;
  title: string;
  description: string;
  badge?: string;
  color?: "blue" | "purple" | "cyan" | "indigo" | "pink" | "emerald" | "orange";
}

interface WebsiteDemoProps {
  views: [WebsiteView, WebsiteView];
  projectName: string;
  projectType?: string;
  defaultColor?: string;
}

export function WebsiteDemo({ 
  views, 
  projectName, 
  projectType = "Web Application",
  defaultColor = "indigo"
}: WebsiteDemoProps) {
  const [activeView, setActiveView] = useState(0);

  // ✅ Gradient color map (matches PhoneDemo)
  const colorMap = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    cyan: "from-cyan-500 to-teal-500",
    indigo: "from-indigo-500 to-purple-500",
    pink: "from-pink-500 to-rose-500",
    emerald: "from-emerald-500 to-teal-500",
    orange: "from-orange-500 to-amber-500"
  } as const;

  // ✅ Get gradient class safely with fallback
  const getGradientClass = (color?: string) => {
    if (!color) return colorMap[defaultColor as keyof typeof colorMap] || "from-gray-500 to-gray-700";
    return colorMap[color as keyof typeof colorMap] || colorMap[defaultColor as keyof typeof colorMap] || "from-gray-500 to-gray-700";
  };

  // ✅ Get active view's gradient
  const activeGradient = getGradientClass(views[activeView].color);

  return (
    <div className={`relative w-full min-h-[600px] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br ${activeGradient} dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-700`}>
      
      {/* Decorative background elements - tinted to match gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000`} />
      </div>

      {/* Header */}
      <div className="relative z-20 text-center space-y-4 mb-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium text-white">{projectType}</span>
        </div>
        <h1 className="font-bold text-4xl md:text-5xl tracking-tight text-white drop-shadow-lg">
          {projectName}
        </h1>
      </div>

      {/* Browser Window Frame */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden">
          
          {/* Browser Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border-b border-zinc-200 dark:border-zinc-700">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition cursor-pointer" />
            </div>
            
            {/* URL bar */}
            <div className="flex-1 mx-4">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  {views[activeView].title.toLowerCase().replace(/\s+/g, '-')}.demo.app
                </span>
              </div>
            </div>

            {/* View tabs */}
            <div className="flex items-center gap-1 bg-zinc-200/50 dark:bg-zinc-700/50 rounded-lg p-1">
              {views.map((view, index) => (
                <button
                  key={index}
                  onClick={() => setActiveView(index)}
                  className={`
                    px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300
                    ${activeView === index 
                      ? 'bg-white dark:bg-zinc-600 text-zinc-900 dark:text-white shadow-sm' 
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
                    }
                  `}
                >
                  {view.badge || view.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
            {views.map((view, index) => (
              <div
                key={index}
                className={`
                  absolute inset-0 transition-all duration-700 ease-out
                  ${activeView === index 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-95 z-0 pointer-events-none'
                  }
                `}
              >
                <img
                  src={view.image}
                  alt={`${projectName} - ${view.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
            ))}

            {/* Shine effect */}
            <div 
              key={activeView}
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 pointer-events-none animate-shine"
              style={{ animationDuration: '1.5s' }}
            />
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {views[activeView].title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {views[activeView].description}
                </p>
              </div>
              
              {/* Navigation dots */}
              <div className="flex items-center gap-2">
                {views.map((view, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveView(index)}
                    className={`
                      transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500
                      ${activeView === index 
                        ? 'w-6 h-2 bg-purple-500 dark:bg-purple-400' 
                        : 'w-2 h-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                      }
                    `}
                    aria-label={`View ${view.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Floating glow that matches active gradient */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${activeGradient} opacity-20 blur-3xl rounded-3xl animate-pulse transition-colors duration-700`} />
      </div>

      {/* CSS for shine animation */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}