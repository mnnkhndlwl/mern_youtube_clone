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
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
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
