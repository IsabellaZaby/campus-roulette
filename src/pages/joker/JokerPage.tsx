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
            <h1>You encountered</h1>
            <img
                src="/pictures/grumpycorn.jpeg"
                className="joker-image"
                alt="Grumpy Cat Unicorn"
            />
            <h1>Du bekommst 3 Bonuspunkte!</h1>
            <BackToRouletteButton countdownProps={5} />
        </div>
    );
}

export default JokerPage;
