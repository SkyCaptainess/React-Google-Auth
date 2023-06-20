import { GoogleLogo } from 'phosphor-react'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import './styles.scss'
import { auth } from '../../services/firebase'
import { useState } from 'react'

export function SignIn() {
  const [user, setUser] = useState<User>({} as User)
  function handleGoogleSign() {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then(result => setUser(result.user))
      .catch(err => console.log('error', err))
  }

  return (
    <div className="container">
      <div className="user">
        {user.displayName && (
          <>
            <h1>Bem vindo!</h1>
            <div>
              <strong>Nome: {user.displayName}</strong>
            </div>
            <div>
              <strong>E-mail:</strong> <small>{user.email}</small>
            </div>
          </>
        )}
      </div>
      <h1>Acesse sua conta</h1>
      <span>
        Utilizando autenticação social, por exemplo, com autenticação com a
        Google você <br /> facilita a vida do usuário permitindo utilizar sua
        aplicação sem fazer cadastro
      </span>
      <button className="button" onClick={handleGoogleSign}>
        <GoogleLogo />
        Entrar com a Google
      </button>
    </div>
  )
}
