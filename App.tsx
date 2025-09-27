import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import PortfolioPage from './components/PortfolioPage';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <div className="animated-bg">
                <div className="bg-orb-1"></div>
                <div className="bg-orb-2"></div>
                <div className="bg-orb-3"></div>
                <div className="bg-orb-4"></div>
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