import { useEffect, useState } from 'react';

interface TypewriterGradientProps {
  texts: string[];
  speed?: number;
  delayBetweenTexts?: number;
  className?: string;
  gradientClassName?: string;
  loop?: boolean;
  onCycleComplete?: () => void;
}

export const TypewriterGradient = ({
  texts,
  speed = 100,
  delayBetweenTexts = 2000,
  className = "block",
  gradientClassName = "bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
  loop = true,
  onCycleComplete
}: TypewriterGradientProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[currentTextIndex];

  //Lender text through useEffect
  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    setIsDeleting(false);
  }, [currentTextIndex]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isTyping && displayedText.length < currentText.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, speed);
    } else if (isTyping && displayedText.length === currentText.length) {
      // Finished typing, wait before deleting
      timer = setTimeout(() => {
        setIsTyping(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting backwards
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, speed / 2);
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting, move to next text
      const nextIndex = currentTextIndex + 1;
      
      if (nextIndex >= texts.length) {
        if (loop) {
          setCurrentTextIndex(0);
          setDisplayedText('');
          setIsTyping(true);
          setIsDeleting(false);
        } else {
          onCycleComplete?.();
        }
      } else {
        setCurrentTextIndex(nextIndex);
        setDisplayedText('');
        setIsTyping(true);
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, currentText, speed, delayBetweenTexts, isTyping, isDeleting, currentTextIndex, texts, loop, onCycleComplete]);

  return (
      <span className={`${className} ${gradientClassName} inline-block min-h-[1.5em]`}>
        {displayedText}
        {isTyping && <span className="animate-pulse text-cyan-800 text-shadow-cyan-50">|</span>}
      </span>
  );
};

// Example usage component
export const ServiceShowcase = () => {
  const services = [
    'Crypto Payments',
    'Global Transfers',
    'Remittances',
    'DeFi Integration',
    'Staking Services'
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="text-center max-w-2xl px-6">
        <p className="text-slate-400 text-lg mb-6">Best for:</p>
        <TypewriterGradient
          texts={services}
          speed={80}
          delayBetweenTexts={2000}
          className="block text-4xl lg:text-5xl font-bold min-h-20"
          loop={true}
        />
      </div>
    </div>
  );
};

export default TypewriterGradient;