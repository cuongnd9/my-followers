import React, { useState } from 'react';
import classNames from 'classnames';

function Header({ title }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const inputClassNames = classNames({
    'fa text-white': true,
    'fa-search': !isInputVisible,
    'fa-times': isInputVisible
  });

  return (
    <div
      className="d-flex w-100 p-4 justify-content-center align-items-center rounded"
      style={{
        backgroundImage: 'linear-gradient(to right, #5970ff, #d359ff)',
        height: '86px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
      }}
    >
      <div className="d-flex w-100 align-items-center">
        <i className="fa fa-home text-white" style={{fontSize: '20px'}} />
      </div>
      <h5 className="text-nowrap text-center text-white">
        {title}
      </h5>
      <div className="d-flex flex-row-reverse w-100 align-items-center">
        <i
          className={inputClassNames}
          onClick={() => setInputVisible(!isInputVisible)}
          style={{ cursor: 'pointer', fontSize: '20px' }}
        />
        {isInputVisible && (
          <input
            type="text"
            className="form-control w-75 mr-3"
            style={{ transition: '250ms all ease-in-out' }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
