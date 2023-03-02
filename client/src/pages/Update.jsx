import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'

export default function Update() {
  const [book, setBooks] = useState({
    title: '',
    desc: '',
    price: null,
    cover: ''
  })

  const navigate = useNavigate ()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBooks(prev=>({...prev, [e.target.name]: e.target.value}))
  };

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(book)

  return (
    <>
      <h1 className='main-title'>Update</h1>
      <div className='form-container'>
        <div className='form'>
          <input type="text" placeholder='title' onChange={handleChange} name='title'/>
          <input type="text" placeholder='description' onChange={handleChange} name='desc'/>
          <input type="number" placeholder='price' onChange={handleChange} name='price'/>
          <input type="text" placeholder='link of the cover image' onChange={handleChange} name='cover'/>
          
          <div className='add-btn-container'>
            <button onClick={handleClick} className='add-btn'>Update the book</button>
          </div>
        </div>
      </div>
    </>
  )
}
