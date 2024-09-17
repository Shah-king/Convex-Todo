"use client"
import { useState } from "react";
import { NewToDoform } from "./_components/new_to-do";
import { title } from "process";
import {Typography, Stack, Input, Box} from "@mui/material";

type ToDoItem = {
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<ToDoItem[]>([
    { title: "Example", description: "This is an example", completed: false  }
  ]);

   return(
    <div className="max-w-screen-md mx-auto p-4">
      <Typography variant="h2" align="center">To-Do List</Typography>
      <NewToDoform onCreate={(title, description) => {
       setTodos(prev => {
        const newTodos = [...prev];
        newTodos.push({ title, description, completed: false});
        return newTodos;
      });
    }} />
      <Stack list-style-type="none" p="50px">
        {todos.map(({ title, description, completed }, index) => (
          <ToDoItem 
          title={title}
          description={description} 
          completed={completed}
           onCompleteChanged={(newValue) =>{
            setTodos(prev => {
              const newTodos = [...prev];
              newTodos[index].completed = newValue;
              return newTodos;
            })
           }}
          />
      ))}
    </Stack>
    <br />
    </div>
  );
}
function ToDoItem({ title, description, completed, onCompleteChanged}:{
  title: string;
  description: string; 
  completed: boolean; 
  onCompleteChanged: (newValue: boolean) => void
}){
  return(
    <Box className="flex gap-2 border rounded p-2" m="10px" p="10px" borderRadius="5px" border="1px gray solid">
      <input
        type="checkbox" 
        checked={completed}
        onChange={e => onCompleteChanged(e.target.checked) } 
        />
        <Box>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
  )
}

