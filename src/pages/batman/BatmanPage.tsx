import './BatmanPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';

function BatmanPage() {
    return (
        <div className="page-wrapper">
            <h1 className="batman-headline">Batman!!</h1>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EtoMN_xi-AM?controls=0&autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <BackToRouletteButton countdownProps={40} />
        </div>
    );
}

export default BatmanPage;
