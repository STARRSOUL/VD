import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingHeart = ({ delay = 0 }) => {
  const randomPosition = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  };

  return (
    <motion.div
      className="floating-heart"
      style={randomPosition}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
      }}
    >
      💕
    </motion.div>
  );
};

const Sparkle = ({ delay = 0 }) => {
  const randomPosition = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  };

  return (
    <motion.div
      className="sparkle-item"
      style={randomPosition}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
      }}
    >
      ✨
    </motion.div>
  );
};

function App() {
  const [stage, setStage] = useState('initial'); // initial, question, response
  const [answer, setAnswer] = useState('');
  const [showHearts, setShowHearts] = useState(false);
  const [maybeButtonTapped, setMaybeButtonTapped] = useState(false);
  const [showCryingRat, setShowCryingRat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('question');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (response) => {
    setAnswer(response);
    setStage('response');
    if (response === 'yes') {
      setShowHearts(true);
    }
  };

  const resetToQuestion = () => {
    setStage('question');
    setAnswer('');
    setShowHearts(false);
    setShowCryingRat(false);
  };

  return (
    <div className="main-container">
      {/* Floating Hearts Background */}
      {[...Array(15)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 0.5} />
      ))}

      {/* Sparkles */}
      <div className="sparkle-overlay">
        {[...Array(10)].map((_, i) => (
          <Sparkle key={i} delay={i * 0.8} />
        ))}
      </div>

      <div className="card">
        {/* Crying Rat Meme Popup - Mobile Optimized */}
        <AnimatePresence>
          {showCryingRat && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 50 }}
              transition={{ duration: 0.5, type: "spring" }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
                background: 'rgba(0, 0, 0, 0.9)',
                borderRadius: '20px',
                padding: '20px',
                textAlign: 'center',
                maxWidth: '90vw',
                maxHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Crying Rat Image/GIF */}
              <motion.img
                src="/crying-rat.gif" // You'll add this file
                alt="Crying rat meme"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  borderRadius: '15px',
                  marginBottom: '15px'
                }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              
              {/* Dramatic Text */}
              <motion.h2
                className="romantic-font"
                style={{
                  color: '#ff4757',
                  fontSize: '32px',
                  marginBottom: '10px',
                  textAlign: 'center'
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                You're Breaking My Heart! 😭💔
              </motion.h2>
              
              <motion.p
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  textAlign: 'center',
                  margin: '0',
                  maxWidth: '250px'
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                This is me right now... 🥺
              </motion.p>
              
              {/* Countdown dots */}
              <motion.div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '15px'
                }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#ff4757'
                    }}
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {stage === 'initial' && (
            <motion.div
              key="initial"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '80px', marginBottom: '20px' }}
              >
                💕
              </motion.div>
              
              <motion.h1
                className="romantic-font pulse-glow"
                style={{ 
                  fontSize: '48px', 
                  color: '#e91e63', 
                  marginBottom: '20px',
                  fontWeight: 'bold'
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hey Aastha...
              </motion.h1>
              
              <motion.p
                style={{ 
                  fontSize: '20px', 
                  color: '#666',
                  fontWeight: '300'
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                I have something special to ask you...
              </motion.p>
            </motion.div>
          )}

          {stage === 'question' && (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '60px', marginBottom: '30px' }}
              >
                💖
              </motion.div>

              <motion.h2
                className="romantic-font"
                style={{ 
                  fontSize: '42px', 
                  color: '#e91e63', 
                  marginBottom: '25px',
                  fontWeight: 'bold'
                }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Will You Be My Valentine?
              </motion.h2>

              <motion.p
                style={{ 
                  fontSize: '18px', 
                  color: '#555',
                  marginBottom: '40px',
                  lineHeight: '1.6'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                With you Every day feels like a Valentine's Day, but I'd love to make this one official and make up for last year 😘! 
                Your presence has made my life amazing. You are the definition of love for me. I would Love to make u my valentine, and have you by my side this year and forever.🌹
              </motion.p>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <motion.button
                  className="valentine-button yes-button"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer('yes')}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  YES! 💕 Of course!
                </motion.button>

                <motion.button
                  className="valentine-button maybe-button"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ 
                    scale: 0.9,
                    backgroundColor: "#ff4757",
                    boxShadow: "0 5px 15px rgba(255, 71, 87, 0.5)"
                  }}
                  onClick={() => handleAnswer('maybe')}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    // Automatic sarcastic animations that work on mobile
                    rotate: [0, 1, -1, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    delay: 1.2,
                    rotate: { duration: 2, repeat: Infinity, repeatDelay: 3 },
                    scale: { duration: 2, repeat: Infinity, repeatDelay: 3 }
                  }}
                  onTouchStart={() => setMaybeButtonTapped(true)}
                  onTouchEnd={() => {
                    // Keep message for 1.5 seconds after tap
                    setTimeout(() => setMaybeButtonTapped(false), 1500);
                  }}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: maybeButtonTapped 
                      ? 'linear-gradient(45deg, #ff4757, #ff3742)' 
                      : 'linear-gradient(45deg, #ff69b4, #ffb6c1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <motion.span
                    // Text animation that works on all devices
                    animate={{
                      color: ['#ffffff', '#ffeeee', '#ffffff'],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                  >
                    {maybeButtonTapped ? "Really? 🙄 Just say YES!" : "Let me think... 🤔"}
                  </motion.span>
                  
                  {/* Automatic sparkle that appears periodically */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '15px',
                      fontSize: '14px'
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    ✨
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          )}

          {stage === 'response' && (
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="celebration"
            >
              {answer === 'yes' ? (
                <div>
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.3, 1.1]
                    }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ fontSize: '80px', marginBottom: '25px' }}
                  >
                    🎉
                  </motion.div>

                  <motion.h3
                    className="romantic-font pulse-glow"
                    style={{ 
                      fontSize: '48px', 
                      color: '#e91e63', 
                      marginBottom: '20px',
                      fontWeight: 'bold'
                    }}
                  >
                    YES! 🥰
                  </motion.h3>

                  <motion.p
                    style={{ 
                      fontSize: '22px', 
                      color: '#333',
                      marginBottom: '30px',
                      fontWeight: '500'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    The Most Beautiful girl in the world is my Valentine! 😍❤️
                  </motion.p>

                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ fontSize: '70px', margin: '20px 0' }}
                  >
                    
                  </motion.div>

                  <motion.p
                    style={{ 
                      fontSize: '18px', 
                      color: '#e91e63',
                      fontWeight: '600'
                    }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    I love you so much! Can't wait to celebrate with you! 💕✨
                  </motion.p>

                  {showHearts && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none'
                      }}
                    >
                      {[...Array(20)].map((_, i) => (
                        <motion.span
                          key={i}
                          style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: '20px',
                          }}
                          animate={{
                            y: [0, -100],
                            opacity: [1, 0],
                            scale: [1, 1.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        >
                          ❤️
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <div>
                  {/* Play crying sound effect when maybe response shows */}
                  {(() => {
                    const audio = new Audio('/crying-sound.mp3');
                    audio.play().catch(e => console.log('Audio play failed:', e));
                    return null;
                  })()}
                  
                  {/* Crying Rat Image/GIF */}
                  <motion.img
                    src="/crying-rat.jpeg" // You'll add this file
                    alt="Crying rat meme"
                    style={{
                      width: '100%',
                      maxWidth: '280px',
                      height: 'auto',
                      borderRadius: '15px',
                      marginBottom: '20px',
                      boxShadow: '0 10px 25px rgba(255, 71, 87, 0.3)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1,
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />

                  <motion.h3
                    className="romantic-font"
                    style={{ 
                      fontSize: '36px', 
                      color: '#ff4757', 
                      marginBottom: '15px',
                      fontWeight: 'bold'
                    }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    You're Breaking My Heart! 😭
                  </motion.h3>

                  <p
                    style={{ 
                      fontSize: '18px', 
                      color: '#555',
                      marginBottom: '30px',
                      lineHeight: '1.6'
                    }}
                  >
                   What is there to think? 🥲🥲
                  </p>

                  <motion.button
                    className="valentine-button yes-button"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetToQuestion}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 5px 15px rgba(220, 20, 60, 0.4)",
                        "0 8px 25px rgba(220, 20, 60, 0.6)",
                        "0 5px 15px rgba(220, 20, 60, 0.4)"
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Fine, ask me again! 💖😅
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
