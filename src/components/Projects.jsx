import styled from "styled-components";
import Alliatus from "../Images/Alliatus.png";
import anotherInc from "../Images/Another-Inc.png";
import Builders from "../Images/builders-img.jpg";
import DiceGame from "../Images/Dice-Game.png";
import DuneBliss from "../Images/Dune-Bliss.png";
import DuneSpice from "../Images/Dune-Spice.png";
import Ethereal from "../Images/Ethereal.png";
import RealEstate from "../Images/Real-Estate.png";
import Snapflixx from "../Images/Snapflixx.png";
import Val from "../Images/val.png";
import Workbook from "../Images/Workbook.png";

const ProjectSec = styled.div`
  margin-top: 10rem;
  background-color: #000;
  color: #fff;
  padding: 0 1rem;
  .title {
    margin-bottom: 2rem;
    h3 {
      font-size: 1.2rem;
      padding-left: 4rem;
    }
  }
  .gridSec {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 4rem;
    gap: 4rem;
    .gridcard {
      display: flex;
      flex-direction: column;
      text-decoration: none;

      img {
        width: 100%;
        height: 15rem;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }
      p {
        font-size: 1rem;
        color: #fff;
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    .title {
      h3 {
        padding-left: 0;
      }
    }
    .gridSec {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 0;
      margin-bottom: 3rem;

      .gridcard {
        img {
          height: 10rem;
        }
      }
    }
  }
`;

const Projects = () => {
  return (
    <ProjectSec>
      <div className="title">
        <h3>My Recent projects</h3>
      </div>

      <div className="gridSec">
        <a
          className="gridcard"
          href="https://project-alliatus.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Alliatus} alt="Alliatus website image" />
          <p>Alliatus</p>
        </a>{" "}
        <a
          className="gridcard"
          href="https://another-inc.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={anotherInc} alt="Another Inc. website image" />
          <p>Another Inc.</p>
        </a>{" "}
        <a
          className="gridcard"
          href="https://builder-com.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Builders} alt="Builders website image" />
          <p>Builders</p>
        </a>{" "}
        <a
          className="gridcard"
          href="https://dice-game-indol-ten.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={DiceGame} alt="Dice-Game website image" />
          <p>Dice Game</p>
        </a>{" "}
        <a
          className="gridcard"
          href="https://dune-bliss.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={DuneBliss} alt="Dune-Bliss website image" />
          <p>Dune-Bliss</p>
        </a>
        <a
          className="gridcard"
          href="https://dune-spice.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={DuneSpice} alt="Dune-Spice website image" />
          <p>Dune-Spice</p>
        </a>{" "}
        <a
          className="gridcard"
          href="https://ethereal-demo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Ethereal} alt="Ethereal website image" />
          <p>Ethereal</p>
        </a>
        <a
          className="gridcard"
          href="https://real-estate-demo-sable.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={RealEstate} alt="RealEstate website image" />
          <p>Real Estate</p>
        </a>{" "}
        <a
          className="gridcard"
          href="https://snapflicx.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Snapflixx} alt="Snapflixx website image" />
          <p>Snapflixx</p>
        </a>{" "}
        <a
          className="gridcard"
          href="https://snapflicx.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Val} alt="Val website image" />
          <p>Valentine app</p>
        </a>{" "}
        <a
          className="gridcard"
          href="https://workbook-creator.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Workbook} alt="Workbook website image" />
          <p>Workbook app</p>
        </a>
      </div>
    </ProjectSec>
  );
};

export default Projects;
