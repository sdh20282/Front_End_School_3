// 액션 생성함수
export const addNumber = () => {
    return { type: "ADD" }
};

export const substractNumber = () => {
    return { type: "SUBSTRACT" }
};

// 초기 값
const initialState = {
    stock: 10,
    goods: 1
};

// 리듀서
const goodsReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    console.log(state)
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                stock : state.stock - 1,
                goods : state.goods + 1,
            }
        case "SUBSTRACT":
            return {
                ...state,
                stock : state.stock + 1,
                goods : state.goods - 1,
            }
        default:
            return state
    }
};

export default goodsReducer