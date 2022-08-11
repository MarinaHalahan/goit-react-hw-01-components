import { StatWrapper, StatList, StatItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const StatElem = ({ label, percentage }) => {
  return (
    <StatItem>
      <span>{label}</span>
      <span>{percentage}</span>
    </StatItem>
  );
};

export const Statistics = ({ title = null, stats }) => {
  return (
    <StatWrapper>
      {title && <h2 className="titleStat">{title}</h2>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatElem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </StatWrapper>
  );
};

StatElem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
