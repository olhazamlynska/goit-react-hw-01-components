import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticList,
  StatisticItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection title={title}>
      {title && <h2>{title}</h2>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} label={label}>
              {' '}
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
