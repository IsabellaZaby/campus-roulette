import './RouletteWheel.scss';
import { useContext, useState } from 'react';
import questions from '../../json-files/trivial.json';
import { GameContext } from '../../context/GameContext';
import {useNavigate} from "react-router-dom";

function RouletteWheel() {
    const navigate = useNavigate();
    const [spinning, setSpinning] = useState(false);
    const { setCategory } = useContext(GameContext);

    function handleClick() {
        setSpinning(true);
        let rand = Math.random() * 12;
        updateAnimationNumbers(Math.floor(rand));
    }

    function updateAnimationNumbers(prizePosition: number) {
        const spinCount = 3;
        const offset = (360 / 12) * prizePosition;
        const spinValue = 360 * spinCount - offset;

        let styleSheet = document.styleSheets[0];

        const CSSTemplate = `@keyframes spinning {from { transform: rotate(0); } to {  transform: rotate(${spinValue}deg); }}`;
        styleSheet.insertRule(CSSTemplate, styleSheet.cssRules.length);
        setCategory(questions[prizePosition].category);
        setTimeout(() => navigate('/question'), 5500);
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="board">
                    <div className="spinner-table">
                        <div className={spinning ? 'dial spinning' : 'dial'}>
                            {questions.map((question) => (
                                <div
                                    className="slice"
                                    key={question.category}
                                >
                                    <div className="label">{question.category}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="arrow">
                        <span className="pointer"></span>
                    </div>
                </div>
            </div>
            <button
                id="spin"
                onClick={handleClick}
            >
                Spin that wheel!
            </button>
        </div>
    );
}

export default RouletteWheel;
