import './App.scss'
import Samples from './Samples/Samples';
import AccordionCustom from './Accordion/AccordionCustom'
import { useState } from 'react';
function App() {
  const [customComponent, setCustomComponent] = useState(<Samples/>);

  const chooseComponent = (option: number) => {
    switch(option) {
      case 1:
        setCustomComponent(<AccordionCustom/>);
        break;
      default:
        setCustomComponent(<Samples/>);
    }
  }
  
  return (
    <div className="custom-white-theme">
      <h1>Carbon Samples</h1>
      <ul className='sample-listing'>
        <li className='sample-listing__item' onClick={()=>chooseComponent(1)}>Accordion</li>
        <li className='sample-listing__item' onClick={()=>chooseComponent(0)}>Back to listing</li>
      </ul>
      {customComponent}
    </div>
  )
}

export default App
