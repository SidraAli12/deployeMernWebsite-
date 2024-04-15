import {SET_SLIDER_CONTENT} from './action';
const initialState = {
    sliderContent: [],
};
const reducer = (state = initialState, actions ) => {
    switch (actions.type){
        case SET_SLIDER_CONTENT:
        return {
            ...state,
            sliderContent: actions.payload,
        }
        default:
            return state;
    }
}
export default reducer