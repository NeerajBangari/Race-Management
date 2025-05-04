import { createGlobalStyle, ThemeProvider } from "styled-components";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { LiveScore, Race } from "./types/types";
import Header from "./components/header";
import Hero from "./components/hero";
import RaceList from "./components/race-list";
import LiveScores from "./components/live-scores";
import Footer from "./components/footer";
import {theme} from './theme'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.darkGray};
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="40" height="40"%3E%3Cpath fill="%23222222" fill-opacity="0.5" d="M14 0h52l14 14v52l-14 14H14L0 66V14zM12 14v52h52V14z"/%3E%3C/svg%3E');
    background-repeat: repeat;
  }

  /* Antd Menu Overrides */
  .ant-menu-dark {
    background: ${(props) => props.theme.colors.black} !important;
  }

  .ant-menu-dark .ant-menu-item a {
    color: ${(props) => props.theme.colors.white} !important;
    font-size: 1rem;
  }

  .ant-menu-dark .ant-menu-item a:hover {
    color: ${(props) => props.theme.colors.orange500} !important;
  }

  .ant-menu-dark .ant-menu-item-selected a {
    color: ${(props) => props.theme.colors.orange500} !important;
  }

  /* Antd Table Overrides */
  .ant-table-thead > tr > th {
    background: ${(props) => props.theme.colors.orange500} !important;
    color: ${(props) => props.theme.colors.white} !important;
  }

  .ant-table-tbody > tr > td {
    color: ${(props) => props.theme.colors.white} !important;
    background: ${(props) => props.theme.colors.gray800} !important;
  }

  /* Antd Input Overrides */
  .ant-input {
    background-color: ${(props) => props.theme.colors.gray800} !important;
    color: ${(props) => props.theme.colors.white} !important;
    border-color: ${(props) => props.theme.colors.orange500} !important;
  }

  .ant-input:hover,
  .ant-input:focus {
    border-color: ${(props) => props.theme.colors.orange600} !important;
    box-shadow: none !important;
  }

  .ant-input::placeholder {
    color: ${(props) => props.theme.colors.gray400} !important;
  }

  /* Antd Button Overrides */
  .ant-btn-primary {
    background-color: ${(props) => props.theme.colors.orange500} !important;
    border-color: ${(props) => props.theme.colors.orange500} !important;
    color: ${(props) => props.theme.colors.white} !important;
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    background-color: ${(props) => props.theme.colors.orange600} !important;
    border-color: ${(props) => props.theme.colors.orange600} !important;
    color: ${(props) => props.theme.colors.white} !important;
  }

  .ant-btn-default {
    background-color: transparent !important;
    border-color: ${(props) => props.theme.colors.orange500} !important;
    color: ${(props) => props.theme.colors.orange500} !important;
  }

  .ant-btn-default:hover,
  .ant-btn-default:focus {
    background-color: ${(props) => props.theme.colors.orange500} !important;
    border-color: ${(props) => props.theme.colors.orange500} !important;
    color: ${(props) => props.theme.colors.white} !important;
  }

  /* Fix for alternating table rows */
  .even-row {
    background-color: ${(props) => props.theme.colors.gray800} !important;
  }

  .odd-row {
    background-color: #2D3748 !important;
  }
`;

const App: React.FC = () => {
  const races: Race[] = [
    { id: 1, name: "City Marathon", date: "2025-06-15", location: "New York", type: "Marathon" },
    { id: 2, name: "Trail Run", date: "2025-07-20", location: "Colorado", type: "Trail" },
  ];

  const liveScores: LiveScore[] = [
    { userId: "U001", raceName: "City Marathon", time: "02:15:30", position: 1 },
    { userId: "U002", raceName: "City Marathon", time: "02:20:45", position: 2 },
    { userId: "U003", raceName: "Trail Run", time: "01:45:20", position: 1 },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.colors.orange500,
          colorBgBase: theme.colors.darkGray,
          colorTextBase: theme.colors.white,
          colorBorder: theme.colors.orange500,
        },
        components: {
          Button: {
            defaultBg: 'transparent',
            defaultBorderColor: theme.colors.orange500,
            defaultColor: theme.colors.orange500,
            defaultHoverBg: theme.colors.orange500,
            defaultHoverColor: theme.colors.white,
            defaultHoverBorderColor: theme.colors.orange500,
          },
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flexGrow: 1, paddingTop: '64px' }}>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/races" element={<RaceList races={races} />} />
                <Route path="/live-scores" element={<LiveScores liveScores={liveScores} />} />
                <Route path="/results" element={
                  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px', color: theme.colors.white }}>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '24px' }}>Results</h2>
                    <p>Results section coming soon!</p>
                  </div>
                } />
                <Route path="/register" element={
                  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px', color: theme.colors.white }}>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '24px' }}>Register</h2>
                    <p>Registration form coming soon!</p>
                  </div>
                } />
                <Route path="/admin" element={
                  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px', color: theme.colors.white }}>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '24px' }}>Admin</h2>
                    <p>Admin dashboard coming soon!</p>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;