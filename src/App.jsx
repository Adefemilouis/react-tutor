import React from 'react'
import Mysci from './myimage'
  import {Myimage} from './myimage'
import { TodoList } from './myimage'
import { ToList } from './myimage'
import { GetList } from './myimage'
import { GeeList } from './myimage'
import  Clock  from './Clock'
import './App.css'



export default function Myapp() {
  const avatar = './src/assets/jass.jpg';
  const name = 'OYIN';

  return (
    <div>
      <ToList/>
      <h1>hello everyone</h1>
      <Myimage person = {{
        name: 'ling Buyi', imageId: 'f2jGG5e' 
      }} size={40} />
      <ol>
     <li>welocome everyone</li>
     <li>My name is {name}</li>
  <Mysci/>
      </ol>
      <div>
        <h1>The scientist</h1>
        <Mysci/>
      </div>

      <h1>Hedy Lamarr</h1>
      <TodoList/>
      <ul>
        <li>Invent new traffic</li>
        <li>Reharse a movie scene</li>
        <li>Improve the spectrum technology </li>
      </ul>
      <img src={avatar} alt="gee" />

      <GetList/>
    
      <GeeList/>
      
     <Clock/>

    </div>
    
  )
}
