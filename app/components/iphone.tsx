import { useState, useCallback } from "react";
import { Iphone } from "@/components/ui/iphone";

export function PhoneDemo() {
  const [activePhone, setActivePhone] = useState(1);

  const phones = [
    { 
      image: "/projects/welcome.png",
      title: "Welcome",
      color: "blue",
      description: "Welcome screen with onboarding"
    },
    { 
      image: "/projects/haymobility-dashboard.png",
      title: "Dashboard",
      color: "purple",
      description: "Main dashboard with car tracking"
    },
    { 
      image: "/projects/Screen-Shot-2025-07-06-at-6-53-37-PM.png",
      title: "History",
      color: "cyan",
      description: "Trip history with detailed logs and statistics"
    },
  ];

  const colorMap = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    cyan: "from-cyan-500 to-teal-500"
  } as const;

  // Get gradient class safely with fallback
  const getGradientClass = (color: string) => {
    return colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-700";
  };

  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-20 text-center space-y-4 mb-12 max-w-2xl">
        <div className="inline-block px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full mb-2 border border-white/30">
          <span className="text-sm font-medium dark:text-white">Mobile App</span>
        </div>
        <h1 className="font-bold text-5xl tracking-tight text-slate-900 dark:text-white">
          HayMobility
        </h1>
      </div>

      {/* Phone Showcase */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="flex items-center justify-center gap-8 px-8">
          {phones.map((phone, index) => {
            const isActive = activePhone === index;
            const isLeft = index < activePhone;
            const isRight = index > activePhone;

            return (
              <button
                key={index}
                onClick={() => setActivePhone(index)}
                className={`
                  relative transition-all duration-700 ease-out cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-[3rem]
                  ${isActive ? 'scale-110 z-30' : 'scale-90 z-10'}
                  ${isLeft ? '-rotate-12 translate-x-12 opacity-40 hover:opacity-70' : ''}
                  ${isRight ? 'rotate-12 -translate-x-12 opacity-40 hover:opacity-70' : ''}
                  ${isActive ? 'opacity-100' : 'hover:scale-95'}
                  transform-gpu will-change-transform
                `}
              >
                {/* Glow effect for active phone */}
                {isActive && (
                  <div 
                    className={`
                      absolute -inset-4 bg-gradient-to-r ${getGradientClass(phone.color)} 
                      opacity-20 blur-2xl rounded-[3rem] animate-pulse
                    `}
                  />
                )}

                {/* Phone container */}
                <div className="relative w-64 h-[500px]">
                  <Iphone 
                    src={phone.image} 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  
                  {/* Shine effect on active */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 rounded-[2.5rem] pointer-events-none" />
                  )}
                </div>

                {/* Selection indicator */}
                {isActive && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active phone details */}
        <div className="mt-16 text-center space-y-3 transition-all duration-500">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {phones[activePhone].title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            {phones[activePhone].description}
          </p>
        </div>
      </div>
    </div>
  );
}