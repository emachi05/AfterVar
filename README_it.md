RELAZIONE PROGETTO
AfterVar
Membri: Calabrese Mattia(mat:3168),Chiariello Emanuele(mat:2970),Lanzuise Alfonso(mat: 3054)
Università degli studi “Parthenope” , dipartimento di Informatica
Corso: Tecnologie Web
Anno Accademico: 2025/2026

La piattaforma AfterVar è stata sviluppata per affrontare le polemiche suscitate dall'uso del VAR nel campionato italiano di calcio. Il VAR (Video Assistant Referees) è una tecnologia progettata per assistere gli arbitri nella revisione delle decisioni e nell'utilizzo di filmati video, per avere una visione migliore di ciò che è accaduto in campo. Dopo il fischio finale di una partita, i social media sono sempre inondati di commenti e opinioni contrastanti sulle scelte degli arbitri che controllano il VAR. 
Da qui nasce l'idea alla base di AfterVar. In questa Progressive Web Application l'utente può avere accesso alle riprese ufficiali rilasciate dai membri del VAR ed è possibile fornire un feedback. Per garantire l'affidabilità degli utenti abbiamo creato un sistema di reputazione dinamico. A ogni utente viene assegnato un token di identificazione in base ai punti ottenuti (i “punti reputazione”). Il token verde (utente affidabile) viene assegnato agli utenti con oltre 80 punti di reputazione. Il token giallo viene assegnato agli utenti con una reputazione compresa tra 50 e 80 (utente intermedio), mentre il token rosso viene assegnato agli utenti con meno di 50 punti di reputazione (utente non affidabile).
In base alle carte ricevute vengono applicate varie sospensioni, come ad esempio:
•   2 cartellini gialli accumulati = 1 cartellino rosso
•   1 cartellino rosso diretto = 1 partita di squalifica
•   2 cartellini rossi consecutivi = 3 partite di squalifica
•   3 cartellini rossi consecutivi = 5 partite di squalifica

Il calendario AfterVar segue quello reale della Serie A (38 giornate). Alla fine di ogni stagione i token reputazione vengono ricalibrati verso la media (50) e le schede degli arbitri vengono azzerate. 

Dietro le quinte di questo progetto ci sono Alfonso Lanzuise , Emanuele Chiariello e Mattia Calabrese, studenti di informatica con una grande passione per la tecnologia e il calcio. Nel nostro progetto abbiamo ricoperto 3 ruoli principali:

•    Beckend Developer and Database Architect  : abbiamo gestito il trattamento dei dati , assicurandoci che ogni comunità e ogni commento fosse correttamente archiviato per preservare l'integrità dei dati. Abbiamo progettato e strutturato il database per gestire in modo efficiente utenti , arbitri e incidenti controversi durante le partite. Ci siamo assicurati che fosse possibile avere un ambiente sereno e rispettoso. 

•    Frontend Developer: ci siamo concentrati sul design dell'interfaccia utente, traendo ispirazione dalla grafica ufficiale delle trasmissioni televisive del VAR reale. Il nostro obiettivo principale era quello di creare un'esperienza utente mobile intuitiva, consentendo agli utenti di esprimere il proprio voto con un semplice tocco.

•    Full stack developer e Project Manager: ogni membro del team ha coordinato lo sviluppo di funzionalità specifiche, diminuendo il divario tra la logica di backend e l'interfaccia grafica.

Questo progetto è una PWA sviluppata con PYTHON, utilizzando il framework FLASK per il backend. Abbiamo utilizzato FLASK per gestire le URL, i percorsi e le richieste HTTP e anche per lavorare con i database. Il database che abbiamo utilizzato (SQLAlchemy) è un database relazionale, lo abbiamo utilizzato perché
ci ha permesso di rappresentare dati strutturati utilizzando classi piuttosto che un formato tabulare. Il frontend è stato realizzato utilizzando HTML per realizzare la struttura della pagina web, CSS per lo stile e il layout e JS per gestire le interazioni lato client. Abbiamo deciso di utilizzare JINJA2 per rendere dinamiche le pagine HTML, in modo da poter visualizzare nel frontend i dati provenienti dal backend.

Abbiamo utilizzato il Service Worker per gestire l'accesso alle risorse, migliorando le prestazioni e consentendo l'utilizzo offline dell'
applicazione.

Abbiamo utilizzato il Manifest per impostare l'applicazione come PWA. In questo documento (formato JSON) includiamo informazioni cruciali come nome, nome abbreviato, start_URL, display, icone e colore del tema.

Abbiamo creato 2 cartelle principali: “templates” e “static”. Nella prima abbiamo incluso tutti i file HTML, nell'altra abbiamo inserito: CSS, JS, SW, Manifest, e i media.

Tramite il prompt dei comandi, abbiamo attivato l'ambiente virtuale Python utilizzando il comando “.venv\Scripts\activate”, che abbiamo utilizzato per evitare conflitti con altre librerie installate sul sistema. Successivamente abbiamo utilizzato i comandi “pip install Flask” e "pip install flask flask-sqlalchemy flask-login" e grazie al comando pipe abbiamo installato le librerie necessarie per il nostro progetto, ovvero Flask, Flask-SQLAlchemy e Flask-Login. Una volta attivato l'ambiente virtuale e installate le librerie, l'app è stata attivata grazie all'esecuzione del file Python AfterVar.py. Questo file rappresenta il punto di accesso dell'app e la sua esecuzione avvia il server Flask e rende disponibile l'applicazione web.

L'ordine dei comandi è stato il seguente:

1. C:\>cd Sorgenti

2. C:\Sorgenti>cd Aftervar

3. C:\Sorgenti\AfterVar>.venv\Scripts\activate

4. (.venv) C:\Sorgenti\AfterVar>pip install Flask

5. (.venv) C:\Sorgenti\AfterVar>pip install flask flask-sqlalchemy flask-login

6. (.venv) C:\Sorgenti\AfterVar>python aftervar.py

Il file aftervar.py è l'inizializzazione della PWA e la configurazione principale del progetto.

E otteniamo questa URL: http://127.0.0.1:5000

Abbiamo fatto in modo che l'intero flusso di lavoro “Dal campo al tuo schermo” fosse fluido e uniforme. Volevamo rendere il tifoso il protagonista dello sport più popolare (e forse più bello) del mondo. Il nostro obiettivo era quello di incoraggiare una discussione positiva e trasformare tutte le controversie e le discussioni in un approccio positivo.
