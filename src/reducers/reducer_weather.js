import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
   console.log('Action received in reducer_weather:', action);

   switch (action.type) {
      case FETCH_WEATHER:
         // Allways return a new peace of state, NEVER update the state directly.
         // The ...state is the es6 spread operator, wich flattens the array.
         return [ action.payload.data, ...state ];    // Results in [city, city, city], NOT [city, [city, city]], when the state already contains two cities.
   }

   return state;
}
