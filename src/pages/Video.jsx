import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Video(props) {

    const [text, setText] = useState('');
    const navigate = useNavigate();
    const handleChange = ( e ) => {
        setText( e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setText('');
        navigate(`/videos/${text}`);

    }

    return (
        <div>Video
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='id 입력' value={text} onChange={handleChange}/>
            </form>
        </div>
    );
}

