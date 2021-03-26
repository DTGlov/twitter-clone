import {useContext} from 'react';
import FirebaseContext from '../context/firebase';
import { Link } from 'react-router-dom';
// import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';
import useUser from '../hooks/use-user'


const LeftSideBar = ({isOpen,toggle}) => {
    const { firebase } = useContext(FirebaseContext)
  // const { user } = useContext(UserContext)
    const {
      user: { fullName, username },
    } = useUser();
    
 
    // console.log('user',user)
    return (
      // <div className="col-span-1 hidden sm:block w-16 border-gray-200 h-screen md:w-full">
      // <div className="w-full bg-gray-100">
      <div
        className={
          isOpen ? " border-gray-200 h-screen w-full " : "hidden md:block"
        }
      >
        <div className="flex flex-col justify-center mx-auto w-10/12 ">
          <ul className="">
            <li key='1'  className="list-none px-4 py-6 flex justify-between">
              <img
                src="assets/twitter.svg"
                alt="twitter-logo"
                className="h-6 w-6 md:h-8 md:w-8"
              />
              <div className="sm:hidden" onClick={toggle}>
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </li>

            <li key='2' className="list-none py-4">
              <Link
                to="#"
                className="px-4 flex p-2 hover:bg-blue-100   hover:border rounded-full hover:text-blue-400 "
              >
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="font-bold text-md md:text-2xl">Home</span>
              </Link>
            </li>
            <li key='3' className="list-none py-4">
              <Link
                to="#"
                //to={`/p/${user.displayName}`}
                className="px-4 flex p-2 hover:bg-blue-100   hover:border rounded-full hover:text-blue-400 "
              >
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-bold text-md md:text-2xl  ">Profile</span>
              </Link>
            </li>
            <li key='4' className="list-none py-4">
              <Link
                to="#"
                className="px-4 flex p-2 hover:bg-blue-100   hover:border rounded-full hover:text-blue-400 "
              >
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                <span className="font-bold text-md md:text-2xl ">Explore</span>
              </Link>
            </li>
            <li key='5' className="list-none py-4">
              <Link
                to="#"
                className="px-4 flex p-2 hover:bg-blue-100   hover:border rounded-full hover:text-blue-400 "
              >
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="font-bold text-md md:text-2xl ">
                  Notifications
                </span>
              </Link>
            </li>
            <li key='6' className="list-none py-4">
              <Link
                to="#"
                className="px-4 flex p-2 hover:bg-blue-100   hover:border rounded-full hover:text-blue-400  "
              >
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <span className="font-bold text-md md:text-2xl ">Messages</span>
              </Link>
            </li>
            <li key='7' className="list-none py-6">
              <Link to={ROUTES.LOGIN}>
                <button
                  className="px-4 flex p-2 hover:bg-blue-100   hover:border rounded-full hover:text-blue-400 "
                  onClick={() => firebase.auth().signOut()}
                >
                  <svg
                    className="h-6 w-6 md:h-8 md:w-8 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="font-bold text-md md:text-2xl">Log out</span>
                </button>
              </Link>
            </li>
            <li key='8' className="list-none py-4 ml-4">
              <div className="flex items-center">
                <div className="mr-2">
                  <img
                    src="/assets/black-twit.png"
                    className="rounded-full h-8 w-8 object-cover"
                    alt={`${username}`}
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="font-bold text-sm">{fullName}</h1>
                  <span className="text-gray-500 font-bold">@{username}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      // </div>
    );
}
 
export default LeftSideBar;