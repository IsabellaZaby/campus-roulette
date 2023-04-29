import './NoCheatingDisplay.scss';
import BackToRouletteButton from '../back-to-roulette-button/BackToRouletteButton';

function NoCheatingDisplay() {
    return (
        <div className="page-wrapper">
            <div className="no-cheating-display-container">
                <h1>Nicht schummeln!</h1>
                <img
                    src="/campus-roulette/pictures/grumpy_unicorn_2.png"
                    alt="Grumpy Unicorn"
                    className="no-cheating-display-image"
                />
                <BackToRouletteButton />
            </div>
        </div>
    );
}

export default NoCheatingDisplay;
