import './NoCheatingDisplay.scss';
import BackToRouletteButton from '../back-to-roulette-button/BackToRouletteButton';

function NoCheatingDisplay() {
    return (
        <div className="no-cheating-display-container">
            <h1>Nicht schummeln!</h1>
            <img
                src="/pictures/grumpy_unicorn_2.png"
                alt="Grumpy Unicorn"
                className="no-cheating-display-image"
            />
            <BackToRouletteButton />
        </div>
    );
}

export default NoCheatingDisplay;
