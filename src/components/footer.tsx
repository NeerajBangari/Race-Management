import React from 'react';
import { styled } from 'styled-components';

const FooterSection = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 24px 0;
  border-top: 2px solid ${(props) => props.theme.colors.orange500};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

const LinkGroup = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.orange500};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <p>© 2025 RaceDay. All rights reserved.</p>
        <LinkGroup>
          <FooterLink href="#contact">Contact</FooterLink>
          <FooterLink href="#terms">Terms</FooterLink>
          <FooterLink href="#privacy">Privacy</FooterLink>
        </LinkGroup>
      </Container>
    </FooterSection>
  );
};

export default Footer;