import './StartPage.scss';

function StartPage() {
    return (
        <div className="start-page-wrapper">
            <h1>Willkommen zum Campus Roulette!</h1>
            <a
                className="button start-page-button-text"
                href="/roulette"
            >
                START
            </a>
        </div>
    );
}

export default StartPage;
