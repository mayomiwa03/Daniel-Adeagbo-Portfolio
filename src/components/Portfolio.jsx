import Header from "./Header";
import styled from "styled-components";
import Projects from "./Projects";

const PortfolioSec = styled.div`
  background-color: #fff;
`;

const Portfolio = () => {
  return (
    <PortfolioSec>
      <Header />
      <Projects />
    </PortfolioSec>
  );
};

export default Portfolio;
