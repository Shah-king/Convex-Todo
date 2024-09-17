import { useState } from "react";
import { Typography, Button, Input, FormControl } from "@mui/material";

type ToDoFormProps = {
    onCreate: (title: string, description: string) => void;
}

export function NewToDoform({onCreate }: ToDoFormProps){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onCreate(title, description); 
        setTitle("");
        setDescription("");
      };
    return(
        <form onSubmit={handleSubmit}>
      <Typography>Title</Typography>
      <Input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      <Typography>Description</Typography>
      <Input type="text" name="description" id="description" value={description} onChange={e => setDescription(e.target.value)}  />
      <Button type="submit">Create</Button>
    </form>
    )
}