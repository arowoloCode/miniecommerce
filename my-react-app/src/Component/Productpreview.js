import React from 'react'
import classes from "../Component/Productpreview.module.css"

function Productpreview(props) {
 const currentHour = new Date().getHours() > 9 ? new Date().getHours() : `0${new Date().getHours()}` 
 const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes(): `0${new Date().getMinutes()}` 

  return (
    <section className={classes.previewContainer}> 
   
    <div className={classes.preview}>
        <img src={props.currentPreviewImage} alt='Black-strap' />
    </div>
        {props.showHeartBeat?<div className={classes.featureData}>
        <p>{currentHour}:{currentMinute}</p>
    </div>: <div className={classes.heartBeat}>
            <i className="fa-solid fa-heart-pulse"></i>
           <p>78</p>
      </div>}
   
    </section>
  )
}

export default Productpreview