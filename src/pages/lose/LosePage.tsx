import './LosePage.scss';
import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import NoCheatingDisplay from '../../components/no-cheating-display/NoCheatingDisplay';
import { useNavigate } from 'react-router-dom';

function LosePage() {
    const { points, reset } = useContext(GameContext);

    const navigate = useNavigate();

    function onClick() {
        reset();
        navigate('/');
    }

    if (points > -5) {
        return <NoCheatingDisplay />;
    }

    return (
        <div className="page-wrapper">
            <h1 className="lose-text">Du hast verloren!</h1>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hUPOzvxCDxU?controls=0&autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <button onClick={onClick}>Nochmal spielen</button>
        </div>
    );
}

export default LosePage;
