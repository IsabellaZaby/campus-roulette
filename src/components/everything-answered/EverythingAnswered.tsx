import './EverythingAnswered.scss';
import BackToRouletteButton from '../back-to-roulette-button/BackToRouletteButton';

function EverythingAnswered() {
    return (
        <div className="everything-answered-container">
            <h1 className="headline">Alle verfügbaren Fragen aus der Kategorie wurden bereits beantwortet!</h1>
            <img
                src="/pictures/happy_unicorn_1.png"
                alt="Happy Unicorn"
                className="everything-answered-image"
            />
            <BackToRouletteButton />
        </div>
    );
}

export default EverythingAnswered;
