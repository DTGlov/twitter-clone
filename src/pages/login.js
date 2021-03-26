import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';


const Login = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' ||  emailAddress === '';

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push(ROUTES.DASHBOARD)
        } catch (error) {
            setEmailAddress('');
            setPassword('')
            setError(error.message)
        }
    }
    useEffect(() => {
        document.title = 'Login - Twitter'
    }, []);
    return (
      <div className="container flex flex-cols  mx-auto max-w-md h-screen">
        <div className="p-8">
          <div className="pt-2 pb-6">
            <img
              src="assets/twitter.svg"
              alt="twitter-svg"
              className="w-12 h-12"
            />
          </div>
          <h1 className="font-bold text-3xl w-full py-4">Log in to Twitter</h1>

          {error && <p className="text-xs mb-4 text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your Email Address"
              type="text"
              placeholder="Email"
              className="w-full text-gray-base text-sm py-5 px-4 h-16 border border-gray-primary rounded mb-4 placeholder-gray-700 
                        focus:outline-none focus:ring-2 ring-blue-400
                        "
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your Password"
              type="password"
              placeholder="Password"
              className="w-full text-gray-base text-sm py-5 px-4 h-16 border border-gray-primary rounded mb-8 placeholder-gray-700 focus:outline-none focus:ring-2 ring-blue-400"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              className={` bg-blue-400 font-bold rounded-full w-full p-4 text-white hover:bg-blue-500 transition ease-in ${
                isInvalid && "opacity-50"
              }`}
            >
              Log in
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <p className="text-blue-400 text-lg">
              Don't have an account?
              <Link to={ROUTES.SIGN_UP} className="text-blue-400 p-2 text-lg">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default Login;