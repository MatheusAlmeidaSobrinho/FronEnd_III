import { useState, useEffect } from 'react'
import './../Aula_13_Mesa/style.scss'

export function Aula_13_Mesa() {

  const [userName,setUserName] = useState('')
  const [userNameError,setUserNameError] = useState(false)

  useEffect(
    () =>{

    console.log(userName)

    if(userName.length > 10){
      setUserNameError(true)
    } else {
      setUserNameError(false)
    }
  },[userName])


  return (
    <div>
      <input type="text" value={userName} onChange={event => setUserName(event.target.value)}/>
      {userNameError ? (<small>O campo nome deve conter menos de  10 caracteres</small>) : null}
    </div>
  )
}