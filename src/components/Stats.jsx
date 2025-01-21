import React from "react"
import { ProgressBar } from "react-bootstrap"

function Stats({ books }) {
  const totalBooks = books.length
  const readBooks = books.filter((book) => book.status === "Read").length
  const progress = totalBooks > 0 ? (readBooks / totalBooks) * 100 : 0

  return (
    <div className="my-4">
      <h5>Reading Progress</h5>
      <ProgressBar now={progress} label={`${progress.toFixed(0)}%`} />
      <p>
        {readBooks} of {totalBooks} books read.
      </p>
    </div>
  )
}

export default Stats
