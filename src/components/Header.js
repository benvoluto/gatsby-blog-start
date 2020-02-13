import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

const StyledH1 = styled.h1`
  color: red;
  font-family: sans-serif;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  color: red;
`;

export const Header = ({ siteTitle, siteDescription }) => (
  <StyledLink to="/">
    <StyledH1>{siteTitle}</StyledH1>
    <p>{siteDescription}</p>
  </StyledLink>
);