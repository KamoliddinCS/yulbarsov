from flask import Flask, render_template, request
import requests


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/posts")
def posts():
    return render_template("posts.html")


@app.route("/cv")
def cv():
    return render_template("cv.html")


@app.route("/books/")
def books():
    books = requests.get("https://api.npoint.io/524d5701cca13cd35077").json().get("books")
    return render_template("books.html", books=books)


@app.route("/books/<int:book_id>")
def book(book_id):
    books = requests.get("https://api.npoint.io/524d5701cca13cd35077").json().get("books")
    book = books[book_id]
    return render_template("book.html", book=book)


@app.route("/lists")
def lists():
    return render_template("lists.html")


if __name__ == "__main__":
    app.run(debug=True, port=5001)
