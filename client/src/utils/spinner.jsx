import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #f3f3f3;
    border-top-color: #3498db;
    animation: ${rotate} 1s linear infinite;
  }
`;

const LoadingSpinner = () => {
  return <StyledSpinner />;
};

export default LoadingSpinner;
