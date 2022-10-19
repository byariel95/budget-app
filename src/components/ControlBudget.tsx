

type props = {
    budget: number;
}

export const ControlBudget = ({budget}:props) => {

    const formatQuantity = (quantity: number): string => {
        return quantity.toLocaleString('es-GT',{
            style: 'currency',
            currency:'GTQ'
        })
    }
    
    return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas ">
        <div>
            <p>
                grafica Aqui
            </p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatQuantity(budget)}
            </p>
            <p>
                <span>Disponible: </span> {formatQuantity(0)}
            </p>
            <p>
                <span>Gastado: </span> {formatQuantity(0)}
            </p>
        </div>
    </div>
  )
}
