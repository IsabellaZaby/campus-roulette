import './TimeoutPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';

function TimeoutPage() {
    return (
        <div className="page-wrapper">
            <h1 className="timeout-text">Zu spät...</h1>
            <img
                src="/pictures/sad_unicorn.png"
                className="timeout-img"
                alt="Bild eines traurigen Einhorns"
            />
            <BackToRouletteButton />
        </div>
    );
}

export default TimeoutPage;
