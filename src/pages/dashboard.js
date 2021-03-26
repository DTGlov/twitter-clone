import React, { useState,useEffect } from 'react'
import LeftSideBar from '../components/LeftSidebar';
import RightSideBar from '../components/RightSidebar';
import Timeline from '../components/timeline';


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

 useEffect(() => {
   document.title = "Home / Twitter";
 }, []);
    return (
      <div className="grid  md:grid-cols-4">
        <LeftSideBar isOpen={isOpen} toggle={ toggle}/>
        <Timeline toggle={toggle} isOpen={ isOpen}/>
        <RightSideBar/>
      </div>
    );
}
  
export default Dashboard;