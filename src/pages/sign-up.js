import React, { useState, useEffect,useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import {doesUsernameExist} from '../services/firebase'
 


const SignUp = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)
    
    const [username, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password,setPassword] = useState('')
    
    const [error, setError] = useState('');
    const isInvalid = password === "" || emailAddress === ""

    const handleSignup = async (e) => {
    e.preventDefault()

      const usernameExists = await doesUsernameExist(username)
      if (!usernameExists.length) {
        try {
          const createdUserResult = await firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
          //authentication
          //-->emailAddress & password & username(displayName)
          await createdUserResult.user.updateProfile({
            displayName: username
          });
          //firebase user collection (create a document)
          await firebase.firestore().collection('users').add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: [], //stick your userID in if you want people to follow you automatically 
            dateCreated:Date.now()
          })
          history.push(ROUTES.DASHBOARD);
        } catch (error) {
          setFullName('');
          setPassword('');
          setEmailAddress('');
          setError(error.message)
        } 
      } else {
     
        setError('That username is already taken,please try another');
      }
    }
    
    useEffect(() => {
        document.title = "Signup - Twitter";
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
          <h1 className="font-bold text-3xl w-full py-4">Create an Account</h1>

          {error && <p className="text-xs mb-4 text-red-primary">{error}</p>}

          <form onSubmit={handleSignup} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="w-full text-gray-base text-sm py-5 px-4 h-16 border border-gray-primary rounded mb-4 placeholder-gray-700 
                        focus:outline-none focus:ring-2 ring-blue-400
                        "
              onChange={({ target }) => setUserName(target.value)}
              value={username}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full Name"
              className="w-full text-gray-base text-sm py-5 px-4 h-16 border border-gray-primary rounded mb-4 placeholder-gray-700 
                        focus:outline-none focus:ring-2 ring-blue-400
                        "
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
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
              Sign up
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <p className="text-blue-400 text-lg">
              Already have an account?
              <Link to={ROUTES.LOGIN} className="text-blue-400 p-2 text-lg">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default SignUp;