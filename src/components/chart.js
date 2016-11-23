import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

// This is a helper function to return the average of the data in the array.
function average (data) {
   // make use of the lodash round and sum functions.
   return _.round(_.sum(data) / data.length);
}

export default (props) => {
   return (
      <div>
         <Sparklines data={props.data} width={180} height={120} >
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
         </Sparklines>
         <div>Gjennomsnitt: {average(props.data)} {props.units} </div>
      </div>
   );
}

// For Sparklines, please look at:
//    https://github.com/borisyankov/react-sparklines
//    http://borisyankov.github.io/react-sparklines/
