import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { styled } from 'styled-components';

const HeroSection = styled.div`
  background: linear-gradient(to right, ${(props) => props.theme.colors.black}, ${(props) => props.theme.colors.gray800});
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 80px 16px;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.orange500};
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <Title>Motorsports Simplified</Title>
      <Description>The Fastest, Easiest Registration & Event Management System Available - Saves Time and Money!</Description>
      <ButtonGroup>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate('/races')}
        >
          Learn More
        </Button>
        <Button
          type="default"
          size="large"
          onClick={() => navigate('/register')}
        >
          Sign Up Now
        </Button>
      </ButtonGroup>
    </HeroSection>
  );
};

export default Hero;