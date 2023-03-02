import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../styles/books.css'

export default function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/books/" + id)
            window.location.reload() //this can be replaced by state management tools like context or redux
        } catch(err){
            console.log(err)
        }
    }

  return (
    <div>
      <h1 className='main-title'>Books Should be Read..</h1>

      <div className='books-container'>
      {books.map((book) => (
        <div className='books' key={book.id}>
            <div className='cover-container'>
                {book.cover && <img className='cover' height={100} src={`${book.cover}`} alt="" />}
            </div>
            <hr style={{borderColor:'black'}} />
            
            <h4>{book.title}</h4>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <i class="fa-solid fa-tags" style={{paddingLeft: "5px"}}></i>
            <br />
            <div className="update-delete-btn-container">
                <button className='update-btn'><Link  className='update-link-btn' to={`/update/${book.id}`}>Update</Link></button>
                <button className='delete-btn' onClick={()=>handleDelete(book.id)}>Delete</button>
            </div>
            
        </div>
      ))}
      </div>
      
      <div className='add-btn-container'>
        <button className='add-btn'><Link className='add-link-btn' to="/add">Add new book</Link></button>
      </div>
      
    </div>
  )
}
