import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionHeaderTr,
  TransactionHeader,
  TransactionData,
  TransactionRow,
} from './TransactionHistiry.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <TransactionTable>
        <thead>
          <TransactionHeaderTr>
            <TransactionHeader>Type</TransactionHeader>
            <TransactionHeader>Amount</TransactionHeader>
            <TransactionHeader>Currency</TransactionHeader>
          </TransactionHeaderTr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionRow key={id}>
              <TransactionData>{type.toUpperCase()}</TransactionData>
              <TransactionData>{amount}</TransactionData>
              <TransactionData>{currency}</TransactionData>
            </TransactionRow>
          ))}
        </tbody>
      </TransactionTable>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
