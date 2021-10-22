import React, { useState, useEffect } from 'react'
import api from '../../service/api';

type Props = {
    data?: object
    city?: String
    name?: string
    main?: any
}

const City = (props:Props) => {

    const [ citiName, setCityName ] = useState(props.name)
    const [ tempMax, setTempMax ] = useState(0)
    const [ tempMin, setTempMin ] = useState(0)

    useEffect(() => {
        api.get<Props>(`/data/2.5/weather?q=${citiName}&appid=17c6ff7a68ddf23b9c99f11ba7456398&units=metric`)
            .then(response => {
                setTempMax(response.data.main.temp_max)
                setTempMin(response.data.main.temp_min)
            })
            .catch(error => {
                console.log(error)
                console.log(error.response)
            })
    }, [])

    return (
        <>
            <p>
                <span>{tempMax.toFixed()}°</span>
                <span>{tempMin.toFixed()}°</span>
                {citiName}
            </p>
        </>
    )
}

export default City;