import React from 'react';
import './styles/styles.scss';

function App() {
  return (
    <div className='home-container'>      
      <div className='terminal'>
        <div className='dots'>
          <div className='dot dot__turquoise'></div>
          <div className='dot dot__red'></div>
          <div className='dot dot__green'></div>
        </div>
        <div className='text-box'>
          <h1 className='header-primary'>
            <p className='header-primary-main'>Develoop</p>
            <p className='header-primary-sub'>Coding challenges platform</p>
          </h1>
          <a href='#' className='btn btn-white'>Create challenge</a>
        </div>
        <a href='#' className='btn-header'>Explore</a>
      </div>
    </div>
  );
}

export default App;
