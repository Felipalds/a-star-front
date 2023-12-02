import { Dispatch, SetStateAction } from "react"
import { IStatus } from "../../interfaces/IPokemon"
import './StatusModal.css'

interface StatusModalProps {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    status: IStatus | null
}


export const StatusModal = ({showModal, status, setShowModal} : StatusModalProps) => {
    if(showModal) return (
        <div className="modal">
            <h1>{status?.name}</h1>
            <h3>ATAQUE: {status?.attack}</h3>
            <h3>DEFESA: {status?.defense}</h3>
            <h3>TIPO: {status?.pokeType}</h3>
            <h3>ATAQUE ESPECIAL: {status?.specialAttack}</h3>
            <h3>VELOCIDADE: {status?.speed}</h3>
            <button onClick={() => setShowModal(false)}>Fechar</button>
        </div>
    )
}