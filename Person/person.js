import React from 'react';
import './person.css';

const Person = (props) =>{
  let msg = `You clicked to - ${props.name}`;
  return (
    <div className="person-block">
      <p onClick = {props.click.bind(this,msg)}> Welcome {props.name} You are the {props.counter} to register.</p>
      <div className="child-content">{props.children}</div>
    </div>

  );
};

export default Person;