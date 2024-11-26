import { useState, useEffect } from 'react';

// This component is a countdown timer that accepts a target time (date string) as a prop.
export default function CountdownTimer({ time }: any) {
    // State to store the remaining time in days, hours, minutes, and seconds.
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Effect to handle the countdown logic. It updates the timer every second.
    useEffect(() => {
        // If no target time is provided, do nothing.
        if (!time) return;

        // Function that runs every second to calculate the time difference.
        const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime(); // Get the current time in milliseconds.
            const targetTime = new Date(time).getTime(); // Convert the target time to milliseconds.
            const timeDifference = targetTime - currentTime; // Calculate the time difference.

            if (timeDifference > 0) {
                // Calculate days, hours, minutes, and seconds from the time difference.
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDifference / 1000) % 60);

                // Update the state with the new time values.
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                // If the countdown reaches zero or negative, clear the interval and reset the timer.
                clearInterval(countdownInterval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000); // Interval runs every second.

        // Cleanup function to clear the interval when the component unmounts or time changes.
        return () => clearInterval(countdownInterval);
    }, [time]);

    // Render the countdown timer with days, hours, minutes, and seconds in a styled format.
    return (
        <div className="text-center">
            {time && ( // Render the timer only if a valid target time is provided.
                <div className="d-flex align-items-center justify-center">
                    {/* Days Section */}
                    <div className="text-white countdown">
                        <div>
                            <span className="value mb-3">{timeLeft.days}</span>
                        </div>
                        <div className="text-green">Days</div>
                    </div>
                    {/* Hours Section */}
                    <div className="text-white countdown">
                        <div>
                            <span className="value mb-3">{timeLeft.hours}</span>
                        </div>
                        <div className="text-green">Hours</div>
                    </div>
                    {/* Minutes Section */}
                    <div className="text-white countdown">
                        <div>
                            <span className="value mb-3">{timeLeft.minutes}</span>
                        </div>
                        <div className="text-green">Minutes</div>
                    </div>
                    {/* Seconds Section */}
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
