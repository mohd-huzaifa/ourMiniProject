import React from 'react'
import {useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddProduct } from './actions/AddCart'
import {data} from './data';
import {orderProduct} from './actions/PaymentAction'


function Detail() {
  

 const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const actualPath = path.slice(1);
  
  const responseData = data[actualPath-1];
  
  return (
    <>
      <div className="container-fluid " id='item' key={responseData.id}>

        <div className="row">
          <div className="col-5  imgBox">
            <img height="300px" width="400px" className='mt-3 detailImage ' src={responseData.image} alt={responseData.title} /></div>
          <div className="col-7 justify-content-center ">

            <div className="detail container ">
              <h4 className='text-primary categoryText'><span>CATEGORY : </span>{responseData.category}</h4>
              <h6 className='text-danger'><span>Title : </span> {responseData.title}</h6>
              <p className='text-success DescText'> <span className='text-info'>Description :</span> {responseData.description}</p>
              <p className='text-success  '> <span >Reviews:</span> {responseData.rating.count}</p>
              <p className='text-success '> <span >Rating:</span> {responseData.rating.rate}</p>
              <p className='fw-bolder price'><span>RS:</span>{responseData.price}</p>
            </div>


            <div className='cardDetail container text-center ' >
            <Link  to='/order'>  <button type="button" className="btn btn-outline-success  m-2" onClick={()=> dispatch(orderProduct(responseData))}>Buy Now</button></Link>
              <button type="button" onClick={() => dispatch(AddProduct(responseData))} className="btn btn-outline-success  m-2"> Add To Cart</button>
              
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Detail;
