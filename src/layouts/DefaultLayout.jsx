import React from 'react';

import styled from '@emotion/styled';

import Header from '../components/v6/Header';
import Footer from '../components/v6/Footer';
import Container from '../components/v6/Container';

import { HEADER_HEIGHT } from '../styles/constants-v6';

import '../assets/css/layout.css';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Content = styled(Container)({
  flex: 1,
  paddingTop: HEADER_HEIGHT,
});

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Wrapper>
  );
}
