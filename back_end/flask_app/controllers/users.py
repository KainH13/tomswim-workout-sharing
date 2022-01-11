from flask_app.models.user import User
from flask_app import app
from flask import jsonify, request
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# Create
@app.route('/api/user/register', methods=['POST'])
def create_user():
    pw_hash = bcrypt.generate_password_hash(request.json["password"])
    data = {
        "username": request.json["username"],
        "email": request.json["email"],
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

# Update
@app.route('/api/user/update', methods=['POST'])
def update_user():
    data = {
        "id": request.json["id"],
        "username": request.json["username"],
        "about": request.json["about"],
    }
    return jsonify(User.update_user_by_id(data))

# Delete
@app.route('/api/user/delete', methods=['POST'])
def delete_user():
    data = {"id": request.json["id"]}
    return jsonify(User.delete_user_by_id(data))