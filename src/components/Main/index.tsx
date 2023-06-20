import { useState } from 'react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';

import { TailSpin } from 'react-loader-spinner';

import {
  Container,
  Description,
  Button
} from './styles';

import UserPanel from '../User';

import { AiOutlineGooglePlus } from 'react-icons/ai';

export default function Main() {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true);
    setUserData(null);

    signInWithPopup(auth, provider)
      .then(response => setUserData(response.user))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container>
      <h1>Acesse sua conta</h1>

      <Description>
        Utilize a sua conta da Google para acessar a plataforma <br />
        de maneira muito mais rápida!
      </Description>

      <Button onClick={handleGoogleSignIn}>
        <AiOutlineGooglePlus />
        Sign in with Google
      </Button>

      {isLoading && <TailSpin
        height="40"
        width="40"
        color="#FAFAFA"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />}

      {userData && <UserPanel userData={userData} />}
    </Container>
  );
}
