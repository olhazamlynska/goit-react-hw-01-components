import styled from 'styled-components';

export const TransactionTable = styled.table`
  background-color: ${p => p.theme.colors.white};
  width: 500px;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 5px -5px 40px ${p => p.theme.colors.primary};
`;

export const TransactionHeaderTr = styled.tr`
  background-color: ${p => p.theme.colors.text};
`;

export const TransactionHeader = styled.th`
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
`;

export const TransactionData = styled.td`
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
`;

export const TransactionRow = styled.tr`
  :nth-child(2n + 1) {
    background-color: ${p => p.theme.colors.primary};
  }
`;
