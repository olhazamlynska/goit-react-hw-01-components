import styled from 'styled-components';

export const StatisticWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 5px -5px 40px ${p => p.theme.colors.primary};
  overflow: hidden;
`;

export const StatisticSection = styled.div`
  width: 100%;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: ${p => {
    switch (p.label) {
      case '.docx':
        return 'blue';
      case '.pdf':
        return 'red';
      case '.mp3':
        return 'green';
      case '.psd':
        return 'gray';
      default:
    }
  }};
`;
