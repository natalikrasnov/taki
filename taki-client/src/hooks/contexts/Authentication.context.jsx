import { createContext, useState } from "react";

export const AuthenticationContext = createContext()

const AuthenticationContextProvider = (props) => {
    const [player1, setPlayer1] = useState()
    const [player2, setPlayer2] = useState()

    return (
        <AuthenticationContext.Provider value={{
            player1,
            player2,
            setPlayer1,
            setPlayer2
        }} >
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContextProvider