import { useContext } from 'react'
import AlertContext from '../../../context/Alerte/AlerteContext'
import warning from '../../Assets/icones/red/warning_red.svg'

import './Alert.css'

function Alert() {

    const {alert} = useContext(AlertContext)
  return alert !==  null && (
    <div className='alert'>
<p>
    {/* {alert.type === 'error' && (
        <img src= {warning} alt="" />
    ) } */}
    <p>{alert.msg}</p>
</p>
    </div>
  )
}

export default Alert