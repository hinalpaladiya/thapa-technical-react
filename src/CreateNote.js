import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function CreateNote(props) {
    const [expandlinks, setExpandlinks] = useState(false)

    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }
    const expandIt = () => {
        setExpandlinks(true)
    }
    const btoNormal = () => {
        setExpandlinks(false)
    }
    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: '',
            content: ''
        })
    }
    console.log(note);
    return (
        <div className='main_note' onDoubleClick={btoNormal} >
            <form method='post'>
           { expandlinks ? 
                <input type='text' name="title" value={note.title} onChange={InputEvent} placeholder='Title' /> : null}
                <textarea name="content" value={note.content} onChange={InputEvent} onClick={expandIt} placeholder='Write a note...' rows='5' cols='15' />
              { expandlinks ? <Button onClick={addEvent} variant="outlined"><AddIcon className="plus_sign"  /></Button> : null}
            </form>
        </div>
    )
}
export default CreateNote
