import { useState, useEffect, useRef } from 'react';

export default function Experience() {
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

    const experiences = [
        {
            title: 'Gamified Offline Learning Platform (Smart India Hackathon)',
            company: 'Kongu Engineering College',
            period: 'Sept 2025 - Nov 2025',
            achievements: [
                'Developed a gamified offline learning platform to improve rural student engagement.',
                'Designed system to run efficiently on low-spec devices.',
                'Focused on accessibility, usability, and low-network optimization.',
                'Integrated teacher dashboard with student progress tracking.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-black relative overflow-hidden" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">

                <div className={`text-center mb-20 transform transition-smooth-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Experience</h2>
                    <div className="w-16 h-1.5 bg-green-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Timeline Center Line (hidden on very small screens, visible md+) */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/30 via-green-400/50 to-green-500/20 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

                    <div className="space-y-12 md:space-y-0">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col sm:flex-row items-center justify-between w-full group transform transition-smooth-lg ${isVisible
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-16 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >

                                    {/* Left Side (Empty for odd, Content for even on md+) */}
                                    <div className={`w-full md:w-[45%] order-2 md:order-1 ${isEven ? 'md:text-right md:pr-10' : 'md:opacity-0 md:pointer-events-none'}`}>
                                        {isEven && (
                                            <ExperienceCard exp={exp} isEven={isEven} />
                                        )}
                                    </div>

                                    {/* Center Timeline Node */}
                                    <div className="absolute left-[20px] md:left-1/2 top-6 md:top-1/2 transform -translate-x-[11px] md:-translate-x-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-green-500 z-10 shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_20px_rgba(34,197,94,0.3)] group-hover:bg-green-500 group-hover:shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_30px_rgba(34,197,94,0.6)] transition-smooth duration-300 hidden sm:block will-change-colors"></div>

                                    {/* Right Side (Content for odd, Empty for even on md+) */}
                                    <div className={`w-full md:w-[45%] order-2 md:order-3 sm:pl-[50px] md:pl-10 mt-4 sm:mt-0 ${!isEven ? '' : 'md:opacity-0 md:pointer-events-none'}`}>
                                        {!isEven && (
                                            <ExperienceCard exp={exp} isEven={isEven} />
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ExperienceCard({ exp, isEven }) {
    return (
        <div className={`bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-green-500/40 shadow-lg hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] transition-smooth-lg will-change-transform group relative ${isEven ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}>
            {/* Connector pointer (visible on md+) */}
            <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-slate-900 to-black border-t border-r border-green-500/40 ${isEven ? '-right-2 rotate-45 border-l-0 border-b-0' : '-left-2 -rotate-[135deg] border-l-0 border-b-0'
                }`}></div>

            {/* Background glow on hover */}
            <div className="absolute -inset-1 bg-gradient-to-br from-green-500/0 via-green-400/0 to-green-500/0 rounded-2xl group-hover:from-green-500/5 group-hover:via-green-400/3 group-hover:to-green-500/5 blur-lg transition-smooth opacity-0 group-hover:opacity-100 -z-10"></div>

            <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-600/20 to-green-700/10 text-green-300 text-sm font-bold rounded-full mb-4 border border-green-500/50 transition-smooth group-hover:border-green-400/80 group-hover:shadow-[0_4px_12px_rgba(34,197,94,0.3)]">
                {exp.period}
            </span>
            <h3 className="text-2xl font-bold text-white mb-1 transition-smooth group-hover:text-green-300">{exp.title}</h3>
            <h4 className="text-lg font-semibold text-green-400 mb-6 transition-smooth group-hover:text-green-300">{exp.company}</h4>

            <ul className={`space-y-3 text-slate-300 ${isEven ? 'md:text-right' : 'text-left'}`}>
                {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`flex transition-smooth-lg group-hover:text-white group-hover:font-medium ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className={`text-green-500 mr-2 transition-smooth group-hover:text-green-600 ${isEven ? 'md:hidden' : ''}`}>•</span>
                        <span className={isEven ? 'md:mr-2' : ''}>{achievement}</span>
                        <span className={`text-green-500 ml-2 transition-smooth group-hover:text-green-600 hidden ${isEven ? 'md:inline-block' : ''}`}>•</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
