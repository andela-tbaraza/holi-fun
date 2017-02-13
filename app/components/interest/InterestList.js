import React, { PropTypes } from 'react';
import InterestListRow from './InterestListRow';

const InterestList = ({ interests }) => {
  return (
    <div id="page-content-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {interests.map(interest =>
            <InterestListRow key={interest.id} interest={interest} />)}
        </tbody>
      </table>
    </div>

  );
};
InterestList.propTypes = {
  interests: PropTypes.array.isRequired
};

export default InterestList;
