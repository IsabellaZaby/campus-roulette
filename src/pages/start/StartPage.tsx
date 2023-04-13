import './StartPage.scss';
import { Link } from 'react-router-dom';

function StartPage() {
    return (
        <div className="start-page-wrapper">
            <h1>Willkommen zum Campus Roulette!</h1>
            <Link
                className="button start-page-button-text"
                to="/roulette"
            >
                START
            </Link>
        </div>
    );
}

export default StartPage;
