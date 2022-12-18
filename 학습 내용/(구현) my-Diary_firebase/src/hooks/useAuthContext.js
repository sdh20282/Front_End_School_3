import { useContext } from 'react' // context를 사용하기 위해 import 합니다.
import { AuthContext } from "../context/AuthContext";  // 우리가 만들었던 인증 context입니다.

export const useAuthContext = () => {

    const context = useContext(AuthContext);

    // 이제 context안에는 AuthContext에서 반환하는 state 값, dispatch 함수 두 가지가 들어있습니다.
    return context
}