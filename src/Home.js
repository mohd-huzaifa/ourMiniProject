import React from 'react'
import Card from './component/Card'
import {data} from './data';

function Home() {


  return (
    
        <div className="container">
          <div className="row justify-content-between">
            <div className="container-fluid">
              <Card data={data}/>
            </div>
          </div>
        </div>
    )
  
}

export default Home