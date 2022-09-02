import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { auth } from '../firebase'

const Authcontext = React.createContext()

export function useAuth() {

  return useContext(Authcontext)



}

export function AuthProvider({ children }) {

  const [currentuser, setcurrentuser] = useState()

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout(email, password) {
    return auth.signOut(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setcurrentuser(user)
    })

    return unsubscribe
  }, [])



  const value = {

    currentuser,
    signup,
    logout

  }
  return (
    <Authcontext.Provider value={value}>
      {children}
    </Authcontext.Provider>
  )


}

