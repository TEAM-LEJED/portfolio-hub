import React from 'react';
import { Link } from 'react-router-dom'; 
import Toggle from 'react-toggled';

const ToggleSwitch = () => {
  return (
    <Toggle>
      {({ on, getTogglerProps }) => (
        <div>
          <Link to={on ? '/signup' : '/login'}>
            <button {...getTogglerProps()}>
              Switch to {on ? 'Log In' : 'Sign Up'}
            </button>
          </Link>
          <div>{on ? 'Sign Up Page' : 'Log In'}</div>
        </div>
      )}
    </Toggle>
  );
};

export default ToggleSwitch;
