import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Product() {
    useEffect(()=>{

        // - axios.get(url, conf)
        // - axios.delete(url, conf)
        // - axios.post(url, data, conf)
        // - axios.put(url, data, conf)
        // - axios.patch(url, data, conf)

        //axios
        axios.get('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('axios')
                console.log(res)
                console.log(res.data)
            })

        //fetch
        fetch('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('fetch')
                console.log(res)
                // console.log(res.json()) // pending됩니다.
                return res.json()
            })
            .then(data => {
                console.log(data)
            })


    }, [])
  return (
    <div>Product</div>
  )
}
