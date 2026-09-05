import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #000;
`;

export const Background = styled.div`
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  z-index: 0;

  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0;

  color: white;
`;
