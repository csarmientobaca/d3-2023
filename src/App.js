import { Container } from 'react-bootstrap';
import './App.css';
import NavTop from './components/nav';
import RowBotom from './components/footer';
import CardMain from './components/AllTheBooks';
// import { Row } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';


function App() {
  return (
    <>
      <NavTop></NavTop>
      <Container>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">List of books</h1>
          <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button className="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </Container>
      <Container>
        <CardGroup>

          <CardMain>

          </CardMain>
        </CardGroup>
      </Container>
      <RowBotom name="This is a foooter"></RowBotom>
    </>
  );
}

export default App;
