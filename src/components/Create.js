import './Create.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useDateTime from './../hooks/useDateTime';
import { useFetch } from '../hooks/useFetch';


const Create = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory()
    const { day, formattedMonth, year, hour, min } = useDateTime()

    let timestamp = `${ day } ${ formattedMonth } ${ year } at ${ hour }:${ min }`;

    const { postData, data } = useFetch('http://localhost:3000/blogs', 'POST')

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ title, body, author, timestamp, id: Math.random() })
        setTimeout(() => { history.push('/') }, 500)
    }



    return (

        <div className="create-container">
            <h2 className="create-title">Create a Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="form-title">Title:</label>
                <input type="text" id="form-title" className="form-title" required autoFocus onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="form-author">Author:</label>
                <input type="text" id="form-author" className="form-author" required onChange={(e) => setAuthor(e.target.value)} />
                <label htmlFor="form-body">Content:</label>
                <textarea id="form-body" required rows="20" onChange={(e) => setBody(e.target.value)}></textarea>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>

    );
}

export default Create;