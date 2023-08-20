import React, { useEffect, useState } from 'react'
import "../App.css"
import Row from "./Row"
import {BsPlay} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
// import axios from 'axios';
// import api from './api';

// import axios from 'axios';

// const api = axios.create({
//   baseURL: "http://localhost:3000/"
// });

// const api = axios.create(
//    {
//            baseURL: "http://localhost:3000/",
//            withCredentials: false,
//            headers: {
//              'Access-Control-Allow-Origin' : '*',
//              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
//          }
//      })




const apiKey = "d9113afa736c1899c54107d9ae64c969";
const url = "https://api.themoviedb.org/3/movie/";
const imageUrl = "https://image.tmdb.org/t/p/original";

// const headers = {
//    "Content-Type": "application/json",
//    Authorization: apiKey,
//  };
// //  const url = "http://localhost:5000/api/expenses/get-expenses";

//  axios.get(url, { headers });



// https://api.themoviedb.org/3/movie/top_rated?api_key=d9113afa736c1899c54107d9ae64c969

const Home = () => {

    const [upcomingMovies, setupcomingMovies] = useState([]);
    const [popularMovies, setpopularMovies] = useState([]);
    const [topratedMovies, settopratedMovies] = useState([]);
    const [nowplayingMovies, setnowplayingMovies] = useState([]);

    useEffect(()=>{

//       reqAccountAndTransactions = () => {
//     const accountInfoReq = fetch(`http://localhost:3000/api/account/${accountId}`).then(res => res.json())

//     accountInfoReq.then(accountInfo => {
//         // We can now store account info state on this component
//         return fetch(`http://localhost:3000/api/transaction/${accountInfo.transactionBatchId}`)
//     })
//     .then(res => res.json())
//     .then(transactions => {
//         // Here we can use our transaction data
//     })
//     .catch(reqErr => console.error(reqErr))
// }

         // const fetchupcoming = async()=>{
         //    const {data : {results}} = await axios.get(`${url}upcoming?api_key=${apiKey}`);
         //    setupcomingMovies(results);
         // }
         const fetchupcoming = ()=>{
            const response =  fetch(`${url}upcoming?api_key=${apiKey}&page=5`)
                               response.then((response) => response.json())
                               .then(response => {
                                 // const res = response;
                                 const {results} = response;
                                 setupcomingMovies(results);
                               })
                               .catch(err => console.log(err));
                                       
            
         }

          const fetchpopular = ()=>{
            const response =  fetch(`${url}popular?api_key=${apiKey}&page=3`)
                               response.then((response) => response.json())
                               .then(response => {
                                 // const res = data;
                                 const {results} = response;
                                 setpopularMovies(results);
                               })
                               .catch(err => console.log(err));
                              
                              
               }           
               fetchpopular();
               
                const fetchtoprated = ()=>{
            const response =  fetch(`${url}top_rated?api_key=${apiKey}`)
                               response.then((response) => response.json())
                               .then(response => {
                                 // const res = data;
                                 const {results} = response;
                                 settopratedMovies(results);
                               })
                               .catch(err => console.log(err));

                              }

                         fetchtoprated();
                         
                          const fetchunowplaying = ()=>{
            const response =  fetch(`${url}now_playing?api_key=${apiKey}`)
                               response.then((response) => response.json())
                               .then((response) => {
                                 // const res = data;
                                 const {results} = response;
                                 setnowplayingMovies(results);
                               })
                               .catch(err => console.log(err));


                  }
                  fetchunowplaying();

         //  const fetchpopular = async()=>{
         //    const response =  await fetch(`${url}popular?api_key=${apiKey}`)
         //    const res = await response.json(); 
         //    // console.log(res);
         //    const {results} = res;
         //    // console.log(results);



         //    // const {data : {results}} = res;
         //    // console.log(results);
                                       
         //    setpopularMovies(results);
         // }
         // fetchpopular();

         //  const fetchunowplaying = async()=>{
         //    const response =  await fetch(`${url}now_playing?api_key=${apiKey}`)
         //    const res = await response.json(); 
         //    // console.log(res);
         //    const {results} = res;
         //    // console.log(results);



         //    // const {data : {results}} = res;
         //    // console.log(results);
                                       
         //    setnowplayingMovies(results);
         // }
         // fetchunowplaying();

         //  const fetchtoprated = async()=>{
         //    const response =  await fetch(`${url}top_rated?api_key=${apiKey}`)
         //    const res = await response.json(); 
         //    // console.log(res);
         //    const {results} = res;
         //    // console.log(results);



         //    // const {data : {results}} = res;
         //    // console.log(results);
                                       
         //    settopratedMovies(results);
         // }
         // fetchtoprated();
 
         // const fetchupopular = async()=>{
         //     const {data : {results}} = await axios.get(`${url}popular?api_key=${apiKey}`);
         //     setpopularMovies(results);
         //  }
         //  fetchupopular();

         //    const fetchpopular = async()=>{
         //    const response =  await fetch(`${url}popular?api_key=${apiKey}`)
         //    const res = response.json(); 
         //    const {data : {results}} = res;
                                       
         //    setpopularMovies(results);
         // }
         // fetchpopular();
          
         
         // // const fetchunowplaying = async()=>{
         // //     const {data : {results}} = await axios.get(`${url}now_playing?api_key=${apiKey}`);
         // //     setnowplayingMovies(results);
         // //  }
         // //  fetchunowplaying();

         //    const fetchunowplaying = async()=>{
         //    const response =  await fetch(`${url}now_playing?api_key=${apiKey}`)
         //    const res = response.json(); 
         //    const {data : {results}} = res;
                                       
         //    setnowplayingMovies(results);
         // }
         // fetchunowplaying();
 
         // // const fetchutoprated = async()=>{
         // //     const {data : {results}} = await axios.get(`${url}top_rated?api_key=${apiKey}`);
         // //     settopratedMovies(results);
         // //  }
         // //  fetchutoprated();

         //    const fetchtoprated = async()=>{
         //    const response =  await fetch(`${url}top_rated?api_key=${apiKey}`)
         //    const res = response.json(); 
         //    const {data : {results}} = res;
                                       
         //    settopratedMovies(results);
         // }
         // fetchtoprated();
 
          // https://api.themoviedb.org/3/genre/movie/list?api_key=d9113afa736c1899c54107d9ae64c969
          // const url2 = "https://api.themoviedb.org/3/genre/movie/list?api_key=d9113afa736c1899c54107d9ae64c969";
          // https://api.themoviedb.org/3/movie/";
         fetchupcoming();
         

    })
  return (
    <section className='home'>
       <div className="banner" 
       style={{

        backgroundImage: popularMovies[0]
                        ? `url(${`${imageUrl}/${popularMovies[4].poster_path}`})`
                        : "rgb(16, 16, 16)",
       }}
       
       >
        {

        popularMovies[4] && (

        <h1>{popularMovies[4].original_title}</h1>
        )

        
        }

        {
          popularMovies[4] && (

            <p>{popularMovies[4].overview}</p>
            )
        }
        <div>
        <button>Play <BsPlay/></button>
        <button>My List <AiOutlinePlus/></button>
        </div>
         
       </div>

        <Row title="UpComing Movies" arr={upcomingMovies}/>  
      <Row title="Popular Movies" arr= {popularMovies} />  
       <Row title="Now Playing" arr= {nowplayingMovies}/>  
        <Row title="Top Rated" arr={topratedMovies}/>  

      
    </section>
  )
}

export default Home
