import React, { Component } from 'react';
import { render } from 'react-dom';
import {TestOne, Hello} from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: {fName: 'React', lName:" Awesome"},
      arrName: [{fName: 'Raj', lName:" Singh"}, {fName: 'Ranjan', lName:" Singh"},{fName: 'Ravi', lName:" Singh"},{fName: 'Annu', lName:" Singh"},{fName: 'Anvi', lName:" Singh"}]
    };
    this.childClick = this.childClick.bind(this);
  }


  childClick(event){
    alert(event);
    console.log(event, this.state.title.fName);
  }

  render() {
    const list = [], ul$;
    let i =1;
    this.state.arrName.forEach(person => {
      list.push(<li><Hello name={person} counter={i++} childAction={this.childClick} /> </li>);
    });
    ul$ = <ul className="test-cl">{list}</ul>;

    return (
      <div>
         {ul$}         
            
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


// Animatinon
//  <TestOne name= {this.state.name} /> 
      
      