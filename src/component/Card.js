import React  from 'react'
import {Link} from 'react-router-dom';


function Card(props) {
       const {data} = props;
 
    return (
        <div>
            {
           data.map((item) => {
          
                    return (
                              

                        <>
                
                            
                            <div key={item.id} className="card cardStyle float-start  " >
                             <Link to={'/'+item.id}> <img src={item.image} className="card-img-top" height="200px" alt="items" /></Link>
                             <div className="card-body fw-bolder">
                                <p className="card-text p-0">Title: {item.title.slice(1,40)}</p>
                                <p className="card-text p-0">RS: {item.price}</p>
                                <p className="card-text p-0">Category: {item.category}</p>
                            </div>
                           </div>
                        </>
                       
                    )

                })
            }
        </div>
    )
}

export default Card
