from flask_app.config.mysqlconnection import connectToMySQL

class User:
    db = "tomswim_db"
    def __init__(self, data):
        self.id = data['id']
        self.username = data['username']
        self.email = data['email']
        self.password = data['password']
        self.about = data['about']
        self.profile_img = data['profile_img']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # Create
    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (username, email, password) VALUES(%(username)s, %(email)s, %(password)s);"
        return connectToMySQL(cls.db).query_db(query, data)

    # Read
    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users;"
        return connectToMySQL(cls.db).query_db(query)

    @classmethod
    def get_all_emails(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.db).query_db(query)
        all_emails = []
        for entry in results:
            all_emails.append(entry['email'])
        return all_emails

    # Update
    @classmethod
    def update_user_by_id(cls, data):
        query = "UPDATE users SET username=%(username)s, about=%(about)s WHERE id=%(id)s;"
        return connectToMySQL(cls.db).query_db(query, data)

    # Delete
    @classmethod
    def delete_user_by_id(cls, data):
        query = "DELETE FROM users WHERE id=%(id)s;"
        return connectToMySQL(cls.db).query_db(query, data)