import { Dispatch, SetStateAction } from "react"
import './EndModal.css'

interface EndModalProps {
    endBattle: boolean
    setEndBattle: Dispatch<SetStateAction<boolean>>
}


export const EndModal = ({endBattle, setEndBattle} : EndModalProps) => {
    if(endBattle) return (
        <div className="endModal">
            <h1>END GAME</h1>
            <button onClick={() => setEndBattle(false)}>Fechar</button>
        </div>
    )
}