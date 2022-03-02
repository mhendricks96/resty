import React from 'react';
import './form.scss';
import { useState } from 'react';


function Form(props) {

  let [method, updateMethod] = useState('GET')


  function handleChange(event) {
    switch (event.target.id) {
      case 'get':
        updateMethod('GET');
        break;
    case 'post':
      updateMethod('POST');
      break;
    case 'delete':
      updateMethod('DELETE');
      break;
    case 'put':
      updateMethod('PUT');
      break;
    };
  }


  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      method:method,
      url: event.target.urlinput.value,
    };
    if (method === 'POST' || method === 'PUT') {
      formData.data = JSON.parse(event.target.reqbody.value);
      console.log(formData.data)
      props.handleApiCall(formData);
    }
  }

  return (
          <>
            <form onSubmit={handleSubmit}>
              <label >
                <span>URL: </span>
                <input name='url' id='urlinput' type='text' data-testid='url' />
                <button type="submit" data-testid="submit">GO!</button>
              </label>
              <label className="methods">
                <button id="get" data-testid='get' onClick={handleChange}>GET</button>
                <button id="post" data-testid='post' onClick={handleChange}>POST</button>
                <button id="put" data-testid='put' onClick={handleChange}>PUT</button>
                <button id="delete" data-testid='delete' onClick={handleChange}>DELETE</button>
              </label>
                {((method === 'POST' || method === 'PUT') && 
                  <label for="reqbody">BODY:
                    <input type="text" id="reqbody" name="reqbody" data-testid="reqbody" />
                  </label>
            )}
            </form>
          </>
        );
}


// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

export default Form;
