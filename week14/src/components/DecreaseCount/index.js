import React from 'react';

function DecreaseCount(props) {
  return (
    <div>
      <button onClick={() => {props.dispatch({"type": "decrement"}) }}>Reduce Speed</button>
    </div>
  );
}

export default DecreaseCount;