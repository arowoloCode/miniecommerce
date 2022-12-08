import React from 'react'
import classes from "../Component/Productdetails.module.css"

function Productdetails(props) {
            
       const colorOptions = props.data.colorOptions.map((item,pos)=>{
         const classArr = [classes.productImage]
         if(pos === props.currentPreviewImagePos){
           classArr.push(classes.selectedImage)
         }
              return(
                <img key={pos} className={classArr.join(" ")} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
            )
       })

       const btn = props.data.featureList.map((item,pos)=>{
         const btnArr = [classes.btn]
         if(pos == !props.showHeartBeat){
               btnArr.push(classes.selectedBtn)
         }
            return (
              <button onClick={() =>props.onFeatureItemClick(pos)} key={pos} className={btnArr.join(" ")}>{item}</button>
            )
       })

  return (
    <section className={classes.detailsContainer}>
    <h1 className={classes.title}> {props.data.title} </h1>
    <p className={classes.description}>{props.data.description}</p>
   <h2 className={classes.sectionHeading}>select color</h2>
   <div className={classes.imageWrapper}>
     {colorOptions}
   </div>
   <h2 className={classes.sectionHeading}>Features</h2>
   <div>
        {btn}
    </div>
   <div>
     <button className={classes.buyBtn}>Buy Now</button>
   </div>

    </section>
  )
}

export default Productdetails