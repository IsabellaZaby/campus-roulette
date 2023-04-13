import './RoulettePage.scss';
import RouletteWheel from '../../components/roulette-wheel/RouletteWheel';

function RoulettePage() {
    return (
        <div className="roulette-page-wrapper">
            <h1 className="headline">Setze dein Wissen aufs Spiel - mit Campus-Roulette!</h1>
            <RouletteWheel />
        </div>
    );
}

export default RoulettePage;
