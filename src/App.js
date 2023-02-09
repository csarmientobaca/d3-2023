import './App.css';
import { Container } from 'react-bootstrap';
import NavTop from './components/nav';
import RowBotom from './components/footer';
// import CardGroup from 'react-bootstrap/CardGroup';
import Books from "./data/fantasy.json"
import BookList from './components/BookList';
import MyJumbo from './components/Jumbo';

import fantasy from "./data/fantasy.json"




function App() {
  console.log(Books[0])
  return (
    <>

      <NavTop></NavTop>
      <Container>
        <MyJumbo></MyJumbo>
        <BookList
          books={fantasy}
        />


      </Container>
      <RowBotom name="This is a foooter"></RowBotom>
    </>
  );
}

export default App;
