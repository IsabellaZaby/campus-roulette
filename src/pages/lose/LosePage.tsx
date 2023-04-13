import './LosePage.scss';
import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import NoCheatingDisplay from '../../components/no-cheating-display/NoCheatingDisplay';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';

function LosePage() {
    const { points } = useContext(GameContext);

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
            <BackToRouletteButton isAutomaticRedirect={false} isHardReloadPage={true} />
        </div>
    );
}

export default LosePage;
