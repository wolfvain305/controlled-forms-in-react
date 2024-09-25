import { useState } from 'react'

const BookShelf =() => {
const [books, setBooks] = useState([])
const [title, setTitle] = useState('')
const [author, setAuthor] = useState('')

const handleAddBook = (e) => {
    e.preventDefault()
    if (title && author) {
        const newBook = { title, author }
        setBooks([...books, newBook])
        setTitle('')
        setAuthor('')
    }
}
return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleAddBook}>
        <input
        type="text" placeholder='Book Title' value={title} onChange={(e) => setTitle(e.target.value)} required
        />
        <input
        type="text" placeholder='Author' value={author} onChange={(e) => setTitle(e.target.value)} required
        />
        <button type="submit">Add Book</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    {/* Book cards will display here */}
</div>
</div>

)

export default BookshelfD;
}
