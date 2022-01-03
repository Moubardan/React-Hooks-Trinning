import React, {useState} from 'react';
import ResourceList from './ResourceList';

const App = () =>{
  const [resourceName, setResourceName] = useState("posts")
  return ( 
   <>
  <button onClick={() => setResourceName('posts')}>Posts</button>
  <button onClick={() => setResourceName( 'todos')}>Todos</button>
  <ResourceList resourceName={resourceName} />
 </>
   );
}


export default App;