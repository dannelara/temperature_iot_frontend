import React from "react";

import {WarningSign, BlackTherm, StyledDiv, SubDiv,SubSubDiv } from "./StyledSIngleItem.js"


export default function SingleItem({ data }) {

  // In case I want to save more data in the futre, I want the latest object at all times.
  const lastObject = data[data.length - 1];
  
  return (
    <StyledDiv>
      <SubDiv>
        <h1>Latest: </h1>
      </SubDiv>
      {
        <>
         
          <SubDiv>
            <BlackTherm></BlackTherm>
            <SubSubDiv>
              <span>Temperature:</span>
            </SubSubDiv>
            <SubSubDiv>
              <span style={{ fontWeight: "bold" }}>
                {lastObject.temperature} 
              </span>
              <p>&#8451;</p>
            </SubSubDiv>
          </SubDiv>
          <SubDiv>
            <WarningSign isHealthy={lastObject.warning ? false : true}></WarningSign>
            <SubSubDiv>
              <span>Warning:</span>
            </SubSubDiv>
            <SubSubDiv>
              <span style={{ fontWeight: "bold" }}>
                {lastObject.warning} 
              </span>
            
            </SubSubDiv>
          </SubDiv>
        </>
      }
    </StyledDiv>
  );
}
