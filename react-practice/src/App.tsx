import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const fetchAPIData = (pageNumber: number) => {
    // return axios.get('https://dog.ceo/api/breeds/image/random')
    return axios
      .get(`https://randomuser.me/api?page=${pageNumber}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err);
      })
};

const getFullUserName = (userInfo: any) => {
    const {name: {first, last}} = userInfo;
    return `${first} ${last}`;
}

export default function App () {
  const [ counter, setCounter ] = useState(0);
  const [ nextPageNumber, setNextPageNumber ] = useState(1);
  const [ userInfos, setUserInfos] = useState<any>([]);
  const [ randomUserDataJSON, setRandomUserDataJSON] = useState('');

  useEffect(() => {
      fetchAPIData(nextPageNumber).then(randomData => {
        setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No data found');
        setUserInfos(randomData.results);
        setNextPageNumber(randomData.info.page + 1);
       })
  }, []);


  return (
    <div className="App">
      <header className="App-header">
          <h2> {counter} </h2>

          <button onClick={ () => {
          setCounter(counter + 1);
          }}> Add 1 </button>
          <br></br>
          <button onClick={ () => {
          setCounter(0);
          }}> Reset </button>
          <br></br>
          <button onClick={ () => {
          fetchAPIData(nextPageNumber + 1);
          }}> Fetch Next User </button>
          <br></br>
          {
          userInfos.map((userInfo: any, idx: number) => (
              <div key={idx}>
                  <p>{getFullUserName(userInfo)}</p>
                  <img src={userInfo.picture.large} alt=''></img>
              </div>
            ))
          }



      </header>
    </div>
  );
}
