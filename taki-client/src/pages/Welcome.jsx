import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthenticationContext } from "../hooks/contexts/Authentication.context"

export const WelcomePage = () => {

    const [isPlayersInputOpen, setIsPlayerInputOpen] = useState(false)
    const { setPlayer1, setPlayer2 } = useContext(AuthenticationContext)
    
    const navigate = useNavigate()

    const openPlayersIputs = (event) => {
        event.preventDefault()
        setIsPlayerInputOpen(prev =>!prev)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log("submit", event.target.player1.value, event.target.player2.value)
        if (!event.target.player1.value || !event.target.player2.value) {
            alert(" please add names for both of players!")
            return
        }
        setPlayer1(event.target.player1.value)
        setPlayer2(event.target.player2.value)
        navigate("/game")
    }

    return (
        <form className="welcome-page" onSubmit={onSubmit}>
            <h1>WELCOME!</h1>
            <h2>lets play <span className="taki_text">TAKI</span> </h2>
            <br></br>
            
            {
                isPlayersInputOpen
                    ?
                    <div className="players_inputs">
                        <label>
                            player 1, whats your name? 
                             <input placeholder="player 1" id="player1"/>
                        </label>
                        <label>
                            player 2, whats your name? 
                             <input placeholder="player 2" id="player2"/>
                        </label>
                        <button type="submit">LETS START THE GAME</button>

                    </div>
                    :
                    <label className="lets_start">
                        lets keep it simple with 2 players
                        <br></br>
                        <button onClick={openPlayersIputs}>OK</button>
                    </label>
            }
            
        </form>
    )
}