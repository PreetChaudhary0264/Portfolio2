import React from 'react';
import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/PreetChaudhary0264" },
        { icon: Twitter, href: "https://x.com/PreetSi11143247" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/preet-chaudhary-5523a0306/" },
        { icon: Mail, href: "mailto:spray264preet@gmail.com" }
    ];

    return (
        <footer className="bg-neo-dark text-white py-12 border-t-3 border-black">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-display font-bold mb-2">Preet Chaudhary Portfolio</h2>
                    <p className="text-gray-400 mb-2">© {new Date().getFullYear()} All rights reserved.</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                        <Phone size={16} />
                        <span>+91 8433070121</span>
                    </div>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
