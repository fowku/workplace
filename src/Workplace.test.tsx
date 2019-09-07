import React from 'react';
import ReactDOM from 'react-dom';
import Workplace from './Workplace';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Workplace />, div);
  ReactDOM.unmountComponentAtNode(div);
});
