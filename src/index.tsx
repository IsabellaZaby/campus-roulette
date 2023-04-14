import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error/ErrorPage';
import QuestionPage from './pages/question/QuestionPage';
import RoulettePage from './pages/roulette/RoulettePage';
import GameProvider from './context/GameContext';
import YeahPage from './pages/yeah/YeahPage';
import NeahPage from './pages/neah/NeahPage';
import TimeoutPage from './pages/timeout/TimeoutPage';
import WinPage from './pages/win/WinPage';
import LosePage from './pages/lose/LosePage';
import BaticornPage from './pages/baticorn/BaticornPage';
import JokerPage from './pages/joker/JokerPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
    {
        path: '/',
        element: <RoulettePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/question',
        element: <QuestionPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/yeah',
        element: <YeahPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/neah',
        element: <NeahPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/timeout',
        element: <TimeoutPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/win',
        element: <WinPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/lose',
        element: <LosePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/baticorn',
        element: <BaticornPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/joker',
        element: <JokerPage />,
        errorElement: <ErrorPage />
    }
]);

root.render(
    <React.StrictMode>
        <GameProvider>
            <RouterProvider router={router} />
        </GameProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
