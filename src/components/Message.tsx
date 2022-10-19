

type props = {
    children: string,
    tipo : string
}

export const Message = ({children,tipo} : props) => {

  return (
    <div className={`alerta ${tipo}`} >{children}</div>
  )
}
