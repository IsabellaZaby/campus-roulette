import './BackToRouletteButton.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface IBackRouletteButtonProps {
    countdownProps?: number;
}

function BackToRouletteButton(props: IBackRouletteButtonProps) {
    const { countdownProps = 3 } = props;
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(countdownProps);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const timeout = setTimeout(function () {
            navigate('/');
        }, 1000 * countdown);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeout);
        };
    }, []);
    return (
        <>
            <span className="back-to-roulette-text">Automatische Weiterleitung in {countdown}</span>
            <Link
                className="button"
                to="/"
            >
                Zum Start
            </Link>
        </>
    );
}

export default BackToRouletteButton;
