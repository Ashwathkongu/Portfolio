import { useState, useEffect, useRef } from 'react';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const projects = [
        {
            title: 'Smart AI Notes Summarizer',
            description: 'AI-based offline NLP summarization system utilizing lightweight language models. Features include automated quiz generation and image/audio-based explanations optimized for low-resource environments.',
            tech: ['Python', 'NLP', 'Machine Learning'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, rgba(5, 150, 105, 0.4) 0%, rgba(16, 185, 129, 0.2) 50%, rgba(34, 197, 94, 0.1) 100%)',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <line x1="9" y1="10" x2="15" y2="10"></line>
                    <line x1="9" y1="14" x2="13" y2="14"></line>
                </svg>
            )
        },
        {
            title: 'Plagiarism Checker',
            description: 'Console-based plagiarism detection system built using pure C. Implements string hashing algorithms and file-based storage to detect overlapping content with high memory efficiency.',
            tech: ['C', 'Algorithms', 'Data Structures'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, rgba(20, 83, 45, 0.4) 0%, rgba(34, 197, 94, 0.2) 50%, rgba(132, 204, 22, 0.1) 100%)',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <path d="M6 9l6 6 6-6"></path>
                    <path d="M3 12c0-1.657 2.239-3 5-3s5 1.343 5 3-2.239 3-5 3-5-1.343-5-3z"></path>
                    <path d="M11 12c0 1.657 2.239 3 5 3s5-1.343 5-3-2.239-3-5-3-5 1.343-5 3z"></path>
                    <circle cx="12" cy="12" r="1"></circle>
                </svg>
            )
        },
        {
            title: 'Gamified Offline Learning',
            description: 'Interactive learning games using pure JavaScript and animated SVGs. Features multi-lingual support, chapter-wise quizzes, and offline capabilities for poor connectivity areas.',
            tech: ['JavaScript', 'HTML/CSS', 'SVG'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, rgba(31, 41, 55, 0.4) 0%, rgba(55, 65, 81, 0.2) 50%, rgba(107, 114, 128, 0.1) 100%)',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    <line x1="6" y1="9" x2="6" y2="9"></line>
                    <line x1="18" y1="9" x2="18" y2="9"></line>
                </svg>
            )
        }
    ];

    return (
        <section id="projects" className="py-24 bg-black relative" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Projects</h2>
                    <div className="w-16 h-1.5 bg-green-500 mx-auto rounded-full"></div>
                </div>

                {/* 3 columns on large screens, 2 on medium, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br from-slate-900 to-black rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(34,197,94,0.2)] transition-smooth-lg transform group border border-green-500/30 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >

                            {/* Icon Container with Hover Overlay */}
                            <div className="relative h-56 w-full overflow-hidden flex items-center justify-center" style={{ background: project.gradient }}>
                                {/* Icon Display */}
                                <div className="transition-smooth duration-500 group-hover:scale-110 will-change-transform">
                                    {project.icon}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-smooth duration-300 flex items-center justify-center gap-4 backdrop-blur-md will-change-opacity">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-green-500 text-black rounded-full hover:bg-green-400 hover:scale-110 transition-smooth shadow-lg focus-ring will-change-transform"
                                        aria-label="View Live Project"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-green-500 text-black rounded-full hover:bg-green-400 hover:scale-110 transition-all shadow-lg focus-ring"
                                        aria-label="View Source Code"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 mb-6 text-sm leading-relaxed min-h-[60px]">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-green-500/20">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-green-500/15 text-green-300 text-xs font-semibold rounded-md border border-green-500/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
