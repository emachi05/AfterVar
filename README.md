# AfterVar
PROJECT REPORT
AfterVar
Members: Calabrese Mattia(mat:3168),Chiariello Emanuele(mat:2970),Lanzuise Alfonso(mat: 3054)
University of studies “Parthenope” , department of Informatics
Course: Tech Web
Academic Year: 2025/2026


The AfterVar platform was developed to face the controversy created by the use of VAR in the Italian football championship. The VAR(Video Assistant Referees) is a technology designed to assist the referees by reviewing decision and using video footage , to have a better view of what happened on the pitch. After the final whistle of a match, the social medias are always flooded with comments and conflicting opinions regarding the choices made by the referees who control the VAR. 
From here starts the idea behind AfterVar. In this Progressive Web Application the user can have access to the official footage released by the VAR members, and it’s possible to give feedback. To ensure the reliability of users we created a dynamic reputation system. Each user is assigned an identification Token based on their points scored (the “Reputation points”). The green token  (Trusted user) is given to user with over 80 points of Reputation. The yellow token is given to user with a Reputation between 50 and 80(Intermediate user), and a red token is given to a user with less then 50 points of Reputation (Untrusted user).

Based on the cards received various suspensios are applied, sush as:
•	2 accumulated yellows cards = 1 red card
•	1 straight red = 1-match ban
•	2 consecutive reds= 3-match ban
•	3 consecutive reds = 5-match suspensios

The AfterVar schedule follows the real Serie A calendar (38 Matchdays). At the end of each season the reputation tokens are recalibrated towards the average (50) and the referee cards are reset to zero. 

	Behind the work of these project there are Alfonso Lanzuise , Emanuele Chiariello and Mattia Calabrese who are IT students  with a great passion for technology and football. In our project there was 3 main roles that we covered:

•	Beckend Developer and Database Architect : we managed the data handling , ensuring that every community and comment was correctly stored to preserve data integrity. We designed and structured the database to efficiently manage users , referees and controversial match incidents. We made sure that was possible to have a peaceful and respectful environment. 

•	Fronted Developer: we focused on the UI design , drawing inspiration from the official TV broadcast graphics of the real VAR. Our primary goal was to create an intuitive mobile user experience, enabling users to cast their votes with a simple tap.

•	Full stack developer and Project Manager: each team member coordinated the development of specific features , connecting the gap between backend logic and the graphical interface.

This project is a PWA developed with PYTHON, using the framework FLASK for the backend.We used FLASK to manage the URL, the routes and the HTTP requests and also to work with Databases.The Database we used(SQLAlchemy) is a Relational Database, we used this because
he let us to represent structured data using classes rather than a tabular format.The frontend was made using HTML to realize the structure of the web page, CSS for the style and layout and JS to manage the interactions client-side. We decided to employ JINJA2 to make the HTML pages dynamic, so that it's possible to visualize in the frontend the data coming from backend.

We used the Service Worker to manage the access to the resources, improving the performance and enabling offline usage of the
application.

We used the Manifest to set the application as a PWA. In this document(JSON format) we include crucial pieces of information as name, shortname,start_URL, display , the icons and the theme color.

We created 2 main folders:"templates" and "static". In the first one we included all the HTML files.In the other one we insert:CSS,JS,SW,Manifest,media.

Via the command prompt, we activated the Python virtual environment,by using the command ".venv\Scripts\activate", we used that to avoid conflicts with other libraries installed on the system.Subsequently we used this command "pip install Flask" and "pip install 
flask flask-sqlalchemy flask-login" and thanks to che command pipe we installed the necessary libraries for our project as Flask, Flask-SQLAlchemy and Flask-Login. When the virtual envirnoment was activated and the libraries installed, the app is activated thanks to the execution of the file Python AfterVar.py. This file represent the access point of the app and his execution starts the Flask server and make available the web application.

The order of the commands was this one:
1. C:\>cd Sorgenti

2. C:\Sorgenti>cd Aftervar

3. C:\Sorgenti\AfterVar>.venv\Scripts\activate

4. (.venv) C:\Sorgenti\AfterVar>pip install Flask

5. (.venv) C:\Sorgenti\AfterVar>pip install flask flask-sqlalchemy flask-login

6. (.venv) C:\Sorgenti\AfterVar>python aftervar.py

The aftervar.py file is the initialization of the PWA and the main configuration of the project.

And we get this URL : http://127.0.0.1:5000


We ensured that the entire “From Pitch to Your Screen “ workflow was fluid and uniform. We wanted to make the fan the main character of the most popular (and maybe most beautiful) sport in the world. Our goal was to encourage positive discussion and transform all the controversies and arguments in a positive approach.
