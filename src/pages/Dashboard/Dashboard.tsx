import { useState } from 'react'
import Button from '../../components/button'
import MessageBox from '../../components/message_Modal/messageModal'
import CustomInput from '../../components/CustomInput'

const Dashboard = () => {
const [confirmation,setConfirmation]=useState(false)



// Explain generic  typescript


  return (
    <div>

      <MessageBox  open={confirmation} handleClose={() => setConfirmation(false) } message={'Are you sure'}  onConfirm={()=>{setConfirmation(false);alert("Deleted sucssefully");}} />
<Button onClick={() => setConfirmation(true)}   size='small' >Click me</Button>
<CustomInput placeholder='hello' onChange={(e:any)=>{console.log(e.target.value);
}} />
    </div>
  )
}

export default Dashboard