/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/12/2023 23:19:39
*/
import React, { FC, useEffect,Fragment} from 'react';
// import Loading from '../Loading/Loading';
import './Main.css';
import Slider from '../Slider/Slider';
import Collection from '../Collection/Collection';
import Exclusive from '../Exclusive/Exclusive';


interface MainProps {
 
}


const Main : FC<MainProps> = () =>{


    // const [state, setState] = useState<any>(null)
    // const [loading, setLoading] = useState(true);
    // const [value, setValue] = useState('');

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        
      }
      runLocalData()
    },[])

  return (
    <Fragment>
    
      <div className="Main">
      <div>
  <Slider />
  <div className="main_content">
    <Collection />
    <Exclusive/>
  </div>
</div>
      </div>
    
    </Fragment>
  );
}

export default Main;