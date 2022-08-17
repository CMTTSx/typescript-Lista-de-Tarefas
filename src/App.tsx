import React, { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/listItem';
import { AddArea } from './components/AddArea';

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'comprar o pao na padaria', done: false },
    { id: 2, name: 'caminhar com o cachorro', done: false }

  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1 ,
      name: taskName,
      done: false
    });
    setList(newList)
  }

   // Função feita para tarefinha de casa.
   const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefa</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
            />
          ))}


      </C.Area>
    </C.Container>
  );
}

export default App;
