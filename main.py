from flask import Flask, render_template

app = Flask(__name__, static_folder='static')


@app.route('/')
def index():
    return render_template('index.html')
@app.route('/grundlegende-befehle')
def grundlegende_befehle():
    tasks = [
    {
        'number': 1,
        'title': 'Verzeichnis wechseln',
        'tutorial': '../tutorial/cd.html',
        'question': 'Wie wechseln Sie in das Verzeichnis /home/user?',
        'answers': ['cd /home/user', 'cd /home/user/'],
        'input_id': 'gb1',
        'button_id': 'gb1-button',
        'result_id': 'gb1-result'
    },
    {
        'number': 2,
        'title': 'Home-Verzeichnis wechseln',
        'tutorial': '',
        'question': 'Wie wechseln Sie in das Home-Verzeichnis des aktuellen Benutzers?',
        'answers': ['cd ~', 'cd'],
        'input_id': 'gb2',
        'button_id': 'gb2-button',
        'result_id': 'gb2-result'
    },
    {
        'number': 3,
        'title': 'Dateien im aktuellen Verzeichnis anzeigen',
        'tutorial': '../tutorial/ls.html',
        'question': 'Wie zeigen Sie die Dateien im Aktuellen Verzeichnis an? (bitte nur den Befehl ohne zusätzliche optionen)',
        'answers': ['ls', 'ls .'],
        'input_id': 'gb3',
        'button_id': 'gb3-button',
        'result_id': 'gb3-result'
    },
    {
        'number': 4,
        'title': 'Dateien im Verzeichnis /usr/local/bin anzeigen',
        'tutorial': '',
        'question': 'Wie zeigen Sie die Dateien im Verzeichnis /usr/local/bin an? (bitte nur den Befehl ohne zusätzliche optionen)',
        'answers': ['ls /usr/local/bin', 'ls /usr/local/bin/'],
        'input_id': 'gb4',
        'button_id': 'gb4-button',
        'result_id': 'gb4-result'
    },
    {
        'number': 5,
        'title': 'Alle Dateien inklusive versteckter Dateien im aktuellen Verzeichnis anzeigen',
        'tutorial': '',
        'question': 'Wie zeigen Sie die Dateien inklusive aller versteckten Dateien im aktuellen Verzeichnis an?',
        'answers': ['ls -a', 'ls . -a'],
        'input_id': 'gb5',
        'button_id': 'gb5-button',
        'result_id': 'gb5-result'
    },
    {
        'number': 6,
        'title': 'Aktuelles Verzeichnis anzeigen',
        'tutorial': '../tutorial/pwd.html',
        'question': 'Wie zeigen Sie das aktuelle Verzeichnis an, in dem Sie sich befinden?',
        'answers': ['pwd'],
        'input_id': 'gb6',
        'button_id': 'gb6-button',
        'result_id': 'gb6-result'
    }
    ]
    return render_template('grundlegende-befehle.html', tasks=tasks)

if __name__ == '__main__':
    app.run(debug=True)