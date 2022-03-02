import React from 'react';
import './form.scss';
import { useState } from 'react';


function Form({onSubmit}) {

  let [form, setForm] = useState({})
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'http://test.com',
    };
    onSubmit(formData)
  }

  return (
          <>
            <form onSubmit={handleSubmit}>
              <label >
                <span>URL: </span>
                <input name='url' type='text' />
                <button type="submit" data-test-id="get-btn">GO!</button>
              </label>
              <label className="methods">
                <span id="get">GET</span>
                <span id="post">POST</span>
                <span id="put">PUT</span>
                <span id="delete">DELETE</span>
              </label>
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
