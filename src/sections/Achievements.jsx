import { useState, useEffect, useRef } from 'react';

export default function Achievements() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const achievements = [
        {
            category: 'Education',
            title: 'B.Tech AI & Data Science',
            date: 'Aug 2024 - July 2028',
            description: (
                <>
                    <p className="font-semibold text-white mb-1">Kongu Engineering College, Perundurai, Erode</p>
                    <p>Current CGPA: <span className="font-bold text-green-500">8.76</span></p>
                </>
            ),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
            )
        },
        {
            category: 'Education',
            title: 'Higher Secondary (CBSE)',
            date: 'Completed',
            description: (
                <>
                    <p className="font-semibold text-white mb-1">The Earnest Academy, Tirupur</p>
                    <p>HSC: <span className="font-bold">85.6%</span> | SSLC: <span className="font-bold">87.2%</span></p>
                </>
            ),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
            )
        },
        {
            category: 'Leadership',
            title: 'Positions',
            date: 'Active',
            description: (
                <ul className="list-disc list-inside space-y-1">
                    <li> Student Project Coordinator</li>
                    <li>Executive Member – Cloud User Group, KEC</li>
                    <li>Member – NSS, KEC</li>
                </ul>
            ),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            category: 'Certification',
            title: 'Technical Certifications',
            date: 'Achieved',
            description: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Digital Applications Fundamentals (STEM) – NASSCOM</li>
                    <li>Data Processing and Visualization – NASSCOM</li>
                    <li>Advanced C – College Certified</li>
                    <li>IBM Generative AI – IBM</li>
                </ul>
            ),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
            )
        }
    ];

    return (
        <section id="achievements" className="py-24 bg-black relative" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                <div className={`text-center mb-16 transform transition-smooth-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Achievements</h2>
                    <div className="w-16 h-1.5 bg-green-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 bg-gradient-to-br from-slate-900 to-black border border-green-500/40 rounded-2xl shadow-lg hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] hover:border-green-400/60 transition-smooth-lg transform will-change-transform group ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Icon Box */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-green-500/40 flex items-center justify-center group-hover:from-green-900/30 group-hover:to-black group-hover:border-green-400/60 transition-smooth-lg will-change-colors shadow-lg group-hover:shadow-[0_8px_20px_rgba(34,197,94,0.3)]">
                                {achievement.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-grow w-full">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                                        <span className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-green-700/10 text-green-300 text-[11px] font-bold uppercase tracking-wider rounded-md hidden sm:block border border-green-500/40 group-hover:border-green-400/60 group-hover:from-green-600/30 transition-smooth-lg">
                                            {achievement.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white leading-tight transition-smooth group-hover:text-green-300">{achievement.title}</h3>
                                    </div>
                                    <span className="text-sm font-semibold text-slate-400 whitespace-nowrap transition-smooth group-hover:text-green-300">
                                        {achievement.date}
                                    </span>
                                </div>
                                <div className="text-slate-300 leading-relaxed md:pr-12 text-sm sm:text-base transition-smooth group-hover:text-white">
                                    {achievement.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
