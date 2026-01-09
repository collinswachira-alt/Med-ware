import { Heart, Calendar, Users, Shield, Stethoscope, Activity, Microscope, Ambulance, Syringe, Pill, Thermometer, Clipboard } from 'lucide-react';

// Floating Medical Background Component
const FloatingMedicalBackground = () => {
  interface FloatingItem {
    Icon: React.ElementType;
    top?: string;
    left?: string;
    right?: string;
    delay: number;
    duration: number;
  }

  const floatingItems: FloatingItem[] = [
    { Icon: Ambulance, top: '10%', left: '5%', delay: 0, duration: 15 },
    { Icon: Stethoscope, top: '20%', right: '10%', delay: 2, duration: 18 },
    { Icon: Heart, top: '50%', left: '8%', delay: 1, duration: 20 },
    { Icon: Activity, top: '70%', right: '15%', delay: 3, duration: 16 },
    { Icon: Microscope, top: '35%', left: '15%', delay: 4, duration: 22 },
    { Icon: Shield, top: '80%', left: '20%', delay: 1.5, duration: 19 },
    { Icon: Syringe, top: '15%', right: '25%', delay: 2.5, duration: 17 },
    { Icon: Pill, top: '60%', right: '8%', delay: 3.5, duration: 21 },
    { Icon: Thermometer, top: '45%', right: '30%', delay: 0.5, duration: 18 },
    { Icon: Clipboard, top: '25%', left: '30%', delay: 4.5, duration: 20 },
    { Icon: Calendar, top: '85%', right: '20%', delay: 1, duration: 16 },
    { Icon: Users, top: '5%', left: '25%', delay: 3, duration: 19 }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      {floatingItems.map((item, idx) => {
        const positionStyle: React.CSSProperties = {};
        if (item.top) positionStyle.top = item.top;
        if (item.left) positionStyle.left = item.left;
        if (item.right) positionStyle.right = item.right;


        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              ...positionStyle,
              opacity: 0.1,
              animation: `float ${item.duration}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`
            }}
          >
            <item.Icon style={{
              width: '80px',
              height: '80px',
              color: '#0077BE',
              filter: 'blur(1px)'
            }} />
          </div>
        );
      })}

      {/* Medical Cross Icons scattered */}
      {[...Array(8)].map((_, idx) => (
        <div
          key={`cross-${idx}`}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '60px',
            height: '60px',
            opacity: 0.1,
          }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              height: '20%',
              backgroundColor: '#00A8E8',
              borderRadius: '2px'
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20%',
              height: '60%',
              backgroundColor: '#00A8E8',
              borderRadius: '2px'
            }} />
          </div>
        </div>
      ))}

    </div>
  );
};
export default FloatingMedicalBackground;