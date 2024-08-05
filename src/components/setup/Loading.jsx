import React from 'react'
import loading from './spinning.gif';

const Loading = () => {
  return (
    <div>
        <img src={loading} style={{display: 'block', width: '100px', margin: '50px auto'}} alt="Loading..." />
    </div>
  );
};

export default Loading;

