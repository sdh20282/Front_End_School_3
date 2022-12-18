// 액션 생성 함수
export const changeRadius1 = () => {
    return { type : "CHANGE_RADIUS", borderRadius:'0px' }
}

export const changeRadius2 = () => {
    return { type : "CHANGE_RADIUS", borderRadius:'5%' }
}

export const changeRadius3 = () => {
    return { type : "CHANGE_RADIUS", borderRadius:'50%' }
}

// 초기 값
const initialState = {
    borderRadius: "0px"
}

// 리듀서
const changeRect = (state = initialState, action) => {
    console.log('// 리듀서 시작')
    console.log(state)
    console.log(action)
    console.log('// 리듀서 끝')
    switch (action.type) {
        case "CHANGE_RADIUS":
            return {
                ...state,
                borderRadius: action.borderRadius
            }
        default:
            return state
    }
}

export default changeRect