import './YeahPage.scss';

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
            </div>
        </div>
    );
}

export default YeahPage;
