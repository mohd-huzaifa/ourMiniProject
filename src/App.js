
import './App.css';
import Navbar from './component/Navbar';
import {Routes , Route} from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import Login from './Login';
import SignUp from "./SignUp"
import NewProduct from "./NewProduct"
import Detail from './Detail';
import Home from './Home';
import Order from './component/Order';
import Payment from './Payment';
import StripePayment from './StripePayment';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product' element={<NewProduct />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cart/*' element={<Cart />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/:id' element={<Detail /> } />
        <Route exact path='/order' element={<Order /> } />
        <Route exact path='/payment' element={<Payment/>}/>
        <Route exact path='/stripePayment' element={<StripePayment/>}/>
      </Routes>
      
      
    

    </>
  );
}

export default App;
