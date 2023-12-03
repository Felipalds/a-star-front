import { IPokemon } from "../../interfaces/IPokemon"
import './powers.css'

interface MovesProps {
    userPokemon: IPokemon
    handleMove: (n: number) => void
    shouldWait: boolean
}

export const Moves = ({userPokemon, handleMove, shouldWait}: MovesProps) => {
    return (
        <div className="moves">   
            {
            userPokemon.moves.map((p, n) => {
                if(p) return (
                    <p className={shouldWait ? 'disabledd move' : 'move' } onClick={() => handleMove(n)}>
                        {p.name} {p.power}
                    </p>)
                    }
                )
            }
        </div>
    )
}

