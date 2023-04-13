import './BackToRouletteButton.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface IBackRouletteButtonProps {
    countdownProps?: number;
    isAutomaticRedirect?: boolean;
    isHardReloadPage?: boolean;
}

function BackToRouletteButton(props: IBackRouletteButtonProps) {
    const { countdownProps = 3, isAutomaticRedirect = true, isHardReloadPage = false } = props;
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(countdownProps);

    useEffect(() => {
        if (isAutomaticRedirect) {
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
        }
        if (isHardReloadPage) {
            navigate('/');
            location.reload();
        }
    }, []);
    return (
        <>
            {isAutomaticRedirect ? <span className="back-to-roulette-text">Automatische Weiterleitung in {countdown}</span> : <br />}
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
