import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <StyledLink to={'/'}>
            <GiKnifeFork />
            Shakeel Recipes
          </StyledLink>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: cursive;
`;

const Nav = styled.nav`
  padding: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
