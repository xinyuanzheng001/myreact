import Map from './components/Map'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchItem = async () => {
      setIsLoading(true)
      const result = await axios('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')

      setItems(result.data.events)
      setIsLoading(false)
    }
    fetchItem()
    
  }, [])
  return (
    <div className="App">
      <Header />
      { !isLoading ? <Map items={items}/> : <Loader />}
    </div>

  );
}

export default App;
