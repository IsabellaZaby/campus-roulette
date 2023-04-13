import './FinishedPage.scss';
import React, { useContext, useRef } from 'react';
import { FireworksHandlers } from 'fireworks-js';
import Fireworks from '@fireworks-js/react';
import { GameContext } from '../../context/GameContext';
import NoCheatingDisplay from '../../components/no-cheating-display/NoCheatingDisplay';

function FinishedPage() {
    const { points } = useContext(GameContext);
    const ref = useRef<FireworksHandlers>(null);

    if (points < 5) {
        return <NoCheatingDisplay />;
    }

    return (
        <div className="page-wrapper">
            <h1 className="finished-text">Gewonnen!</h1>
            <Fireworks
                ref={ref}
                className="fireworks"
                options={{
                    opacity: 0.3,
                    explosion: 12,
                    lineWidth: {
                        explosion: {
                            min: 2,
                            max: 6
                        },
                        trace: {
                            min: 1,
                            max: 4
                        }
                    },
                    intensity: 30
                }}
            />
        </div>
    );
}

export default FinishedPage;
