import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
 const [selectedContactID, setSelectedContactID ] = useState(null)

 
  return (
    
    <>
         {selectedContactID ? (
         <> 
        <SelectedContact selectedContactID={selectedContactID}  />
        {<button className='button' onClick={() => {setSelectedContactID(null)}}>Back</button>}
        </>
      ) : (  <ContactList setSelectedContactID={setSelectedContactID}/>)}
     </>
  )
}

export default App
