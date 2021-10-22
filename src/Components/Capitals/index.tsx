import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import axios from 'axios'
import api from '../../service/api';

type Props = {
    data?: object
    city?: String
    name?: string
    main?: any
}

const Capitals = (props: Props) => {

    const city = 'Viamão'
    const [ cityName, setCityName ] = useState('')

    useEffect(() => {
        api.get<Props>(`/data/2.5/weather?q=${city}&appid=17c6ff7a68ddf23b9c99f11ba7456398&units=metric`)
            .then(response => {
                console.log(response)
                console.log(response.data)
                console.log(response.data.name)
                // setCity(response.data.name)
                // console.log(response.data.name)
                console.log(response.data.main.temp)
                console.log(response.data.main.temp_max)
                console.log(response.data.main.temp_min)
            })
            .catch(error => {
                console.log(error)
                console.log(error.response)
            })
    }, [])

    return (
        <>
            <Container>
                <hr />
                <h2>Capitais</h2>
                <div>
                    <div>
                        <p>
                            <span>Min</span>
                            <span>Máx</span>
                        </p>
                        <p>
                            <span>18°</span>
                            <span>18°</span>
                            Rio de Janeiro
                        </p>

                    </div>
                    <div>
                        <p>
                            <span>Min</span>
                            <span>Máx</span>
                        </p>
                        <p>
                            <span>18°</span>
                            <span>18°</span>
                            Rio de Janeiro
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Capitals;