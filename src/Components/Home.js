// import React from 'react';
// import '../Styles/styles1.css';
// import AdminViewCandidates from './AdminViewCandidates';
// import EventsList from './EventsList';

// const Home = ({ userType }) => {
//   return (
//     <div className="home-container">
//       <h1>Dashboard</h1>
//       <div className="dashboard-cards">
//         <div className="card">
//           <h3>4</h3>
//           <p>No. of Positions</p>
//         </div>
//         <div className="card">
//           <h3>9</h3>
//           <p>No. of Candidates</p>
//         </div>
//         <div className="card">
//           <h3>4</h3>
//           <p>Total Voters</p>
//         </div>
//         <div className="card">
//           <h3>3</h3>
//           <p>Voters Voted</p>
//         </div>
//       </div>
//       <div className="events-list">
//         {userType === 'admin' ? <AdminViewCandidates /> : <EventsList />}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <Container fluid className="home-container">
      {/* Header Section */}
      <Row className="header-section p-3">
        <Col>
          <h1 className="text-white">Online Voting System</h1>
        </Col>
        <Col className="text-right">
          <div className="user-info">
            {/* Admin/User Info Image */}
            <img src="#" alt="User" className="user-image" /> {/* Replace # with actual path */}
            <span className="text-white ml-2">CRCE Admin</span>
          </div>
        </Col>
      </Row>

      {/* Dashboard Section */}
      <Row className="dashboard-section">
        {/* Card for Number of Positions */}
        <Col md={3}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>No. of Positions</Card.Title>
              <Card.Text>
                <h2>4</h2>
              </Card.Text>
              <Link to="#" className="stretched-link">More info</Link> {/* Update link */}
            </Card.Body>
          </Card>
        </Col>

        {/* Card for Number of Candidates */}
        <Col md={3}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>No. of Candidates</Card.Title>
              <Card.Text>
                <h2>9</h2>
              </Card.Text>
              <Link to="#" className="stretched-link">More info</Link> {/* Update link */}
            </Card.Body>
          </Card>
        </Col>

        {/* Card for Total Voters */}
        <Col md={3}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>Total Voters</Card.Title>
              <Card.Text>
                <h2>4</h2>
              </Card.Text>
              <Link to="#" className="stretched-link">More info</Link> {/* Update link */}
            </Card.Body>
          </Card>
        </Col>

        {/* Card for Voters Voted */}
        <Col md={3}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>Voters Voted</Card.Title>
              <Card.Text>
                <h2>3</h2>
              </Card.Text>
              <Link to="#" className="stretched-link">More info</Link> {/* Update link */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Votes Tally Section */}
      <Row className="votes-tally-section mt-5">
        <Col md={6}>
          <Card className="votes-card shadow-sm">
            <Card.Header>President</Card.Header>
            <Card.Body>
              <div className="votes-bar">
                {/* Add Candidate 1 Image */}
                <img src="#" alt="Candidate 1" className="candidate-image" /> {/* Replace # with actual path */}
                <span>Candida</span>
                <div className="bar">
                  <div className="filled" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="votes-bar">
                {/* Add Candidate 2 Image */}
                <img src="#" alt="Candidate 2" className="candidate-image" /> {/* Replace # with actual path */}
                <span>Monica</span>
                <div className="bar">
                  <div className="filled" style={{ width: '30%' }}></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="votes-card shadow-sm">
            <Card.Header>Vice President</Card.Header>
            <Card.Body>
              <div className="votes-bar">
                {/* Add Candidate 1 Image */}
                <img src="#" alt="Candidate 1" className="candidate-image" /> {/* Replace # with actual path */}
                <span>Calista</span>
                <div className="bar">
                  <div className="filled" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="votes-bar">
                {/* Add Candidate 2 Image */}
                <img src="#" alt="Candidate 2" className="candidate-image" /> {/* Replace # with actual path */}
                <span>Gini</span>
                <div className="bar">
                  <div className="filled" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="votes-bar">
                {/* Add Candidate 3 Image */}
                <img src="#" alt="Candidate 3" className="candidate-image" /> {/* Replace # with actual path */}
                <span>Sheldon</span>
                <div className="bar">
                  <div className="filled" style={{ width: '30%' }}></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add more roles and positions as needed */}
    </Container>
  );
};

export default Home;
