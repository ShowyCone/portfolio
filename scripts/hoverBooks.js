const infoProjectBook = document.querySelectorAll(
  '.section3-inventory .item-box'
)

infoProjectBook.forEach((book) => {
  if (book.firstElementChild) {
    mouseHoverProjectBook(book)
  }
})

function mouseHoverProjectBook(book) {
  book.addEventListener('mouseenter', (e) => {
    setTimeout(() => {
      let x = e.clientX - book.offsetLeft
      let y = e.clientY - book.offsetTop
      book.firstElementChild.style = `display: block; top: -200%; left: 100%;`
    }, 50)
  })

  book.addEventListener('mouseleave', (e) => {
    book.firstElementChild.style = 'display: none'
  })
}
