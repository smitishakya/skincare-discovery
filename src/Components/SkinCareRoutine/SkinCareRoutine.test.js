import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SkinCareRoutine from './SkinCareRoutine';

it('renders without crashing', () => {
  const main = document.createElement('main');
  const props= {
    match: {
        params: {
            skintype: "combination",

        }
    },
    products: []
  }
  ReactDOM.render(<SkinCareRoutine {...props} />, main);
  ReactDOM.unmountComponentAtNode(main);
});


it('renders the UI as expected', () => {
    const props= {
        match: {
            params: {
                skintype: "combination",
    
            }
        },
        products: []
      }
    const tree = renderer
      .create(<SkinCareRoutine  {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});

    

