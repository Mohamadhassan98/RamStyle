import React from 'react';
import box from '../assets/box1.svg';
import {strings} from "../values/strings";
import styled, { keyframes } from 'styled-components';
class Err500 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }



    render() {
        const  container= {
            width:"100%",
            height:"500px",
            //backgroundColor:"red",
            display:"flex",
            flexDirection:"row",
            padding:".4%",
            alignSelf:"center",
            justifyContent:"center",
            alignItems:"center",
            alignContent:"center",
            position:"relative",

        }
        const img={
            width: "300px",
            height:"300px",
            position: "relative",
            alignSelf: "flex-end",
            //border:"3px solid black",
        }
        const anim1= keyframes`
              0% { top: 300px; font-size:15px }
               100% { top: 110px; font-size:40px}`;

        const anim2= keyframes`
              0% {  opacity: 0.01; }
               100% {  opacity: 1;}`;



        const Error= styled.div`
  p {
   text-align:center;
  font-weight:bold;
  
  
  }
  position: absolute;
  align-self:center;
  font-size:40px;
  animation: ${anim1};
  animation-duration: 1s;
  top: 110px;
 
`;
        const Message=styled.div`
  p {
   text-align:center;
  font-weight:bold;
  
  
  }
  position: absolute;
  align-self:center;
  font-size:40px;
  animation: ${anim2};
  animation-duration: 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  top: 470px;
  opacity: 0;
 
`;

        return (
            <div style={container}>
                <img style={img} src={box}/>
                <Error>
                    <p>
                        {strings.Error500}
                    </p>
                </Error>
                <Message>
                    <p>{strings.Message500}</p>
                </Message>

            </div>

        );
    }


}

export default Err500;