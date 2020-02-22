import React from 'react';

import Person from './Person/person';

const Hello = (props) => {
  let name = props.name.fName + ' ' + props.name.lName;
  return (
            
          <Person  name={name} counter={props.counter} click={props.childAction}>
            <h5> {props.name.fName + "---"+ props.name.lName }!!</h5> 
          </Person>
      
    );
};

const TestOne =  (props) => {
  return <h4> --- {props.name.fName + " - "+ props.name.lName }---</h4>;
  };

export {TestOne, Hello};

//Reff : https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export



