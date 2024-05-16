import React, { useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../../services/firebaseConfig';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [confirmUsername, setConfirmUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [
    createUserWithEmailAndPassword,
    user,
    ,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const methods = await auth.fetchSignInMethodsForEmail(email);
      return methods.length > 0;
    } catch (error) {
      console.error('Erro ao verificar o email:', error);
      return false;
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!username || !confirmUsername || !password) {
      setErrorText("Por favor, preencha todos os campos.");
      return;
    }

    // Verifica se o formato do email é válido
    if (!username.includes('@')) {
      setErrorText("Por favor, insira um email válido.");
      return;
    }

    // Verifica se os emails são iguais
    if (username !== confirmUsername) {
      setErrorText("Os endereços de email não são iguais.");
      return;
    }

    setLoading(true);

    try {
      // Verifica se o email já está cadastrado
      const emailExists = await checkEmailExists(username);
      if (emailExists) {
        setErrorText("Este email já está cadastrado. Por favor, use outro email.");
        setLoading(false);
        return;
      }

      // Cria a conta se o email não estiver cadastrado
      await createUserWithEmailAndPassword(username, password);
      alert('Conta criada com sucesso!');
      router.push('/login/Login'); // Redireciona para a página de login após o registro
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setErrorText("Este email já está cadastrado. Por favor, use outro email.");
      } else {
        setErrorText("Ocorreu um erro ao criar a conta. Por favor, tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.ContainerMain>
        <Link href='/'>
          <Image src='/back.png' width={25} height={25} alt='backPage' />
        </Link>
        <S.ContainerLogo>
          <Image src="/logo.png" alt="Logo" width={40} height={50} />
          <h1>Criar Login</h1>
        </S.ContainerLogo>
        <form onSubmit={handleSignIn}>
          <S.ContainerInputs>
            <input
              type="text"
              placeholder='Nome Usuário'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder='Confirme Usuário'
              value={confirmUsername}
              onChange={(e) => setConfirmUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder='Sua Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorText && <p style={{ color: 'red' }}>{errorText}</p>}
          </S.ContainerInputs>
          <S.ContainerButtonCreate>
            <button type="submit" disabled={loading}>
              {loading ? <Image src="/loading.gif" alt="Carregando..." width={30} height={30} /> : "Criar Conta"}
            </button>
          </S.ContainerButtonCreate>
        </form>
      </S.ContainerMain>
    </S.Container>
  );
};

export default Register;
