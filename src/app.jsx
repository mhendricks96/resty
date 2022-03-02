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
  let [loading, setLoading] = useState(false)

  
  useEffect(() => {
    let fetchData = async () => {
      let result = await axios(requestParams);
      // console.log(result);
      const data = {
        header: result.headers,
        data: result.data
      };
      setLoading(false);
      setData(data);
    }
    if (requestParams && requestParams.method){
      fetchData();
    }
  }, [requestParams])
  
  
  async function callApi(requestParams) {
    setLoading(true);
    setRequestParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
