import React from 'react';
import ReactJson from 'react-json-view';

function Results(props) {
  return (
    <section>
      <div>'hi'</div>
      {
        props.loading ? 'Thank you for waiting. Your Data is loading' : props.data ? <ReactJson src={props.data} />: <div>'hi'</div>

      }
      {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
    </section>
  );
}

export default Results;
