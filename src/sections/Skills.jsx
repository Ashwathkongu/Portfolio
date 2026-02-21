import { useState, useEffect, useRef } from 'react';

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSkill, setActiveSkill] = useState('Python');
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

    const skills = [
        {
            name: 'Programming Languages',
            items: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        },
        {
            name: 'Web Development',
            items: ['HTML', 'CSS', 'JavaScript'],
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        },
        {
            name: 'Databases',
            items: ['MongoDB', 'SQL'],
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        },
        {
            name: 'Core Areas',
            items: ['Natural Language Processing', 'Algorithm Design', 'Data Processing', 'Lightweight System Design', 'Offline AI Systems'],
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        }
    ];

    const topSkills = ['Python', 'C++', 'Java', 'JavaScript', 'SQL', 'NLP', 'MongoDB', 'AI'];

    return (
        <section id="skills" className="py-24 bg-[#0a0a0a] text-white overflow-hidden" ref={sectionRef}>
            <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Section Header */}
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">My Skills</h2>
                    <div className="w-16 h-1.5 bg-green-500 mx-auto md:mx-0 rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                    {/* Left Side: Content & List */}
                    <div className="w-full lg:w-5/12 relative z-10 flex flex-col justify-center text-center lg:text-left">
                        {/* Subtle background glow behind text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-green-500/20 via-green-600/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 will-change-filter"></div>

                        <p className="text-lg text-green-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            Here is a comprehensive overview of my technical stack and core competencies. I constantly expand my toolkit to build robust, scalable, and intelligent applications.
                        </p>

                        <div className="space-y-8 mb-10 mx-auto lg:mx-0 max-w-xl w-full">
                            {skills.map((skill, idx) => (
                                <div key={skill.name} className={`transform transition-all duration-700`} style={{ transitionDelay: `${idx * 150}ms` }}>
                            <h3 className="text-green-400 font-bold mb-3 flex items-center justify-center lg:justify-start gap-2">
                                <span className="p-1.5 bg-green-500/10 rounded-md text-green-500">{skill.icon}</span>
                                {skill.name}
                            </h3>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                {skill.items.map(item => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-gradient-to-r from-black to-slate-900 text-green-300 border border-green-500/40 hover:border-green-400 hover:from-black hover:to-green-950/30 rounded-lg text-sm font-semibold transition-smooth cursor-default hover:text-green-200 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                                        onMouseEnter={() => topSkills.includes(item) ? setActiveSkill(item) : (item.length < 10 ? setActiveSkill(item) : null)}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                            ))}
                    </div>

                    <div className="flex justify-center lg:justify-start">
                        <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-500 text-[#0a0a0a] font-extrabold text-lg hover:bg-green-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 transform focus-ring">
                            View My Work
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Right Side: Orbit Visualization */}
                <div className="w-full lg:w-7/12 relative flex justify-center items-center py-10 lg:py-0 min-h-[400px]">

                    {/* Core Orbit Container */}
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">

                        {/* Radial Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-green-600/10 to-transparent blur-[100px] rounded-full pointer-events-none will-change-filter"></div>

                        {/* Center Glowing Focus */}
                        <div className="absolute w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-black to-green-950/20 border-2 border-green-500 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.25),inset_0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_60px_rgba(34,197,94,0.4),inset_0_0_30px_rgba(34,197,94,0.15)] flex items-center justify-center z-20 group transition-smooth-lg">
                            <span className="text-green-400 font-extrabold text-xl md:text-2xl text-center px-2 transition-all duration-300 transform group-hover:scale-110 drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]">
                                {activeSkill}
                            </span>
                        </div>

                        {/* Outer Rings */}
                        <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] border pointer-events-none border-green-500/40 rounded-full animate-orbit-slow"></div>
                        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border pointer-events-none border-green-500/20 rounded-full animate-orbit"></div>

                        {/* Orbit Items */}
                        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] animate-orbit z-10">
                            {topSkills.map((skill, i) => {
                                const angle = (i * Math.PI * 2) / topSkills.length;
                                const left = 50 + 50 * Math.cos(angle);
                                const top = 50 + 50 * Math.sin(angle);
                                return (
                                    <div
                                        key={skill}
                                        className="absolute -translate-x-1/2 -translate-y-1/2"
                                        style={{ left: `${left}%`, top: `${top}%` }}
                                        >
                            <div
                                className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-green-950/30 backdrop-blur-md border border-green-500/40 rounded-full flex items-center justify-center text-[10px] md:text-sm font-bold text-green-300 hover:text-green-100 hover:border-green-400 hover:scale-125 transition-smooth duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] cursor-pointer animate-orbit-counter group"
                                onMouseEnter={() => setActiveSkill(skill)}
                            >
                                {skill}
                            </div>
                        </div>
                        )
                                })}
                    </div>

                </div>
            </div>

        </div>
            </div>

        {/* Injected Animations */}
        <style dangerouslySetInnerHTML={{
            __html: `
                /* Animations now defined in index.css */
            `}} />
        </section>
    )
}
