import './ErrorPage.scss';

function ErrorPage() {
    return (
        <div className="error-page-wrapper">
            <div className="error-container">
                <h1 className="error-text">Error 404</h1>
                <img
                    src="/pictures/sad_unicorn.png"
                    className="error-img"
                    alt="Bild eines traurigen Einhorns"
                />
            </div>
        </div>
    );
}

export default ErrorPage;
