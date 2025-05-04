import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'antd';
import { Race } from '../types/types';
import { styled } from 'styled-components';


const Card = styled.div`
  background-color: ${(props) => props.theme.colors.gray800};
  color: ${(props) => props.theme.colors.white};
  padding: 24px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.orange500};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Info = styled.p`
  color: ${(props) => props.theme.colors.gray400};
  margin-bottom: 4px;
`;

interface RaceCardProps {
  race: Race;
}

const RaceCard: React.FC<RaceCardProps> = ({ race }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Title>{race.name}</Title>
      <Info>Date: {race.date}</Info>
      <Info>Location: {race.location}</Info>
      <Info>Type: {race.type}</Info>
      <Button
        type="primary"
        style={{ marginTop: '16px' }}
        onClick={() => navigate('/register')}
      >
        Register
      </Button>
    </Card>
  );
};

export default RaceCard;