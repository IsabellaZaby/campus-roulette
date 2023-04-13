import './NeahPage.scss';

function NeahPage() {
    return (
        <div className="neah-page-wrapper">
            <div className="neah-container">
                <h1 className="neah-text">ERROR FALSCHE ANTWORT</h1>
                <img
                    src="/pictures/grumpy_unicorn_1.png"
                    className="neah-img"
                    alt="Bild eines grantigen Einhorns"
                />
                 <a
                        className="button start-page-button-text"
                        href="/roulette"
                    >
                        Weiter
                    </a>
            </div>
        </div>
    );
}

export default NeahPage;
