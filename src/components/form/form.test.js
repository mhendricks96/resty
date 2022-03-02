import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index.js';

describe('testing the form component', () => {
  if('should execute callback onSubmit', () => {
    let callback = jest.fn();
    render(<Form onSubmit={callback} />)
    // const {queryByTestId} = render( <Form handleApiCall={callback} />);

    //inputs
    // let urlForm = queryByTestId('test-form');
    // let submit = screen.getByTestId('button');
    // let postButton = screen.getByTestId('post-form');
    // fireEvent.click(postButton);
    let urlInput = screen.getByTestId('url-input');
    let methodBtn = screen.getByTestId('get-btn');
    let submitBtn = screen.getByTestId('submit-btn')
    
    fireEvent.change(urlInput, {target: {value:'http://test.com'}});
    fireEvent.click(methodBtn);
    fireEvent.click(submitBtn);
    
    expect(callback).toHaveBeenCalledWith({url:'http://test.com', method: 'GET'});
  });
});
