import styled from 'styled-components'
import {
    ThermometerHalf,
    ExclamationTriangle,
  } from "@styled-icons/bootstrap";

export const WarningSign = styled(ExclamationTriangle)`
  color: red;
  width: 25px;
  height: 25px;

  ${(props) =>
    props.isHealthy == true && {
      color: "green",
    }}
`;


export const BlackTherm = styled(ThermometerHalf)`
  color: black;
  width: 25px;
  height: 25px;
`;

export const StyledDiv = styled.div`
  min-width: 50%;
  min-height: 100%;
`;

export const SubDiv = styled.div`
  width: 100;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const SubSubDiv = styled.div`
  width: 90px;
  height: 100%;
  display: felx;
  align-items: center;
  justify-content: start;
  ${(props) =>
    props.isLastItem == true && {
      justifyContent: "end",
    }}
`;