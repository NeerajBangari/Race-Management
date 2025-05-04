import React, { useState } from 'react';
import {Input} from 'antd'
import RaceCard from './race-card';
import { Race } from '../types/types';
import { styled } from 'styled-components';


const Section = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2.25rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface RaceListProps {
  races: Race[];
}

const RaceList: React.FC<RaceListProps> = ({ races }) => {
  const [filter, setFilter] = useState<string>("");
  const filteredRaces = races.filter(race => 
    race.name.toLowerCase().includes(filter.toLowerCase()) || 
    race.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section id="races">
      <Title>Upcoming Races</Title>
      <Input
        placeholder="Filter by name or location"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: '24px', borderRadius: '8px' }}
      />
      <Grid>
        {filteredRaces.map(race => <RaceCard key={race.id} race={race} />)}
      </Grid>
    </Section>
  );
};

export default RaceList;