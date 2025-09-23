
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import PortfolioPage from './components/PortfolioPage';
import useCustomCursor from './hooks/useCustomCursor';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    useCustomCursor();

    useEffect(() => {
        // Hides the default cursor for all elements
        document.body.style.cursor = 'none';
        return () => {
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            <div className="animated-bg">
                <div className="bg-orb-1"></div>
                <div className="bg-orb-2"></div>
            </div>
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div key="loader">
                        <LoadingScreen onFinished={() => setLoading(false)} />
                    </motion.div>
                ) : (
                    <motion.div key="portfolio">
                        <PortfolioPage />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default App;
