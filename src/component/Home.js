import '../App.css';
import Search from './Search.js';
import { Button } from 'react-bootstrap';
import Secondpage from './Secondpage.js';
import Thirdpage from './Thirdpage.js';
function Home() {
  
  return (
    <>
    <div className ="App" >
    
      <Search />
      <br /><br /><br /><br />
      <Secondpage />
      <br /><br /><br />
      <Thirdpage />
    </div>
    </>
  );
}

export default Home;

