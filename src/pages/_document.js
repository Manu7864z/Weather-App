import { Html, Head, Main, NextScript } from "next/document";
import styled from "styled-components";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <StyledBody>
        <Main />
        <NextScript />
      </StyledBody>
    </Html>
  );
}

const StyledBody = styled.body`
  background-color: whitesmoke;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
