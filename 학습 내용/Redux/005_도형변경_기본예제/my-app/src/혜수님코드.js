// App.jsx
import One from "./components/One/One";
import Three from "./components/Three/Three";
import Two from "./components/Two/Two";
import "./App.css";
import {useDispatch} from "react-redux";
import {changeRadius} from "./reducer/reducer";

function App() {
    const dispatch = useDispatch();
    const onChangeRadius = radius => {
        dispatch(changeRadius(radius));
    };

    return (
        <main>
            <button onClick={() => onChangeRadius("0")}>사각형</button>
            <button onClick={() => onChangeRadius("10%")}>둥근 사각형</button>
            <button onClick={() => onChangeRadius("50%")}>원</button>

            <div className="wrap">
                <One />
                <Two />
                <Three />
            </div>
        </main>
    );
}
export default App;





// One.jsx
import React from "react";
import styles from "./One.module.css";
import {useSelector} from "react-redux";

export default function One() {
    const borderRadius = useSelector(({borderRadius}) => borderRadius);
    // console.log(borderRadius);

    return (
        <div className={styles.one} style={{borderRadius}}>
            One
        </div>
    );
}





// reducer.jsx
// 액션 생성 함수
export const changeRadius = radius => {
    return {type: "CHANGE_RADIUS", borderRadius: radius};
};

// 초깃 값
const initialState = {
    borderRadius: "0",
};

// 리듀서
const changeRect = (state = initialState, action) => {
    // console.log('Reducer changeRect state : ', state);
    // console.log('Reducer changeRect action :', action);
    switch (action.type) {
        case "CHANGE_RADIUS":
            return {...state, borderRadius: action.borderRadius};
        default:
            return state;
    }
};

export default changeRect;