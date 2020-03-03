import React from 'react';
import './App.css'; 
import {connect} from 'react-redux'

function App(props) { 
  return (
    <div className="App"> 
      <h1>Your name is {props.myName}</h1>
      <button onClick={()=>{props.nameChange('Veer')}} >Change Name</button>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    myName:state.name
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    nameChange:(name)=>{dispatch({type:'HandleChange',payload:name})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
