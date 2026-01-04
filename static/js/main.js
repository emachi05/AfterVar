window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js').then(function (registration) {

            //sw OK
            console.log('ServiceWorker registrato correttamente con scope: ', registration.scope);
        },
            function (err) {

                //errore sw 
                console.log('ServiceWorker fallito: ', err);
            });
    }
}

    
function HideVideo(arrow){
        const titlecnt = arrow.parentElement;
        const videocnt = titlecnt.nextElementSibling;

        if(videocnt){
            videocnt.classList.toggle('hidden');
        }

        arrow.classList.toggle('slide');
}

//function to open and close the Profile menu

function ProfileMenu(){
    const dropdown=document.getElementById('profile_dropdown');
    if(dropdown){
        dropdown.classList.toggle('active_dropdown');
    }
}

//functions for vote API
function LikeOrNot(btn, tipo){
    //for take the correct sec
    let container = btn.closest('.interactive_sec');
    let videoId = container.getAttribute('data-id');

    fetch('/api/vota_video', {
        method:'POST',
        headers :  { 'Content-Type': 'application/json' },
        body: JSON.stringify ({ video_id: videoId, tipo:tipo})
    })

    .then(response => response.json())
    .then(data => {
        if(data.success){
            alert('Likes: ' + data.likes + 'Dislikes: ' + data.dislikes);
        }
    });
}

function RightOrNot(btn, scelta){
    //for take the correct sec
    let container = btn.closest('.interactive_sec');
    let videoId = container.getAttribute('data-id');

    fetch('/api/vota_decisione', {
        method:'POST',
        headers :  { 'Content-Type': 'application/json' },
        body: JSON.stringify ({ video_id: videoId, scelta:scelta})
    })

    .then(response => response.json())
    .then(data => {
        if(data.success){
            alert('Punteggio aggiornto: ' + data.nuovo_punteggio);
        }
    });
}

function InviaCommento(btn){
    //for take the correct sec
    let container = btn.closest('.interactive_sec');
    let videoId = container.getAttribute('data-id');
    let input = container.querySelector('.comment_box');
    let testo = input.value;

    //if is empty
    if(!testo)
        return

    fetch('/api/invia_commento', {
        method:'POST',
        headers :  { 'Content-Type': 'application/json' },
        body: JSON.stringify ({ video_id: videoId, testo:testo})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            alert('Commento Inviato Correttamente');
            input.value='';
            input.disabled=true;
            btn.disabled=true;
        }else{
            alert (data.msg);
        }
    });
}
