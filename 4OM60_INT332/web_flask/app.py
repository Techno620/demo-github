from flask import Flask, request

app=Flask(__name__)
@app.route('/',methods=["GET","POST"])

def home():
    if request.method=="POST":
        name=request.form.get('name')
        email=request.form.get('email')
        return f"Hello {name},your email id {email}"

    return '''
        <h1>Details of User</h1>
        <form method="POST">
            Name:
            <input type='name' name='name'><br>
            Email:
            <input type='email' name='email'><br>
            <input type='submit' value='submit'>
        </form>

    '''


if __name__=="__main__":
    app.run(host='0.0.0.0',port='5000')


