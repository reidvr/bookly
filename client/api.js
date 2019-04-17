import request from 'superagent'

const bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'

export function getBook (searchDetails, callback) {
  request.get(bookUrl + searchDetails)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function appendWidget (widget, callback) {
  request.post(bookUrl)
    .send(widget)
    .end((err, res) => {
      callback(err)
    })
}

export function deleteWidget (widget, callback) {
  request.delete(`${bookUrl}/${widget.id}`)
    .end((err) => {
      callback(err)
    })
}

export function updateWidget (widget, callback) {
  request.put(`${bookUrl}/${widget.id}`)
    .send(widget)
    .end((err) => {
      callback(err)
    })
}
