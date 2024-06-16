import React, { useState } from 'react';
import { HDMProvider } from './src/contexts/HDMContext';
import Routes from './src/routes/index.routes';
import { Splash } from './src/screens/splash';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <HDMProvider>
      {showSplash ? (
        <Splash onComplete={handleSplashComplete} />
      ) : (
        <Routes />
      )}
    </HDMProvider>
  );
}
