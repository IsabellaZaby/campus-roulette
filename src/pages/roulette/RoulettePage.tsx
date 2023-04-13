import './RoulettePage.scss';
import RouletteWheel from '../../components/roulette-wheel/RouletteWheel';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function RoulettePage() {
    const { points } = useContext(GameContext);
    return (
        <div className="roulette-page-wrapper">
            <h1 className="headline">Setze dein Wissen aufs Spiel - mit Campus-Roulette!</h1>
            <h2 className="headline">Punktestand: {points}</h2>
            <RouletteWheel />
        </div>
    );
}

export default RoulettePage;
