import { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2024-11-23T00:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 text-center text-white">
      <div>
        <div className="text-3xl md:text-4xl font-medium min-w-[40px] md:min-w-[50px]">{timeLeft.days}</div>
        <div className="uppercase text-[10px] md:text-xs">días</div>
      </div>
      <div className="text-4xl md:text-5xl font-thin">|</div>
      <div>
        <div className="text-3xl md:text-4xl font-medium min-w-[40px] md:min-w-[50px]">{timeLeft.hours}</div>
        <div className="uppercase text-[10px] md:text-xs">horas</div>
      </div>
      <div className="text-4xl md:text-5xl font-thin">|</div>
      <div>
        <div className="text-3xl md:text-4xl font-medium min-w-[40px] md:min-w-[50px]">{timeLeft.minutes}</div>
        <div className="uppercase text-[10px] md:text-xs">mins</div>
      </div>
      <div className="text-4xl md:text-5xl font-thin">|</div>
      <div>
        <div className="text-3xl md:text-4xl font-medium min-w-[40px] md:min-w-[50px]">{timeLeft.seconds}</div>
        <div className="uppercase text-[10px] md:text-xs">segs</div>
      </div>
    </div>
  );
};

export default Countdown;
