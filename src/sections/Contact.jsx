import { useState, useEffect, useRef } from 'react';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate network request
        setTimeout(() => {
            setFormStatus('success');

            // Reset after showing success
            setTimeout(() => {
                setFormStatus('idle');
                e.target.reset(); // Clear form
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-black text-white relative flex flex-col items-center" ref={sectionRef}>
            <div className="max-w-3xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Get In Touch</h2>
                    <div className="w-16 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-green-300 text-lg max-w-lg mx-auto mb-4">
                        Have a project in mind or just want to chat? Send me a message and I'll get back to you soon.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 text-green-300 font-medium">
                        <a href="mailto:ashwathnagarajan14@gmail.com" className="hover:text-green-200 transition-colors">ashwathnagarajan14@gmail.com</a>
                        <span className="hidden md:inline text-green-600">|</span>
                        <a href="tel:+918778103077" className="hover:text-green-200 transition-colors">+91 8778103077</a>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className={`w-full bg-gradient-to-br from-slate-900 to-black p-8 md:p-10 rounded-3xl border border-green-500/40 backdrop-blur-lg transform transition-smooth-lg delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-green-300 mb-2 ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="John Doe"
                                className="w-full px-5 py-4 bg-black/50 border border-green-500/40 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-smooth will-change-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-green-300 mb-2 ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="john@example.com"
                                className="w-full px-5 py-4 bg-black/50 border border-green-500/40 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-smooth will-change-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-green-300 mb-2 ml-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                required
                                placeholder="How can I help you?"
                                className="w-full px-5 py-4 bg-black/50 border border-green-500/40 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-smooth will-change-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus !== 'idle'}
                            className="w-full py-4 px-6 bg-green-500 text-black font-extrabold text-lg rounded-full hover:bg-green-400 transition-smooth duration-300 flex items-center justify-center gap-2 group disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden relative will-change-colors"
                        >
                            {formStatus === 'idle' && (
                                <>
                                    Send Message
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </>
                            )}

                            {formStatus === 'submitting' && (
                                <div className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </div>
                            )}

                            {formStatus === 'success' && (
                                <div className="flex items-center gap-2 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Message Sent!
                                </div>
                            )}
                        </button>
                    </div>
                </form>

                {/* Social Links Bottom */}
                <div className={`mt-20 flex flex-col items-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex justify-center gap-6 mb-8">
                        <a href="https://github.com/AshwathNagarajan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-black hover:from-green-500 hover:to-green-400 hover:scale-110 transition-all duration-300 shadow-lg focus-ring" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href="https://linkedin.com/in/ashwath-nagarajan-ad31" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-black hover:from-green-500 hover:to-green-400 hover:scale-110 transition-all duration-300 shadow-lg focus-ring" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="https://leetcode.com/u/Ashwath_Nagarajan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-black hover:from-green-500 hover:to-green-400 hover:scale-110 transition-all duration-300 shadow-lg focus-ring" aria-label="LeetCode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.527 2.49 2.49 0 0 1 .536-1.029l3.85-4.125 5.404-5.787a1.38 1.38 0 0 0-.003-1.954 1.38 1.38 0 0 0-.962-.441zM10.597 10.59c-.536.002-.97.436-.97.972v8.618a.972.972 0 0 0 .97.973h11.43a.97.97 0 0 0 .972-.973.972.972 0 0 0-.972-.972H11.566v-7.646a.97.97 0 0 0-.97-.972z" /></svg>
                        </a>
                    </div>
                    <p className="text-green-400/60 text-sm font-medium">
                        Designed & Built by Ashwath Nagarajan © {new Date().getFullYear()}
                    </p>
                </div>

            </div>
        </section>
    )
}
