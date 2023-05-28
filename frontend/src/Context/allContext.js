import React, { useState } from "react";
import todocontext from "./todoContext";

const AllContext = (props) => {
    const intitialTask = [{ id: '&77&71', job: 'This is the trial task', date: '16th May 2023', tag: 'bro', cardname: 'pending' }]
    const [task, setTask] = useState(intitialTask);
    const [toggle, setToggle] = useState('')
    const [logged, setLogged] = useState('');
    const [currenttask, setCurrenttask] = useState();

    const addtask = (id, job, date, tag, cardname) => {
        const individualTask = {
            id: id,
            job: job,
            date: date,
            tag: tag,
            cardname: cardname
        }
        setTask(task.concat(individualTask));
    };
    const deletetask = (id) => {
        const newTasks = task.filter((individualTask) => { return individualTask.id !== id })
        setTask(newTasks);
    }
    const updatetask = (id, job, date, tag, cardname) => {
        const that = {
            id: id,
            job: job,
            date: date,
            tag: tag,
            cardname: cardname
        }
        const updatedTasks   = task.map((inditask) =>
            inditask.id === id ? { ...inditask, ...that } : inditask
        );
        console.log(updatedTasks);
        setTask(updatedTasks);
    }
    return (
        <todocontext.Provider value={{ task, toggle, setToggle, addtask, deletetask, updatetask, currenttask, setCurrenttask , logged, setLogged }}>
            {props.children}
        </todocontext.Provider>
    )
}

export default AllContext