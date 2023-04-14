import './JokerPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';
import { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';
import NoCheatingDisplay from '../../components/no-cheating-display/NoCheatingDisplay';

function JokerPage() {
    const { category, setPoints, points } = useContext(GameContext);

    useEffect(() => {
        if (category === 'Joker') {
            setPoints(points + 3);
        }
    }, []);

    if (category !== 'Joker') {
        return <NoCheatingDisplay />;
    }

    return (
        <div className="page-wrapper">
            <div className="joker-container">
                <h1>You encountered the magical enchanted grumpycorn!</h1>
                <img
                    src="/pictures/grumpycorn.jpeg"
                    className="joker-image"
                    alt="Grumpycorn"
                />
                <h1>Du bekommst 3 Bonuspunkte!</h1>
                <BackToRouletteButton countdownProps={5} />
            </div>
        </div>
    );
}

export default JokerPage;
