import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Holi-fun</h1>
        <p>Get holiday and vacation destinations that fit your interests</p>
        <Button bsStyle="success" bsSize="small" >
          <Link to="about" activeClassName="active">Learn more</Link>
       </Button>
      </div>
    );
  }
}
export default HomePage;
