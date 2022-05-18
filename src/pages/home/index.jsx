import React, {useState} from 'react';
import Card from '../../components/Card'
import './style.css'
export default function Home() {

  let[studentName, setStudentName] = useState('');
  let [students,setStudents ]= useState([]);

      function handleAddStudent(){
        let newStudent = {
          name: studentName,
          time: new Date().toLocaleTimeString("pt-br",{
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      };
      setStudents(prevState => [prevState,newStudent])
    };

     

  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <br />
      <input
       type="text" 
       placeholder="Digite aqui"
       onChange={e => setStudentName(e.target.value)} />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>

      {
       
        students.map(el=> {
          <Card name={el} time={el.time}/>
        })
        
        
      }
    </div>
  )
};


