import React from 'react'
import PropTypes from 'prop-types'
import Logo from './assets/images.jpeg'
function Card(props) {
    return (
        <div className='Card'>
            <img src={Logo} alt="Logo" />
            <h2>{props.name}</h2>
            <p>{props.content}</p>
        </div>
    );
}
Card.propTypes = {
    name:PropTypes.string,
    content:PropTypes.string,
}
Card.defaultProps = {
    name:"Name",
    content:"Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah",
}
/*
Inside App.jsx
import Card from './Card';
<Card name="Sharan" content="This is a card format to understand react components practice."/>
      <Card name="Raywan" content="This is a card format to understand Python components practice."/>
      <Card name="Gokul"/>
      <Card/>

Inside App.css
.Card{
  padding: 20px;
  background-color: antiquewhite;
  border: 1px solid rgba(0, 0, 0, 0.753);
  margin: 10px;
  border-radius: 15px;
  max-width: 250px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.514);
  text-align: center;
  display: inline-block; 
}
.Card img{
  max-width: 60%;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
}
*/

export default Card