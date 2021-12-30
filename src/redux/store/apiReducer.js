const defaultState = {
    weather: []
}

export const GET_WEATHER = "GET_WEATHER";
export const FETCH_GET_WEATHER = "FETCH_BEERS";


const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {...state, beers: action.payload}
    }
    return state
};
export default weatherReducer;

export const getWeather = payload => ({type: GET_WEATHER, payload});
export const fetchGetWeather = (payload) => ({type: FETCH_GET_WEATHER, payload});
