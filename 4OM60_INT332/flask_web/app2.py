from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        name = request.form.get("name")
        address = request.form.get("address")
        return f"Hello {name}, your address is {address}"

    return '''
        <h2>Enter Details</h2>
        <form method="post">
            Name: <input type="text" name="name"><br><br>
            Address: <input type="text" name="address"><br><br>
            <input type="submit">
        </form>
    '''

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)