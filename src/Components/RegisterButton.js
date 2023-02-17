import React, { useState } from 'react'
import './RegisterButton.css'

function RegisterButton() {

    const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className='registerButtonContainer' >
            რეგისტრაცია / Register

    </div>
  )
}

export default RegisterButton