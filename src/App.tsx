import { useState } from 'react'
import { Header} from './components/Header';
import { Modal} from './components/Modal';
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'


function App() {
  
  const [budget, setbudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)


  const spentHandle = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }

  return (
    <>
      <Header
       budget={budget}
       setbudget={setbudget}
       isValidBudget= {isValidBudget}
       setIsValidBudget={setIsValidBudget}
      />
      {
        isValidBudget && (
        <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto} alt="boton de nuevo gasto" onClick={spentHandle} />
        </div>
      )}
      {
        modal && <Modal setModal={setModal} animateModal={animateModal} setAnimateModal={setAnimateModal}/>
      } 
    </>
  )
}

export default App
