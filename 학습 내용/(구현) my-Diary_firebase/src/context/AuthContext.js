import { createContext, useEffect, useReducer } from 'react';
import { appAuth } from '../firebase/config';

// context를 객체를 생성합니다.
const AuthContext = createContext();

const authReducer = (state, action) => {
    // 전달 받은 action의 프로퍼티에 따라 state 값을 업데이트 할 수 있지만 지금은 따로 타입을 설정하지 않습니다. 확장성을 위한 코드입니다.


    switch (action.type) {
        case 'login':
            // 전개구문을 이용해 객체의 user 값을 업데이트 합니다.
            // var currentState = { name: '철수', species: 'human'};
            // currentState = { ...currentState, name: '영희', age: 11}; 
            // console.log(currentState); 

            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }
        case 'authIsReady':
            return { ...state, user: action.payload, isAuthReady: true }
        default:
            return state
    }
}

// context 객체를 구독할 컴포넌트의 묶음 범위를 설정합니다.
const AuthContextProvider = ({ children }) => {

    // authReducer : 리듀서 함수. state를 업데이트 합니다. 우리가 직접 만들어야합니다.
    // useReducer의 두번째 인자 : state의 초기값.
    // state: 우리가 관리할 데이터
    // dispatch : authReducer를 호출하기 위한 함수입니다. dispatch를 실행하면 리듀서 함수가 호출됩니다. action을 인자로 사용합니다.
    // action : authReducer에서 사용할 수 있는 type, payload 같은 값을 dispatch에 담겨 전달됩니다.
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false
    })

    useEffect(() => {
        // onAuthStateChanged : 유저의 인증정보 변화를 관찰하는 함수입니다.
        // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다. 더 이상 유저의 변화를 관찰하지 않도록 하는 함수입니다. 우리는 새로고침 후 초기에 딱 한번 실행하면 되기 때문에 이후에는 구독을 중지합니다.
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            dispatch({ type: 'authIsReady', payload: user })
            unsubscribe();
        });
    }, [])

    console.log('유저의 인증 상태 : ', state);

    return (
        // Provider 는 value 프로퍼티를 통해 하위 컴포넌트에 값을 전달합니다. 차 후에 user 데이터 외에 더 많은 데이터를 context로 접근할 수 있으니 전개 구문(...)을 이용합니다.
        // dispath 함수를 같이 전달하여 다른 커스텀 훅에서도 user의 state 값을 업데이트 할 수 있도록합니다. 예를 들어 로그아웃 같은 기능을 구현할 때 로그아웃 후 user의 state값을 변경해야 하기 때문입니다. 
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {/* 이 안에 배치되어 있는 컴포넌트가 context에서 공유하는 정보를 구독하는 컴포넌트가 됩니다. */}
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };