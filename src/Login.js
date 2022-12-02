import React from 'react';

import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react';


function Login() {
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleEmail(event) {
        setEmail(event.target.value);

    }


    function navigateToHome() {
        navigate('/');
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:8080/login?email=${email}&password=${password}`)
        const res = await response.json();

        if (res.status === 'ok') {
            navigateToHome();
        } else if (res.status === 'no') {
            navigate('/signup');
        }

    }



    return (
        <>


            <div className="container m-auto userLogo   text-center py-1 "></div>
            <div className=" container m-auto  orderHeading  py-1 text-primary text-center"><h3>Please Login</h3></div>
            <form method='GET' onSubmit={handleSubmit}>
                <div className="container login  align-middle w-25 h-25 ">

                    <div className="loginPage border">
                        <div className="row justify-content-around">
                            <div className="m-3 col-10">
                                <i className="fa-solid fa-envelope icon mx-2"></i>
                                <input type="email" name="email" onChange={handleEmail} className="form-control" autoFocus="on" autoComplete='off' placeholder="User email" />
                            </div>
                        </div>
                        <div></div>
                        <div className="row justify-content-around">
                            <div className="m-3 col-10">
                                <i className="fa-solid fa-key icon mx-2"></i>
                                <input type="password" onChange={handlePassword} name="password" className="form-control" placeholder=" User password" />
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="m-3 col-10">
                                <input type="submit" class="form-control" value="Login" />
                            </div>
                            <div className="col-10 text-muted">If don't have account?? please create</div>
                            <div className="m-3 col-10">
                              
                                 <Link to='/signup'>
                                    <button className='btn w-100 btn-outline-success p-1'>Create Account</button>
                                </Link>
                               
                            </div>
                        </div>
                    </div>



                </div>


            </form>




        </>
    )
}

export default Login
