//import { render, screen } from '@testing-library/react';
import StartApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';

it('without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StartApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
