import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const apiRoot = "https://localhost:44349/api/Notes";

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(apiRoot)
      .then(response => response.json())
      .then(data => setNotes(data));
  }, []);

  return (
    <div className="container mt-3">
      <h1>MyNote</h1>
      <ul>
        {notes.map(x => <li>{x.title}
        <li>{x.content}</li>
        </li>)}
      </ul>
    </div>
  );
}

export default App;

