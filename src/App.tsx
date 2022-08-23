import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { SimpleForm } from './form';

function App() {
  const [value, setValue] = useState('Default value');
  // const dispatch = useDispatch();

  // useEffect(()=> {
  //   console.log("useEffect")
  // },[dispatch])
  const callReducer = () => {
    // dispatch("APP/BUTTON_ACTION", "My value");
    setValue('Button clicked');
  };
  return (
    <div className='App'>
      State: {value}
      <button onClick={() => callReducer()}>Update state</button>
      <SimpleForm />
    </div>
  );
}

export default App;
