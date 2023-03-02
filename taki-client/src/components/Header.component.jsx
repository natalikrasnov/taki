import { useContext, useState } from "react"
import { AuthenticationContext } from "../hooks/contexts/Authentication.context"
import pdbFile from "../assets/about.pdf"
import { Document } from "react-pdf";

export const Header = () => {
    const { player1, player2 } = useContext(AuthenticationContext)
    const [isOpenPdf, setIsOpenPdf] = useState(false)

    return (
        <div className="header">
           
            <div className="title">
                <img src="https://upload.wikimedia.org/wikipedia/he/a/ac/TAKI_logo.png" />
                <label className="players_text">on the game: {player1 ?? "almoni"} VS {player2 ?? "palmoni"} </label>
            </div>
            {
                isOpenPdf ?
                    <Document file={pdbFile} className="pdf-file" />
                    :
                    <button className="about_button">about</button>
            }
        </div>
    )
} 