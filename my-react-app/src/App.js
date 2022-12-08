import classes from './App.module.css';
import Topbar from './Component/Topbar';
import Productpreview from './Component/Productpreview';
import Productdetails from './Component/Productdetails';
import React,{ Component } from 'react';
import ProductData from './Component/ProductData';

class App extends Component{
  state ={
    productData:ProductData,
    showHeartBeat:true,
    currentPreviewImagePos:0
  }


  onColorOptionClick = (pos) =>{
        this.setState({currentPreviewImagePos:pos})
  }

 onFeatureItemClick = (pos) =>{
   let updatedState = true;
   if(pos === 1){
     updatedState = false
   }
   this.setState({showHeartBeat:updatedState})
 }
// this line of code helps avoid unnecessary re-renders
 shouldComponentUpdate(nextProps,nextState){
      if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos){
        return false;
      }

      return true
 }

  render(){
    console.log(this.state)
    return (
      <div className="App">
                  <Topbar />
           <div className={classes.mainContainer}>
                  <Productpreview currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeat ={this.state.showHeartBeat}/>  

                  <Productdetails data={this.state.productData} onColorOptionClick = {this.onColorOptionClick}  currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick ={this.onFeatureItemClick} showHeartBeat={this.state.showHeartBeat} />
           </div>
      </div>
    );
  }
 
}

export default App;
 