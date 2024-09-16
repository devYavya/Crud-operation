import React from 'react';
import "./Preloader.css";
const Preloader = () => {

  useEffect(()=>
  {
    preLoaderAnim()
  },[]);

  return (
    <div className="preloader">
      <div className="spinner">
        <div className="bounce1">Create</div>
        <div className="bounce2">Read</div>
        <div className="bounce3">Update</div>
        <div className="bounce4">Delete</div>
      </div>
    </div>
  );
};

export default Preloader;