import './TimeoutPage.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TimeoutPage() {
    const navigate = useNavigate();
    //const [countdown, setCountdown] = useState(30);
    useEffect(() => {
        /* TODO visualize countdown
        let intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
         */

        const timeout = setTimeout(function () {
            navigate('/roulette');
        }, 3000);

        return () => {
            //clearInterval(intervalId);
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div className="timeout-page-wrapper">
            <div className="timeout-container">
                <h1 className="timeout-text">Zu spät...</h1>
                <img
                    src="/pictures/sad_unicorn.png"
                    className="timeout-img"
                    alt="Bild eines traurigen Einhorns"
                />
            </div>
        </div>
    );
}

export default TimeoutPage;
