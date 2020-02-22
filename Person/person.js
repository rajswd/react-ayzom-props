import React from 'react';
import './person.css';

const Person = (props) =>{
  let msg = `You clicked to - ${props.name}`;
  return (
    <div className="person-block">
      <h2 > Welcome {props.name} </h2>
       <p onClick = {props.click.bind(null, props.counter, msg )}>Click to delete</p>
      <div className="child-content">{props.children}</div>
    </div>

  );
};

export default Person;