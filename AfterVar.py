from flask import Flask,render_template

app = Flask(__name__)


#Main Menu ON TOP

@app.route('/')

def HomePage():
    return render_template('home.html')

@app.route('/episodi')

def Episodi():
    return render_template('episodi.html')

@app.route('/classifica')

def Classifica():
    return render_template('classifica.html')

@app.route('/arbitri')

def Arbitri():
    return render_template('arbitri.html')

@app.route('/regolamento')

def Regolamento():
    return render_template('regolamento.html')

@app.route('/notizie')

def Notizie():
    return render_template('notizie.html')



#MENU IN FOOTER
@app.route('/aboutus')

def About_Us():
    return render_template('aboutus.html')


