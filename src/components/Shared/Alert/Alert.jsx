import { useContext } from 'react'
import AlertContext from '../../../context/Alerte/AlerteContext'


import './Alert.css'

function Alert() {

    const {alert} = useContext(AlertContext)
 
 
    return alert !==  null && (
    <div className={ alert.type === "success" ? ('success'): ('danger') }>
<p>
   
    <p>{alert.msg}</p>
</p>
    </div>
  )
}

export default Alert