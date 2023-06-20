import { User } from 'firebase/auth';

import { Container } from './styles';

interface UserProps {
  userData: User
}

export default function UserPanel({ userData } : UserProps) {
  return (
    <Container>
      {userData.photoURL && <img src={userData.photoURL} alt="Fotoo" />}

      <strong>{userData.displayName}</strong>
      <span>{userData.email}</span>
    </Container>
  );
}
