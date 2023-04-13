import './BackToRouletteButton.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BackToRouletteButton() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);
    useEffect(() => {
        let intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const timeout = setTimeout(function () {
            navigate('/roulette');
        }, 3000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeout);
        };
    }, []);
    return (
        <>
            <span className="back-to-roulette-text">Automatische Weiterleitung in {countdown}</span>
            <Link
                className="button start-page-button-text"
                to="/roulette"
            >
                Zum Start
            </Link>
        </>
    );
}

export default BackToRouletteButton;
