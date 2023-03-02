import { createBrowserRouter } from "react-router-dom";
import { GamePage } from "../pages/game";
import { WelcomePage } from "../pages/Welcome";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage />
    },
    {
        path: "/game",
        element: <GamePage />
    }
])