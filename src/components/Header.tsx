import { NewBudget} from './NewBudget'
import {ControlBudget } from './ControlBudget'

type props ={
    budget: number;
    setbudget: React.Dispatch<React.SetStateAction<number>>
    isValidBudget: boolean;
    setIsValidBudget: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({budget,setbudget,setIsValidBudget,isValidBudget}: props) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidBudget ? (
          <ControlBudget budget={budget}/>
        ) : (
          <NewBudget
          budget={budget}
          setbudget={setbudget}
          setIsValidBudget={setIsValidBudget}
          />)
        }
        
    </header>
  )
}
