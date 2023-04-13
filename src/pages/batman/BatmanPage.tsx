import './BatmanPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';
import {useContext, useEffect} from "react";
import {GameContext} from "../../context/GameContext";

function BatmanPage() {
    const {points, setPoints} = useContext(GameContext);

    useEffect(() => {
        setPoints(points - 3);
    }, []);

    return (
        <div className="page-wrapper">
            <h1>Batman!!</h1>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EtoMN_xi-AM?controls=0&autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <h1>Dir wurden 3 Punkte abgezogen!</h1>
            <BackToRouletteButton countdownProps={40} />
        </div>
    );
}

export default BatmanPage;
