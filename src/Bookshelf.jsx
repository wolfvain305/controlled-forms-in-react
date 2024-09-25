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
    {books.map((book, index) => (
        <div key={index} className='bookCard'>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
        </div>
    ))}
</div>
</div>
)
}

export default BookShelf;