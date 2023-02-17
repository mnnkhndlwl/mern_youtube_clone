import React from 'react';
import styled from 'styled-components';

const StyledDialog = styled.div`
  background-color: #fff3cd;
  position:relative;
  border: 1px solid #ffeeba;
  padding: 28px;
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
  return <StyledDialog>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={23} style={{position:'absolute', top:'0', right:'0', padding:'4px', cursor:'pointer'}}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    {message}
    </StyledDialog>;
};

export default ErrorMessage;
