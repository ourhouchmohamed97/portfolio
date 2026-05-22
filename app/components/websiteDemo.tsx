"use client";

interface WebsiteDemoProps {
  image: string;
  title: string;
  description?: string;
  badge?: string;
  projectName: string;
  projectType?: string;
}

export function WebsiteDemo({ 
  image, 
  title, 
  description, 
  badge,
  projectName, 
  projectType = "Web Application"
}: WebsiteDemoProps) {
  
  const urlSlug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-900 dark:to-pink-900">
      
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className="relative z-20 text-center space-y-4 mb-12 max-w-2xl">
        <div className="inline-block px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full mb-2 border border-white/30">
          <span className="text-sm font-medium dark:text-white">{projectType}</span>
        </div>
        <h1 className="font-bold text-4xl md:text-5xl tracking-tight dark:text-white drop-shadow-lg">
          {projectName}
        </h1>
      </div>

      {/* Browser Frame */}
      <div className="relative z-10 w-full max-w-3xl">
        <div className="relative dark:bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden">
          
          {/* Browser Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border-b border-zinc-200 dark:border-zinc-700">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            
            {/* URL bar */}
            <div className="flex-1 mx-4">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg border border-zinc-200 dark:border-zinc-700">
                <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs dark:text-black truncate">
                  {urlSlug}.demo.app
                </span>
              </div>
            </div>

            {/* Optional badge */}
            {badge && (
              <span className="px-4 py-1 text-xs font-medium bg-zinc-200/50 bg-white text-zinc-700 dark:text-black rounded-md border border-zinc-300 dark:border-zinc-600">
                {badge}
              </span>
            )}
          </div>

          {/* Content Area - Single Image */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Footer */}
          {description && (
            <div className="px-6 py-4 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-700">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          )}
        </div>

        {/* Floating glow - Purple gradient */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-900 dark:to-pink-900 opacity-20 blur-3xl rounded-3xl animate-pulse" />
      </div>
    </div>
  );
}