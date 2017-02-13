import React, { PropTypes } from 'react';
import { Link}  from 'react-router';

const InterestListRow = ({ interest }) => {
  return (
    <tr>
      <td>{interest.id}</td>
      {/* <td>{interest.name}</td> */}
      <td><Link to={'/interest/' + interest.id}>{interest.name}</Link></td>
    </tr>
  );
};

InterestListRow.propTypes = {
  interest: PropTypes.object.isRequired
};

export default InterestListRow;
