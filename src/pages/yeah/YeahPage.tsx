import './YeahPage.scss';
import { Link } from 'react-router-dom';

function YeahPage() {
    return (
        <div className="yeah-page-wrapper">
            <div className="yeah-container">
                <h1 className="yeah-text">Das war RICHTIG! YEAH!</h1>
                <img
                    src="/pictures/happy_unicorn_2.png"
                    className="yeah-img"
                    alt="Bild eines glücklichen Einhorns"
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

export default YeahPage;
