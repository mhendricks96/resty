import React from 'react';
import {useState, useEffect} from 'react'
import './app.scss';
import axios from 'axios';


import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App () {

  let [data, setData] = useState(null)
  let [requestParams, setRequestParams] = useState({})
  let [loading, updateLoading] = useState(false)

  
  useEffect(() => {
    let fetchData = async () => {
      let result = await axios(requestParams);
      // console.log(result);
      const data = {
        header: result.headers,
        data: result.data
      };
      updateLoading(false);
      setData(data);
    }
    if (requestParams && requestParams.method){
      fetchData();
    }
  }, [requestParams])
  
  
  async function callApi(requestParams) {
    updateLoading(true);
    setRequestParams(requestParams);
    updateLoading(false);
  }

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      {/* <div>'hi'</div> */}
      <Results data={data} loading={loading}/>
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
