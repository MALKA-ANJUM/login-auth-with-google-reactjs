import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'
import Login from './components/Login';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
          </Routes>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
