import {useState, useEffect} from 'react'
import './App.css';
import Output from './Components/Output';
import InputField from './Components/InputField';
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [namesArr, setNamesArr] = useState([])

  useEffect(() => {
    axios.get('/api/names')
      .then(res => setNamesArr(res.data))
  }, [])

  function handleTyping(e) {
    setName(e.target.value)
  }

  function addNameToArr(e) {
    e.preventDefault()
    axios.post('/api/names', {name: name})
      .then(res => {
        setNamesArr(res.data)
        setName('')
      })
  }

  return (
    <div className="App">
      <Output namesArr={namesArr}/>
      <InputField name={name} handleTyping={handleTyping} addNameToArr={addNameToArr}/>
    </div>
  );
}

export default App;