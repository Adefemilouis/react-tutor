import React from 'react'
import './App.css'
 export function Myimage() {
  return (
    <div>
       <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katerrine" />
    </div>
  )
}
  export default function Mysci() {
    return (
        <div className='obb'>
            <div><img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Katerrine" /></div>
            <div className='dee'>
               <img src="./src/assets/joy.jpg"
      alt="Alan L. Hart" width={80} height={88} />
            </div>
            <div className='fee'>
            <img src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart" />
            </div>
        </div>
    )
}
export function TodoList(){
    return(
        <>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="lamar" />
        </>
    )
}
const today = new Date();
 function formatDate(date) {
return new Intl.DateTimeFormat(
  'en-US',
  { weekday: 'long'}
).format(date);
}
export function ToList() {
  return (
    <h1>To Do list for {formatDate(today)}</h1>
  );
};

export function GetList(){
  return (
    <div>
 <ul style={{backgroundColor: 'black',
      color: 'greenyellow'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>

    </ul>
    </div>
   
  );
}

const person = {
  name: 'Israel Oladipupo',
  imageId:'7vQD0fP',
  imageSize: '20px',
  Theme: {
    backgroundColor: 'blue',
    color: 'pink',
    
  }
  
}
const jassurl = './src/assets/jass.jpg'
export function  GeeList() {
  return(
    <div style={person.Theme}>
     <h1>{person.name}'s Todos</h1>
     <img src={jassurl + person.imageId + person.imageSize + '.jpg'} />
     <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
}
 

