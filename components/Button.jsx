import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  background: var(--middle-blue, lightblue);
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 7px;
  font-size: 1.5rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  &[disabled] {
    opacity: 0.5;
  }
`;

export default StyledButton
