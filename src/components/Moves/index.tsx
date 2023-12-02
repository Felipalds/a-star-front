import { IPokemon } from "../../interfaces/IPokemon"
import './powers.css'

interface MovesProps {
    userPokemon: IPokemon
    handleMove: (n: number) => void
}

export const Moves = ({userPokemon, handleMove}: MovesProps) => {
    return (
        <div className="moves">   
            {
            userPokemon.moves.map((p, n) => {
                if(p) return (
                    <p className='move' onClick={() => handleMove(n)}>
                        {p.name} {p.power}
                    </p>)
                    }
                )
            }
        </div>
    )
}

