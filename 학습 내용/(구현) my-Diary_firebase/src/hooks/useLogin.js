import { useState } from 'react'
import { appAuth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    // signup 훅을 만듭니다. email, password, displayName 세가지 매개변수를 갖습니다.
    const login = (email, password) => {
        setError(null); // 아직 에러가 없으니 null 입니다.
        setIsPending(true); // 통신중이므로 true입니다.


        // 비밀번호 설정으로 유저 정보를 등록합니다. import 받아야합니다.
        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {

                // Signed in
                const user = userCredential.user;
                dispatch({ type: 'login', payload: user });
                setError(null);
                setIsPending(false);
                // 회원 정보를 정상적으로 받지 못하면 실패입니다.
                if (!user) {
                    throw new Error('로그인에 실패했습니다.');
                }
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.log(err.message);
            });
    }

    return { error, isPending, login }
}