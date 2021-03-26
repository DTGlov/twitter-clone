import React, { useState,useContext } from 'react';
import FirebaseContext from '../context/firebase';
import { formatDistance} from "date-fns";

const Tweets = () => {
    const [posts, setPost] = useState([])
  const { firebase } = useContext(FirebaseContext);
  

    // useEffect(() => {
         const getData = async () => {
           const result = await firebase.firestore().collection("posts").get();
           const posts = result.docs.map((post) => ({
             ...post.data(),
           }));
           setPost(posts);
          
         };

         getData();
    // }, [firebase]);
     
    return (
      <div>
        {posts
          .sort((a, b) => b.dateCreated - a.dateCreated)
          .map((post) => (
            <div key={post.id}>
              <div className="py-2 pl-8 pr-8 hover:bg-gray-100 transition ease-linear">
                <div  className="flex items-center">
                  <h1 className="font-bold text-sm md:text-lg  mr-2">
                    {post.fullName}
                  </h1>
                  <p className="text-gray-500 text-sm md:text-lg  font-bold mr-2">
                    @{post.username}
                  </p>
                  &bull;
                  <p className="capitalize text-sm md:text-lg text-gray-500 ">
                    {formatDistance(post.dateCreated, new Date(), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
                <div className="mt-4">
                  <p className=" text-md md:text-lg ">{post.post}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="hover:bg-green-50  text-gray-500 hover:text-green-400 hover:border rounded-full p-2">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div className="hover:bg-red-50 text-gray-500 hover:text-red-400 hover:border rounded-full p-2">
                    <svg
                      className="h-6 w-6 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div className="hover:bg-green-50 text-gray-500 hover:text-green-400 hover:border rounded-full p-2">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </div>
                  <div className="hover:bg-green-50 text-gray-500 hover:text-green-400 hover:border rounded-full p-2">
                    <svg
                      className="h-6 w-6 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
    );
}
 
export default Tweets;