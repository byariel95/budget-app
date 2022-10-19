import { useState } from "react";
import {Message} from './Message'

type props ={
  budget: number;
  setbudget: React.Dispatch<React.SetStateAction<number>>;
  setIsValidBudget: React.Dispatch<React.SetStateAction<boolean>>
}
export const NewBudget = ({budget,setbudget,setIsValidBudget}:props) => {

  const [message, setMessage] = useState('')
  const handleBudget = (e: any ) => {
    e.preventDefault()

    if (!Number(budget) || Number(budget) < 0)
    {
      setMessage('No es un presupuesto valido')
      return
    }
    setMessage('')
    setIsValidBudget(true)
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handleBudget}> 
            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>
                <input
                 className="nuevo-presupuesto" 
                 type="number" 
                 placeholder="Añade tu Presupuesto"
                 value={budget}
                 onChange={e => setbudget(Number(e.target.value))}
                 />
            </div>
            <input type="submit" value="Añadir"  />
            {
              message && <Message tipo='error'>{message}</Message> 
            }
        </form>
    </div>
  )
}
