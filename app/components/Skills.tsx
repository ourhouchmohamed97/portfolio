'use client';
import React, { useState } from 'react';
import {
  ReactIcon, NextIcon, JsIcon, TsIcon, NodeIcon, PythonIcon, JavaIcon, CIcon, CppIcon, 
  GraphQLIcon, PhpIcon, BashIcon, GithubIcon, SupabaseIcon, NginxIcon, MarkdownIcon,
  MongoIcon, FirebaseIcon, FlutterIcon, DartIcon, FigmaIcon, TailwindIcon, FastAPIIcon,
  DockerIcon, GitIcon, LinuxIcon, VercelIcon, BetterAuthIcon, SocketIcon, UMLIcon
} from './Icons';

interface SkillCardProps {
    icon: React.ElementType;
    name: string;
    delay: number;
  }

const SkillCard = ({ icon: Icon, name, delay }: SkillCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative group"
      style={{
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${delay}s`,
        opacity: 0
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative w-28 h-28 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:border-white/30 group-hover:bg-gradient-to-br group-hover:from-slate-700/80 group-hover:to-slate-800/80 group-hover:shadow-2xl">
        <Icon className="w-12 h-12 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
      </div>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-14 px-4 py-2 bg-white/95 dark:bg-black/95 text-black dark:text-white text-sm font-medium rounded-xl whitespace-nowrap z-50 border border-white/20 shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
        {name}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-black/95 dark:border-t-white/95" />
        </div>
      )}
    </div>
  );
};

const SkillsSection = () => {
  
  const skills = [
    { name: 'React', icon: ReactIcon },
    { name: 'Next.js', icon: NextIcon },
    { name: 'JavaScript', icon: JsIcon },
    { name: 'TypeScript', icon: TsIcon },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'PHP', icon: PhpIcon },
    { name: 'C', icon: CIcon },
    { name: 'C++', icon: CppIcon },
    { name: 'GraphQL', icon: GraphQLIcon },
    { name: 'MongoDB', icon: MongoIcon },
    { name: 'Firebase', icon: FirebaseIcon },
    { name: 'Supabase', icon: SupabaseIcon },
    { name: 'Flutter', icon: FlutterIcon },
    { name: 'Dart', icon: DartIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'GitHub', icon: GithubIcon },
    { name: 'Linux', icon: LinuxIcon },
    { name: 'Bash', icon: BashIcon },
    { name: 'Vercel', icon: VercelIcon },
    { name: 'Socket.io', icon: SocketIcon },
    { name: 'Better Auth', icon: BetterAuthIcon },
    { name: 'UML', icon: UMLIcon },
    { name: 'Markdown', icon: MarkdownIcon },
    { name: 'Nginx', icon: NginxIcon },
    { name: 'FastAPI', icon: FastAPIIcon }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden py-20 px-4">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Skills Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-16 justify-items-center">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default SkillsSection;