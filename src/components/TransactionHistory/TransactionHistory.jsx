import PropTypes from 'prop-types'
import { TransactionRows } from 'components/TransactionRows/TransactionRows'

export const TransactionHistory = ({ items } )=>{
   return <div><table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      <tbody>{items.map(({ id, type, amount, currency }) => (
         <TransactionRows
            key={id}
            type={type}
            amount={amount}
            currency={currency}
         />
      ))}
  </tbody>
</table></div>
}


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
