import logo from './logo.svg';
import './App.css';
import ImageBox from './exam1/ImageBox';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './exam2/TodoList';
import UserList from './exam2/UserList';

function App() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('');
  useEffect(() => {
    axios.get(url).then(response => { setTitle(response.data.message); setImage(response.data.message) })
  }, [])
  return (
    <div className="App">
      <ImageBox imageUrl={image} imageTitle={title} />
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
