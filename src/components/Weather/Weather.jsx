import React, {useState} from 'react';

import './style.css'
import {useDispatch} from 'react-redux';
import {fetchGetWeather} from '../../redux/store/apiReducer';

const Weather = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch
    console.log('==========>city', city)

    const handelChange = (e) => {
        setCity(e.target.value)
    }
    
    const handelClick = () => {
        dispatch(fetchGetWeather(city))
    }

    return (
        <div>
            <input
                onChange={handelChange}
                value={city}
            />
            <button onClick={handelClick}>Find</button>
            <div className='card'>

            </div>
        </div>
    )
};

export default Weather;
