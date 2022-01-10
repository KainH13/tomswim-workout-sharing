from flask_app.models.user import User
from flask_app import app
from flask import jsonify, request
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# Create
@app.route('/api/user/register', methods=['POST'])
def create_user():
    pw_hash = bcrypt.generate_password_hash(request.args["password"])
    data = {
        "username": request.args["username"],
        "email": request.args["email"],
        "password": pw_hash,
    }
    
    return jsonify(User.create(data))

# Read
@app.route('/api/users')
def all_users():
    return jsonify(User.get_all_users())

@app.route('/api/users/emails')
def all_emails():
    return jsonify(User.get_all_emails())

# @app.route('/users')
# def users():
#     return jsonify(User.get_all_json())

# @app.route('/create/user', methods=['POST'])
# def create_user():
#     print(request.form)
#     data = {
#         'user_name' : request.form['user_name'],
#         'email' : request.form['email']
#     }
#     return jsonify(User.save(data))
    