import React from 'react';
import styled from 'styled-components';

const StyledDialog = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  color: #856404;
  font-weight: bold;
  margin : 10px;
  /* Add an exclamation icon before the message */
  &::before {
    content: "!";
    font-size: 1em;
    margin-right: 10px;
  }
`;


const ErrorMessage = ({ message }) => {
  return <StyledDialog>{message}</StyledDialog>;
};

export default ErrorMessage;
