import './YeahPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';

function YeahPage() {
    return (
        <div className="yeah-page-wrapper">
            <div className="yeah-container">
                <h1 className="yeah-text">Das war richtig! Yay!</h1>
                <img
                    src="/pictures/happy_unicorn_2.png"
                    className="yeah-img"
                    alt="Bild eines glücklichen Einhorns"
                />
                <BackToRouletteButton />
            </div>
        </div>
    );
}

export default YeahPage;
