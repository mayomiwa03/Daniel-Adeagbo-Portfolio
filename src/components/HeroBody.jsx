import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const HeroBodySec = styled.div`
  padding-left: 4rem;
  margin-top: 20rem;
  h1 {
    width: 60%;
    font-size: 4rem;
    font-weight: 300;
    text-transform: capitalize;

    span {
      font-weight: 600;
    }
  }
  p {
    width: 55%;
    font-size: 1.2rem;
    opacity: 50%;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;
    button {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      font-weight: 500;
      border-radius: 20px;
      border: none;
      cursor: pointer;

      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      span {
        display: flex;
        align-items: center;
      }
    }
    button:first-child {
      background-color: #ff922b;
    }
    button:nth-child(2) {
      color: #fff;
      background: transparent;

      span {
        background-color: #444;
        padding: 0.8rem;
        border-radius: 50%;
      }
    }
  }
  .cpr {
    font-family: "Sansation", sans-serif;

    position: absolute;
    bottom: 20rem;
    right: 1rem;
    transform: rotate(-90deg);
    transform-origin: bottom right;
    white-space: nowrap; /* stop "Designed by" / "Mayomiwa" from wrapping */

    span {
      a {
        color: #ff922b;
        text-decoration: none;
        font-weight: 500;
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    padding-left: 1rem;
    margin-top: 12rem;

    h1 {
      font-size: 2rem;
      width: 70%;
    }
    p {
      width: 70%;
      font-size: 1rem;
    }
    .btns {
      margin-top: 2rem;
      gap: 1rem;
      button {
        font-size: 1rem;

        padding: 0.8rem 1.5rem;
      }
    }
    .cpr {
      bottom: 12rem;
      right: 0;
      transform: rotate(-90deg);
    }
  }
`;

const HeroBody = () => {
  const navigate = useNavigate();

  return (
    <HeroBodySec>
      <h1>
        {" "}
        <span> Building</span> digital experiences that turn <span>ideas</span>{" "}
        into <span>reality</span>.
      </h1>

      <p>
        I’m a frontend developer passionate about creating modern, responsive,
        and intuitive web experiences.
      </p>
      <div className="btns">
        <button onClick={() => navigate("/portfolio")}>
          View my works
          <span>
            <HiOutlineArrowNarrowRight />
          </span>{" "}
        </button>
        <button onClick={() => navigate("/portfolio")}>
          Let's Connect{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </button>
      </div>
      <div className="cpr">
        <p>
          Designed by{" "}
          <span>
            <a
              href="https://project-alliatus.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mayomiwa
            </a>
          </span>
        </p>
      </div>
    </HeroBodySec>
  );
};

export default HeroBody;
