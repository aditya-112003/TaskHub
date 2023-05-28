import React, { useContext, useEffect, useState } from 'react'
import Pendingcard from './Pendingcard'
import todocontext from '../Context/todoContext'
import Inprogresscard from './Inprogresscard'
import Completedcard from './Completedcard'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'

const CardSetup = () => {
    const context = useContext(todocontext)
    const { addtask ,updatetask , toggle , currenttask } = context
    const [nameofcard, Setnameofcard] = useState('')
    const [taskcard, Settaskcard] = useState({ job: "", date: "", tag: "", cardname: nameofcard })
    const navigate = useNavigate();
    const onChange = (e) => {
        Settaskcard({ ...taskcard, [e.target.name]: e.target.value })
    }
    const getTag = (category) =>{
        Setnameofcard(category)
    }
    const handleOnclick = () => {
        const taskId=uuidv4()
        addtask(taskId,taskcard.job, taskcard.date, taskcard.tag, nameofcard);
        Settaskcard({ job: "", date: "", tag: "", cardname: nameofcard })
    }

    const getUpdate = (z) =>{
        Settaskcard(z);
    }

    const editTask = ()  =>{
        updatetask(currenttask.id,taskcard.job, taskcard.date, taskcard.tag,currenttask.cardname);
        Settaskcard({ job: "", date: "", tag: "", cardname: nameofcard })
    }
    useEffect(() => {
        if(!localStorage.getItem('entered')){
            navigate('/login')
        }
    })
    
    
    return (
        <>
            <div className="container px-1 my-3">
                <div className="row ">
                    <div className="col mx-1">
                        <Pendingcard status={'Pending'} getTag={getTag} getUpdate={getUpdate}/>
                    </div>
                    <div className="col mx-1">
                        <Inprogresscard status={'In-Progress'} getTag={getTag} getUpdate={getUpdate}/>
                    </div>
                    <div className="col mx-1">
                        <Completedcard status={'Completed'} getTag={getTag} getUpdate={getUpdate}/>
                    </div>
                </div>
            </div>
            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{toggle ==='addtask' ? 'Add' : 'Edit' } your task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="job" className="form-control" id="job" name='job' onChange={onChange} placeholder="name@example.com" value={taskcard.job} />
                                <label htmlFor="floatingInput">Task</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="date" name='date' onChange={onChange} placeholder="Schedule" value={taskcard.date} />
                                <label htmlFor="floatingSchedule">Scheduled</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tag" className="form-control" id="tag" name='tag' onChange={onChange} placeholder="Tag" value={taskcard.tag} />
                                <label htmlFor="floatingTag">Tag</label>
                            </div>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Tag Color</option>
                                <option value="1">Red</option>
                                <option value="2">Blue</option>
                                <option value="3">Green</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={toggle==='addtask' ? handleOnclick : editTask} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSetup