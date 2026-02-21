import { useState, useEffect, useRef } from 'react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2, // Trigger when 20% of section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="about" className="py-24 bg-black w-full" ref={sectionRef}>
            <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Premium Dark Card Container */}
                <div className="bg-black rounded-[2rem] md:rounded-[3rem] border border-green-500 shadow-2xl p-8 md:p-14 lg:p-20 relative overflow-hidden group">

                    {/* Background blob/glow inside the card */}
                    <div className="absolute top-0 right-0 -mx-20 -my-20 w-[400px] h-[400px] bg-gradient-to-br from-green-500/15 via-green-400/8 to-transparent rounded-full blur-[120px] opacity-80 pointer-events-none animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 -mx-32 -my-32 w-[500px] h-[500px] bg-gradient-to-tr from-green-600/10 via-transparent to-green-500/5 rounded-full blur-[140px] opacity-60 pointer-events-none"></div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                        {/* Left Side - Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                            <h3 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center lg:justify-start gap-3">
                                <span className="w-8 h-px bg-green-400"></span>
                                About Me
                            </h3>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Are you looking for innovative AI solutions? Let me help you.
                            </h2>

                            <p className="text-lg text-green-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                I am an Artificial Intelligence and Data Science student specializing in building lightweight, scalable applications optimized for low-resource environments. I turn complex problems into intelligent, accessible software.
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-4 mb-10 text-green-100 text-left mx-auto lg:mx-0 max-w-md">
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Developing offline AI tools & gamified learning systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Strong foundation in AI, Python, and C</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>Performance-driven backend architecture and algorithms</span>
                                </li>
                            </ul>

                            {/* CTA Button */}
                            <div className="flex justify-center lg:justify-start">
                                <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-green-500 text-black font-bold text-lg hover:bg-green-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 transform focus-ring">
                                    Let's Work Together
                                </a>
                            </div>
                        </div>

                        {/* Right Side - Image Area */}
                        <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-8 lg:mt-0">
                            {/* Abstract Blob Shape Background */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[300px] h-[350px] md:w-[400px] md:h-[450px] bg-gradient-to-br from-green-600/40 via-green-700/20 to-black/10 blur-[100px] rounded-full opacity-75 animate-pulse will-change-filter"></div>
                            </div>

                            {/* Main Image Container */}
                            <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-[1.03] transition-transform duration-700 bg-black border border-green-500 flex items-center justify-center">
                                {/* If portrait.png exists, this img tag will show it, otherwise the alt displays. Using an SVG abstract placeholder visually fits nicely if no portrait exists. */}
                                <img src="/portrait.png" alt="Ashwath Nagarajan" className="w-full h-full object-cover relative z-10" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                                <div className="absolute inset-0 flex items-center justify-center text-green-500/20 hidden z-0">
                                    <svg className="w-32 h-32 opacity-20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div
                                className="absolute -bottom-8 -left-4 md:-left-10 bg-black border border-green-500 px-5 py-4 rounded-xl shadow-[0_10px_40px_rgba(34,197,94,0.15)] flex items-center gap-4 z-20 animate-float-smooth"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-black text-xl">
                                    1+
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm leading-tight">Years of<br />Experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Inject small keyframes right here since it's now in index.css */}
        </section>
    );
}
