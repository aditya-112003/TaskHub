import React, { useContext, useState } from 'react'
import todocontext from '../Context/todoContext';

const Individualtask = (props) => {
    const context = useContext(todocontext);
    const { deletetask ,setCurrenttask , setToggle } = context;
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const handleOnclick = () => {
        deletetask(props.inditask.id);
    }
    const handleMouseEnter1 = () => {
        setIsHovered1(true);
        setTimeout(() => {
            setIsHovered1(false);
        }, 1000);
    }
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
        setTimeout(() => {
            setIsHovered2(false);
        }, 1000);
    }
    const handleEdittask = () =>{
        props.getUpdate(props.inditask);        
        setCurrenttask(props.inditask)
        setToggle('edittask')
    }
    return (
        <div className="card my-3 bg-secondary shadow-lg"  style={{ width: '22.9rem' }}>
            <div className="card-body">
                <h5 className="card-title mb-2">Task : {props.inditask.job} </h5>
                <h6 className="card-title ">Scheduled : <h7 className="card-subtitle text-body-secondary">{props.inditask.date}</h7></h6>
                <h6 className="card-title ">Tags : <span className="badge text-bg-info">{props.inditask.tag}</span></h6>
                <i className={`fa-solid fa-trash mx-2 ${isHovered1 ? 'fa-bounce' : ''} `} onClick={handleOnclick} onMouseEnter={handleMouseEnter1}></i>
                <i className={`fa-solid fa-pen mx-2 ${isHovered2 ? 'fa-bounce' : ''} `} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleEdittask} onMouseEnter={handleMouseEnter2}  ></i>
            </div>
            
        </div>
    )
}

export default Individualtask