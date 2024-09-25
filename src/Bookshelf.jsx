import { useState } from 'react'

const BookShelf =() => {
const [books, setBook] = useState([])
const [title, setTitle] = useState('')
const [author, setAuthor] = useState('')

    
}

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>

export default BookshelfD;