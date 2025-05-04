import React, { useState } from 'react';
import {Input,Table} from 'antd'
import { LiveScore } from '../types/types';
import { styled } from 'styled-components';
import { theme } from '../theme';

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

interface LiveScoresProps {
  liveScores: LiveScore[];
}

const LiveScores: React.FC<LiveScoresProps> = ({ liveScores }) => {
  const [filter, setFilter] = useState<string>("");
  const filteredScores = liveScores.filter(score => 
    score.userId.toLowerCase().includes(filter.toLowerCase()) || 
    score.raceName.toLowerCase().includes(filter.toLowerCase())
  );

  const columns = [
    { title: "User ID", dataIndex: "userId", key: "userId" },
    { title: "Race Name", dataIndex: "raceName", key: "raceName" },
    { title: "Time", dataIndex: "time", key: "time" },
    { title: "Position", dataIndex: "position", key: "position" },
  ];

  return (
    <Section id="live-scores">
      <Title>Live Scores</Title>
      <Input
        placeholder="Filter by user ID or race name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: '24px', borderRadius: '8px' }}
      />
      <Table
        columns={columns}
        dataSource={filteredScores}
        rowKey={(record, index:any) => index.toString()}
        style={{ border: `2px solid ${theme.colors.orange500}`, borderRadius: '8px' }}
        rowClassName={(record, index) => index % 2 === 0 ? "even-row" : "odd-row"}
        pagination={false}
      />
    </Section>
  );
};

export default LiveScores;