import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SkinTypeFind from './SkinTypeFind';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkinTypeFind/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<SkinTypeFind />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});