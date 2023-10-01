import React from 'react'
import './Login.css';

const Login = () => {
    return (
        <>
            <div className=' main-container'>
                <div className='kiran'>
                    <div>
                        <h2 className='work-1'>Kiran</h2>
                    </div>
                    <div>
                        <h2 className='work'>Work Space</h2>
                    </div>
                </div>

                <div>
                    <h3 className='login'>LOGIN</h3>
                </div>
                <div class="mb-3">
                    <input type="email" className="form-control"  placeholder="Email" />
                </div>
                <div class="mb-3" className='sunny'>
                  <input type="password" className="form-control"  placeholder="Password" />
                </div>
          
                <button type="button" class="btn btn-primary">LOGIN</button>
                <div className='moon'>
             <a href='#!' className='forgot-password'>Forgot Password?</a>
             </div>
                <div className='parent-div'>
                    <div>
                        <h7 className='member'>New Member ?</h7>
                    </div>
                    <div>
                        <a href='/' className='sign-in'>Sign In</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;   
