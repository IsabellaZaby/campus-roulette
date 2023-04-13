import './ErrorPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';

function ErrorPage() {
    return (
        <div className="page-wrapper">
            <div className="error-container">
                <h1 className="error-text">Error 404</h1>
                <img
                    src="/pictures/sad_unicorn.png"
                    className="error-img"
                    alt="Bild eines traurigen Einhorns"
                />
                <BackToRouletteButton />
            </div>
        </div>
    );
}

export default ErrorPage;
