import React, { useState,useContext } from 'react';
import FirebaseContext from "../context/firebase";
import useUser from "../hooks/use-user";
import Tweets from './tweets';


const Timeline = ({toggle,isOpen}) => {
  const [post, setPost] = useState('');
 const {
   user: { fullName, username },
  } = useUser();

  const { firebase } = useContext(FirebaseContext);

  // const getData = async() => {
  //   const result = await firebase.firestore().collection('posts').get();
  //   const posts = result.docs.map((post) => ({
  //     ...post.data()
  //   }))
  //   console.log(posts)
  // }
  // getData()

    
  const isInvalid = post === "" || post.length > 240;
    
    const handleTweet =async (e) => {
      e.preventDefault();
      try {
        await firebase.firestore().collection("posts").add({
          post: post,
          username: username.toLowerCase(),
          fullName,
          dateCreated: Date.now(),
          id:Math.random()
        });
      } catch (error) {
        alert(error.message)
      }
        
 setPost("");
  }
 
    
  return (
      <div className={isOpen ? "hidden" : "col-span-2 w-full border-l"}>
        <div className="px-8 py-4">
          <div className="top-0">
            <div className="flex justify-between items-center bg-white">
              <h1 className="font-bold text-xl hidden sm:block ">Home</h1>
              <svg
                onClick={toggle}
                className="h-7 w-7 text-blue-300 sm:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <div className="p-2 hover:bg-blue-100 rounded-full">
                <svg
                  className="h-7 w-7 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="px-8 py-2 w-full">
          <div className="flex">
            {/* <img
              src="/assets/avatars/dave.JPG"
              className="rounded-full h-8 w-8 object-cover mb-2"
              alt={`${username}`}
            /> */}
            <div className="mr-4">
              <img
                src="/assets/black-twit.png"
                className="rounded-full h-10 w-10 object-cover"
                alt={`${username}`}
              />
            </div>
            <div className="w-full">
              <form action="POST" onSubmit={handleTweet}>
                <input
                  className="w-full focus:outline-none text-xl"
                  type="text"
                  placeholder="What's Happening?"
                  onChange={({ target }) => setPost(target.value)}
                  value={post}
                />
                <div className="mt-6 flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="p-2 hover:bg-blue-100 rounded-full">
                      <svg
                        className="h-7 w-7 text-blue-400 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="p-2 hover:bg-blue-100 rounded-full">
                      <svg
                        className="h-7 w-7 text-blue-400"
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
                    </div>
                    <div className="p-2 hover:bg-blue-100 rounded-full">
                      <svg
                        className="h-7 w-7 text-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="p-2 hover:bg-blue-100 rounded-full">
                      <svg
                        className="h-7 w-7 text-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex">
                    <button
                      disabled={isInvalid}
                      className={` bg-blue-400 font-bold rounded-full w-full px-4 py-2  text-white hover:bg-blue-400  transition ease-in ${
                        isInvalid && "opacity-50"
                      }`}
                    >
                      Tweet
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <Tweets />
      </div>
    );
}
 
export default Timeline; 