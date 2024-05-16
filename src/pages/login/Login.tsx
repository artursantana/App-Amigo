import React, { useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '@/services/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      router.push('/main/Main');
    } catch (error) {
      
      alert('Erro ao fazer login ou Não cadastrado!:');
      
    }
  };

  return (
    <S.Container>
      <S.ContainerMain>
        <S.ContainerLogo>
          <Image src="/logo.png" alt="Logo" width={40} height={50} />
          <h1>Login de Acesso</h1>
        </S.ContainerLogo>
        <form onSubmit={handleSignIn}>
          <S.ContainerInputs>
            <input
              type="text"
              placeholder='Usuário'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.ContainerInputs>
          <S.ContainerButtonLogin>
            <button type="submit">Entrar</button>
            <p>Não tem uma Conta ? <Link href='/register/Register'>Registre-se</Link></p>
          </S.ContainerButtonLogin>
        </form>
      </S.ContainerMain>
    </S.Container>
  );
}

export default Login;
