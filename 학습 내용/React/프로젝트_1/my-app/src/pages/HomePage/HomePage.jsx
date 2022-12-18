import { useState, useEffect, useContext } from 'react'

import Card from '../../components/Card/Card'
import Cart from '../../components/Cart/Cart'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'

// import { data } from '../../database/data'
import { callAPIResponse } from '../../database/callAPI'
import './homePage.css'

console.log('진입점 1')

export default function HomePage() {
    // console.log(data)
    // const data = null
    const [loadData, setLoadData] = useState(null)
    console.log('진입점 2')

    // useEffect(()=>{
    //     console.log('로딩중...')
    // }, [])

    // useEffect(()=>{
    //     if(loadData === null) {
    //         return
    //     } else {
    //         console.log('로딩완료!!')
    //         console.log(loadData)
    //     }
    // }, [loadData])

    useContext(callAPIResponse).then(data => {
        console.log('진입점 3')
        console.log(data)
        setLoadData(data)
    })
    
    return (
        <main className='product'>
        {
            loadData !== null ? 
                <>
                    <ul className='product-list'>
                        {loadData.map(item =><Card key={item.id} {...item}/>)}
                        {console.log('진입점 4')}
                    </ul>
                    <Cart/>
                </>
            : <FailLoadData />
        }
        </main>
    )
}

