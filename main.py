import os
from flask import Flask, render_template, url_for
from jinja2 import FileSystemLoader
import json
app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/grundlegende-befehle')
def grundlegende_befehle():
    template_dirs = [
    os.path.join(app.root_path, 'templates'),
    os.path.join(app.root_path, 'sites/grundlegende_befehle')
    ]
    app.jinja_loader = FileSystemLoader(template_dirs)
    static_folder = os.path.join(app.root_path, 'static')
    with open('sites/grundlegende_befehle/grundlegende-befehle.json') as f:
       tasks = json.load(f)
    return render_template('grundlegende-befehle.html', tasks=tasks)

if __name__ == '__main__':
    app.run(debug=True)