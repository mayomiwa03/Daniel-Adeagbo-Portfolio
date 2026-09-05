import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import styled from "styled-components";

const HeaderSec = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #444;
  padding: 0 4rem;

  h1 {
    font-family: "Sansation", sans-serif;
    color: #fff;
  }
  @media (min-width: 260px) and (max-width: 500px) {
    padding: 0 0.5rem;
    background: rgba(17, 17, 17, 0.6); /* semi-transparent dark tint */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    h1 {
      font-size: 1.8rem;
    }
  }
`;

const IconButton = styled.button`
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  z-index: 1100;
  display: flex;
  align-items: center;
  @media (min-width: 260px) and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 2rem;
  background: rgba(17, 17, 17, 0.6); /* semi-transparent dark tint */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari support */

  /* toggle visibility based on isOpen prop */
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-150%")});
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;

  &.active {
    color: #ff922b; /* your active color */
  }

  /* optional underline indicator */
  &.active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60%;
    height: 2px;
    background: #ff922b;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <HeaderSec ref={navRef}>
      <h1>Mayomiwa</h1>
      <IconButton
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <RiCloseFill /> : <RiMenu2Fill />}
      </IconButton>
      <NavList $isOpen={isOpen}>
        <li>
          <StyledNavLink to="/" end onClick={() => setIsOpen(false)}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/services" onClick={() => setIsOpen(false)}>
            Services
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </StyledNavLink>
        </li>
      </NavList>
    </HeaderSec>
  );
};

export default Header;
