import React from 'react';
// FIX: Added TargetAndTransition type import from framer-motion to help TypeScript correctly infer types.
import { motion, TargetAndTransition } from 'framer-motion';

// FIX: Explicitly typed iconHover with TargetAndTransition to resolve type inference issue.
const iconHover: TargetAndTransition = { scale: 1.2, transition: { type: 'spring', stiffness: 300 } };
const iconProps = { className: "w-8 h-8 text-white/70 group-hover:text-white transition-colors duration-300" };

const TechIconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div 
        className="p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
        whileHover={iconHover}>
        {children}
    </motion.div>
);

export const JsIcon = () => <TechIconWrapper><svg {...iconProps} fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.75 1.25a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V1.25zm-2.25.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zm.75 16a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5zM17.25 1.25a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V1.25zm-2.25.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"/></svg></TechIconWrapper>;
export const TsIcon = () => <TechIconWrapper><svg {...iconProps} fill="currentColor" viewBox="0 0 24 24"><path d="M11.75 1.25a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V1.25zm-2.25.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zm.75 16a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5zM17.25 1.25a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V1.25zm-2.25.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"/></svg></TechIconWrapper>;
export const ReactIcon = () => <TechIconWrapper><svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76l-2.12 2.12m-4.24 4.24l-2.12 2.12m0-8.48l2.12 2.12m4.24 4.24l2.12 2.12M21 12h-2m-9 0H2m7-9v2m0 14v2"></path></svg></TechIconWrapper>;
export const NextIcon = () => <TechIconWrapper><svg {...iconProps} fill="currentColor" viewBox="0 0 18 18"><path d="M12.12,12.12,9,9,12.12,5.88,15.24,9ZM9,18A9,9,0,1,1,18,9,9,9,0,0,1,9,18ZM9,2.7A6.3,6.3,0,1,0,15.3,9,6.3,6.3,0,0,0,9,2.7Z"/></svg></TechIconWrapper>;
export const TailwindIcon = () => <TechIconWrapper><svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></TechIconWrapper>;

const linkIconProps = { className: "w-6 h-6" };

export const TikTokIcon = () => <svg {...linkIconProps} fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.98-1.5-1.9-2.32-4.35-2.18-6.83.13-2.12.78-4.23 1.88-5.94 1.14-1.77 2.7-3.12 4.54-3.83.61-.25 1.25-.45 1.9-.6.18-3.02.02-6.04.01-9.07z"/></svg>;
export const YouTubeIcon = () => <svg {...linkIconProps} fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/></svg>;
export const FiverrIcon = () => <svg {...linkIconProps} fill="currentColor" viewBox="0 0 24 24"><path d="M18.33 6.06h-5.46v11.88h-2.13V6.06H5.27V4h13.06z"/></svg>;
export const GlobeIcon = () => <svg {...linkIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9" /></svg>;

const socialIconProps = { className: "w-8 h-8 text-white" };
export const WhatsappIcon = () => <svg {...socialIconProps} fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.89 6.191l.244.373-1.082 3.939 4.026-1.058.355.214z"/></svg>;
export const GmailIcon = () => <svg {...socialIconProps} fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>;
export const GithubIcon = () => <svg {...socialIconProps} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>;