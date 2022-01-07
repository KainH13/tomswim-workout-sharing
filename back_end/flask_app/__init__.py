from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.secret_key = "keep secret in production"