import React, {useContext} from 'react'
import { RegistrationContext
 } from '../Context/RegistrationContextProvider'

const Dashboard = () => {
    const [state,dispatch]=useContext(RegistrationContext);
  return (
    <div>
        <div>user detail</div>
        <div>
            name:{state.name}
        </div>
        <div>
            email:{state.email}
        </div>
        <div>
            phone :{state.phone}
        </div>
        <div>
            address:{state.address}
        </div>

    </div>
  )
}

export default Dashboard;