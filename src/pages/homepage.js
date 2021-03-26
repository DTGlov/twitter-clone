import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const HomePage = () => {
    return (
      <div className="container flex max-w-full  h-screen">
        <div className="w-6/12">
          <img
            src="assets/twitter-bg.png"
            className="h-full object-cover"
            alt="twitter background"
          />
        </div>
        <div className=" w-6/12 flex flex-col p-8 justify-center">
          <div className="w-full">
            <div className="py-8">
              {/* <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/pixel-perfect"
                  title="Pixel perfect"
                >
                  Pixel perfect
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div> */}
              <img src="assets/twitter.svg" alt="" className="w-12 h-12" />
            </div>
            <h1 className="text-7xl font-bold py-8">Happening Now</h1>
            <h3 className="font-bold text-3xl py-4">Join Twitter today.</h3>
            <div className="flex flex-col w-6/12 space-y-4">
              <Link
                to={ROUTES.SIGN_UP}
                className="bg-blue-500 p-4 text-white text-center rounded-full font-bold hover:bg-blue-600 transition ease-in"
              >
                Sign up
              </Link>
              <Link
                to={ROUTES.LOGIN}
                className="bg-white border border-blue-400 text-center rounded-full p-4 text-blue-400 font-bold hover:bg-blue-100 transition ease-in"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default HomePage;