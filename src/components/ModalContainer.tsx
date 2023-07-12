
import { Backdrop } from "./components_styles";


const ModalContainer = ({children,onClick}:{children:React.ReactNode,onClick?:()=>void}) => {
  return (
    <Backdrop
    onClick={onClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        {children}
    </Backdrop>
  )
}

export default ModalContainer