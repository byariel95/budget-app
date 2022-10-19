import CloseBtn from '../assets/img/cerrar.svg'

type props ={
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    animateModal : boolean
    setAnimateModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({setModal, animateModal,setAnimateModal}:props) => {

    const hideModal = ()=> {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false)
        }, 500);
    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseBtn} alt="Cerrar modal"  onClick={hideModal}/>
            </div>
            <form className={`formulario ${animateModal ? "animar": "cerrar"}`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor="name">Nombre Gasto</label>
                    <input 
                        type="text" 
                        placeholder='Añade el Nombre del Gasto' 
                        id="name" 
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="quantity">Cantidad</label>
                    <input 
                        type="number" 
                        placeholder='Añade la cantidad del gasto ej: 3200' 
                        id="quantity" 
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="category">Cantegoria</label>
                    <select id="category">
                        <option value=""> -- Seleccione -- </option>
                        <option value="ahorro"> -- Ahorro -- </option>
                        <option value="comida"> -- Comida -- </option>
                        <option value="gastos varios"> -- Gastos Varios -- </option>
                        <option value="casa"> -- Casa -- </option>
                        <option value="salud"> -- Salud -- </option>
                        <option value="subcripciones"> -- Subcripciones -- </option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}
