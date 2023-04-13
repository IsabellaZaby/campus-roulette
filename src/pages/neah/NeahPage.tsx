import './NeahPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';

function NeahPage() {
    return (
        <div className="neah-page-wrapper">
            <div className="neah-container">
                <h1 className="neah-text">Falsche Antwort...</h1>
                <img
                    src="/pictures/grumpy_unicorn_1.png"
                    className="neah-img"
                    alt="Bild eines grantigen Einhorns"
                />
                <BackToRouletteButton />
            </div>
        </div>
    );
}

export default NeahPage;
