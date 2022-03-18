import { useRef, useState } from 'react'

import { useHistory } from 'react-router-dom'

import { useAuth } from '../contexts/Auth'


export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signIn } = useAuth()

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const { error } = await signIn({ email, password })

    if (error) {
      alert('error signing in')
    } else {
      history.push('/')
    }
  }

  return (
    <div className="m-auto">
        
      <form className="mx-5" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="my-4">
            <input placeholder="Email Address" id="input-email" type="email" className="w-7/12 text-center mx-1 mb-4 border-4 border-white-400 bg-transparent rounded-full" ref={emailRef} />
            <input placeholder="Password" id="input-password" type="password" className="w-7/12 mb-4 text-center mx-1 border-4 border-white-400 bg-transparent rounded-full" ref={passwordRef} />
        </div>


        <button type="submit" className="w-6/12 border-4 border-white-400 rounded-full px-4">Login</button>
      </form>
    </div>
  )
}