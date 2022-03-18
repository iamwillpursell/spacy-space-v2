import { useRef, useState } from 'react'
import { useHistory} from 'react-router-dom'

import { useAuth } from '../contexts/Auth'

export function Register() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfRef = useRef()
  const firstRef = useRef()
  const lastRef = useRef()

  const { signUp } = useAuth()

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const { error } = await signUp({ email, password })

    if (error) {
      alert('error signing in')
    } else {
      history.push('/')
    }
  }


  return (
    <div className="m-auto">
        
      <form className="mx-5" onSubmit={handleSubmit}>
        <h1>CREATE YOUR ACCOUNT</h1>
        <div className="inline-flex my-4">
            <input placeholder="First Name" id="input-firstName" type="text" className="w-6/12 text-center mx-1 border-4 border-white-400 bg-transparent rounded-full" ref={firstRef} />
            <input placeholder="Last Name" id="input-lastName" type="text" className="w-6/12 text-center mx-1 border-4 border-white-400 bg-transparent rounded-full" ref={lastRef} />
        </div>

        

        <input placeholder="Email Address" id="input-email" type="email" className="w-7/12 text-center mx-1 mb-4 border-4 border-white-400 bg-transparent rounded-full" ref={emailRef} />

        <br />

        <input placeholder="Password" id="input-password" type="password" className="w-7/12 mb-4 text-center mx-1 border-4 border-white-400 bg-transparent rounded-full" ref={passwordRef} />
        <input placeholder="Confirm Password" id="input-passwordConf" type="password" className="w-7/12 text-center mx-1 border-4 border-white-400 bg-transparent rounded-full" ref={passwordConfRef} />

        <br />

        <button type="submit" className="border-4 border-white-400 rounded-full my-4 px-4">CREATE ACCOUNT</button>
      </form>
    </div>
  )
}