from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/posts/", methods=["GET"])
def posts():
    if request.method == "GET":
        return render_template("posts.html")

@app.route("/posts/<post>", methods=["GET"])
def post(post):
    return render_template("perms-n-combs.html")


@app.route("/cv")
def cv():
    return render_template("cv.html")


@app.route("/books")
def books():
    return render_template("books.html")


@app.route("/lists")
def lists():
    return render_template("lists.html")


if __name__ == "__main__":
    app.run(debug=True, port=5001)
