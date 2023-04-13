import './RoulettePage.scss';
import RouletteWheel from '../../components/roulette-wheel/RouletteWheel';
import { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';
import { useNavigate } from 'react-router-dom';

function RoulettePage() {
    const { points } = useContext(GameContext);
    const navigation = useNavigate();

    useEffect(() => {
        if (points >= 5) {
            navigation('/win');
        } else if (points <= -5) {
            navigation('/lose');
        }
    }, []);
    return (
        <div className="page-wrapper">
            <h1 className="headline">Setze dein Wissen aufs Spiel - mit Campus-Roulette!</h1>
            <h2 className="headline">Punktestand: {points}</h2>
            <RouletteWheel />
        </div>
    );
}

export default RoulettePage;
