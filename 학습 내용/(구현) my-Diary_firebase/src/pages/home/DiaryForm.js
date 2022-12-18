import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore';

// uid 는 Home.js 에서 props로 전달받는 유저 아이디입니다.
export default function DiaryForm({ uid }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const { addDocument, response } = useFirestore('diary');

    const handleData = (event) => {
        event.preventDefault();
        console.log(title, text);
        // userId : 작성한 유저의 아이디입니다. auth정보로부터 받아와 Home.js 에서 props 로 전달받도록 만들겠습니다.
        addDocument({
            uid,
            title,
            text
        })
    }

    useEffect(() => {
        if (response.success) {
            console.log(response);
            setTitle('');
            setText('');
        }
    }, [response.success]); // response.success가 바뀔 때만 effect를 재실행합니다.

    return (
        <>
            <form onSubmit={handleData}>
                <fieldset>
                    <legend>일기 쓰기</legend>
                    <label htmlFor='tit'>일기 제목 : </label>
                    <input id="tit" type='text' required onChange={(event) => setTitle(event.target.value)} value={title}></input>

                    <label htmlFor='tit'>일기 내용 : </label>
                    <textarea id="tit" type='text' required onChange={(event) => setText(event.target.value)} value={text}></textarea>

                    <button type='submit'>저장하기</button>
                </fieldset>
            </form>
        </>
    )
}