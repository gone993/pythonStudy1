from flask import Flask
from nago.admin.controllers import admin
from nago.main.controllers import main

app = Flask(__name__)

app.register_blueprint(admin, url_prefix='/admin')
app.register_blueprint(main, url_prefix='/')