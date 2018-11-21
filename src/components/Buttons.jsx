import React from 'react';

const Buttons = (props) => {
  console.log(props)
  return (
    <div className="Buttons">
      <button onClick={props.orange}>+</button>
      <button onClick={props.donut}>-</button>
    </div>
  )
}


export default Buttons;