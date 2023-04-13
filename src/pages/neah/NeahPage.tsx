import './NeahPage.scss';
import { Link } from 'react-router-dom';

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
                <Link
                    className="button start-page-button-text"
                    to="/roulette"
                >
                    Weiter
                </Link>
            </div>
        </div>
    );
}

export default NeahPage;
