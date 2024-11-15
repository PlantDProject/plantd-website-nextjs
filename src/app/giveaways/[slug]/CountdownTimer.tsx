import { useState, useEffect } from 'react';

export default function CountdownTimer({ time }: any) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (!time) return;

        const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const targetTime = new Date(time).getTime();
            const timeDifference = targetTime - currentTime;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDifference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(countdownInterval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [time]);

    return (
        <div className="text-center">
            {time && (
                <div className="d-flex align-items-center justify-center">
                    <div className="text-white countdown">
                        <div>
                            <span className="value mb-3">{timeLeft.days}</span>
                        </div>
                        <div className="text-green">Days</div>
                    </div>
                    <div className="text-white countdown">
                        <div>
                            <span className="value mb-3">{timeLeft.hours}</span>
                        </div>
                        <div className="text-green">Hours</div>
                    </div>
                    <div className="text-white countdown">
                        <div>
                            <span className="value mb-3">{timeLeft.minutes}</span>
                        </div>
                        <div className="text-green">Minutes</div>
                    </div>
                    <div className="text-white countdown">
                        <div>
                            <span className="value mb-3">{timeLeft.seconds}</span>
                        </div>
                        <div className="text-green">Seconds</div>
                    </div>
                </div>
            )}
        </div>
    );
}
