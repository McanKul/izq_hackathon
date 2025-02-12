import React, { useContext } from 'react';
import './temel/temel.css';
import { GlobalContext } from '../context/GlobalState';
import {Link} from 'react-router-dom';
function Results() {
   const { result } = useContext(GlobalContext);
   console.log(result)


   if(result!=null){
      const htmlMetin = result.result.split("\n").map((satir, index) => (
         <React.Fragment key={index}>
           {satir}
           <br />
         </React.Fragment>
       ));
  return (
   
    <div className='temel_results'>
      <div className='result_baslik'>
        <h2>SONUÇLAR</h2>
        <hr></hr>
        <p>% {(100*(result.confidence-0)).toFixed(2)} ihtimalle {result.class}</p>
      </div>
      <div className='res'>
        <div className=''>
        <p>{htmlMetin}</p>
        </div>
      </div>
      <div className="buttons">
         <Link to='/waste'><button>Atık bildir</button></Link>
         <Link to='/cure'><button>İlaç temin et</button></Link>
      </div>
      <div className=''>
        
      </div>
    </div>
  );
 }else{
   alert("en son sonuç bulunamadı")
 }  
}

export default Results;
