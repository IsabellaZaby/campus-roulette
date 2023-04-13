import './TimeoutPage.scss';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';
import {useContext, useEffect} from "react";
import {GameContext} from "../../context/GameContext";

function TimeoutPage() {
    const {points, setPoints} = useContext(GameContext);

    useEffect(() => {
        setPoints(points - 1);
    }, []);
    return (
        <div className="page-wrapper">
            <h1 className="timeout-text">Zu spät...</h1>
            <img
                src="/pictures/sad_unicorn.png"
                className="timeout-img"
                alt="Bild eines traurigen Einhorns"
            />
            <h1>Dir wurde 1 Punkt abgezogen!</h1>
            <BackToRouletteButton />
        </div>
    );
}

export default TimeoutPage;
