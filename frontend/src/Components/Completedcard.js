import React, { useContext, useState } from 'react'
import Individualtask from './Individualtask'
import todocontext from '../Context/todoContext'
import './Pendingcard.css'

const Completedcard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const context = useContext(todocontext);
    const {task ,toggle , setToggle}=context;
    const handleOnclick = ()=>{
        props.getTag("completed")
        setToggle('addtask')
        console.log(toggle)
        const khali = {
            job: "",
            date: "",
            tag: "",
            cardname: ""
        }
        props.getUpdate(khali);
    }
    let count=0;
    for (let index = 0; index < task.length; index++) {
        if(task[index].cardname==='completed'){
            count= count+1;
        }
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
        setTimeout(() => {
            setIsHovered(false);
        }, 1000);
    };
    return (
        <div className='overflow-y-auto'>
            <div className="card glassmorphism" >
                <div className="container text-center mt-3 ">
                <span className="badge border border-success border-opacity-50 pt-2 rounded-end-pill" style={{ width: '100%' , backgroundColor : '#2ECC71' }}>
                        <h3>{props.status}<span className="badge text-bg-secondary mx-3">{count}</span></h3>
                    </span>
                </div>
                <div className="d-grid gap-2 m-3 " onMouseEnter={handleMouseEnter}>
                    <button className="btn btn-outline-secondary" type="button" onClick={handleOnclick} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className={`fa-solid fa-plus ${isHovered ? 'fa-bounce' : ''}`} ></i></button>
                </div>
                <div className="container card-body overflow-y-auto">
                    {task.map((inditask)=>{
                        if(inditask.cardname==='completed'){
                            return <Individualtask inditask={inditask} getUpdate={props.getUpdate}/>
                        }return null
                    })}
                </div>
            </div>
        </div>
    )
}

export default Completedcard