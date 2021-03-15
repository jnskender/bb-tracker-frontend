import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    --middle-blue: #1687a7;
    --dark-blue: #276678;
    --light-blue: #d3e0ea;
    --grey: #f6f5f5;
  }

  *, *:before, *:after{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.5rem;
    line-height:2;
  }

  a{
    color: var(--middle-blue);
    text-decoration: underline;
  }

  nav a {
    text-decoration: none;
  }


  ul {
    list-style:none;
  }
  button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
