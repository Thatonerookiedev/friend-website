import './signUp.css'

const SignUp = () => {
    return ( 
        
        <div id="login-constainer">
            <div id="login-grid">
                <div id="login-form-con">
                    {/* start */}
                    <div id="title-Login">
                        <h1 id="login">SignUp</h1>
                    </div>
                    <div id="login-content">
                        <form action="">
                            <div id='email-login' className='full-log'>
                                <h1 className='headdings-login'>Email</h1>
                            </div>
                            {/* nput down */}
                            <div id='email-input' className='full-log'>
                                <input className="input-login" name='email'></input>
                            </div>
                            <div id='password-login' className='full-log'>
                                <h1 className='headdings-login'>Password</h1>
                            </div>
                            {/* input down */}
                            <div id='password-input' className='full-log'>
                                <input type="text" className="input-login" name='password' />
                            </div>
                            <div id='button-submit-login' className='full-log'>
                                <button id='login-submit' type="submit">SignUp</button>
                            </div>
                            <div id='error-login' className='full-log'>

                            </div>
                        </form>
                    </div>
                    {/* end */}
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;