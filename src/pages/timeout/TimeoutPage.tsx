import './TimeoutPage.scss';
import BackToRouletteButton from "../../components/back-to-roulette-button/BackToRouletteButton";

function TimeoutPage() {
    return (
        <div className="timeout-page-wrapper">
            <div className="timeout-container">
                <h1 className="timeout-text">Zu spät...</h1>
                <img
                    src="/pictures/sad_unicorn.png"
                    className="timeout-img"
                    alt="Bild eines traurigen Einhorns"
                />
                <BackToRouletteButton />
            </div>
        </div>
    );
}

export default TimeoutPage;
