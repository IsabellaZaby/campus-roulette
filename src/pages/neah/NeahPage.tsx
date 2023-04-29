import './NeahPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';

function NeahPage() {
    return (
        <div className="page-wrapper">
            <h1 className="neah-text">Falsche Antwort...</h1>
            <img
                src="/campus-roulette/pictures/grumpy_unicorn_1.png"
                className="neah-img"
                alt="Bild eines grantigen Einhorns"
            />
            <BackToRouletteButton />
        </div>
    );
}

export default NeahPage;
