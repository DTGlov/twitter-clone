import React from 'react';
// import useUser from '../hooks/use-user'

const RightSideBar = () => {
  const trends = [
    {title:"Trending in Ghana",topic:"#Ronaldo",count:"82,312 Tweets",key:1},
    {title:"Trending in Ghana",topic:"AFCON",count:"200,993 Tweets",key:2},
    {title:"Trending in Ghana",topic:"Mahama",count:"232,123 Tweets",key:3},
    {title:"Trending in Ghana",topic:"#FREESHS",count:"123,121 Tweets",key:4},
    {title:"Trending in Ghana",topic:"#SARK",count:"124,121 Tweets",key:5},
  ]
//   const { user: { fullName, username,userId } } = useUser()
  
//  console.log("fullname,username,userId", fullName, username, userId);
    return (
      <div className="col-span-1  border-l border-gray-200 w-full hidden md:block">
        <div className="mx-auto w-10/12 bg-gray-50 mt-8 border rounded-lg">
          <div className="flex justify-between items-center p-4">
            <h1 className="font-bold text-2xl ">Trends for you</h1>
            <div className="hover:bg-blue-100 hover:border rounded-full p-2 cursor-pointer">
              <svg
                className="h-6 w-6 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          {trends.map((trend) => (
            <div
              key={trend.key}
              className="border-t border-gray-300 p-4 hover:bg-gray-200 cursor-pointer transition ease-in"
            >
              <div className="flex justify-between">
              <div >
                <h1 className="text-gray-500 text-sm">{trend.title}</h1>
                <h2 className="font-bold">{trend.topic}</h2>
                <p className="text-sm text-gray-500">{trend.count}</p>
              </div>
              <div>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default RightSideBar;