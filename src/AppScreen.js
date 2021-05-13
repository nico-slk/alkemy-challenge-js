import React, { useContext, useEffect } from 'react'
import UserContext from './context/context'

export default function AppScreen() {
    const userContext = useContext(UserContext)

    useEffect(() => {

    }, [])

    return (
        <div>
            {console.log(userContext)}
            AppScreen
        </div>
    )
}
