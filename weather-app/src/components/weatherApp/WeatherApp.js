import React, { useState } from 'react'

const API_KEY = "4a64ed09d073cdac231c53e1a3b62181"


export const WeatherApp = () => {
    const [background, setBackground] = useState('sky-gradient-11') 

    return (
        <div className={`screen ${background}`}>
            Screen
        </div>
    )
}
