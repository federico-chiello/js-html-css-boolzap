// **** Milestone 1 *****
// ● Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse.
// ● Visualizzazione dinamica della lista contatti: tramite l a direttiva v-for, visualizzare nome e immagine di ogni contatto.
// ***** Milestone 2 *****
// ● Visualizzazione dinamica dei messaggi: t ramite l a direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione.
// ● Click sul contatto mostra l a conversazione del contatto cliccato.
// ***** Milestone 3 *****
// ● Aggiunta di un messaggio: l ’utente scrive un testo nella parte bassa e digitando “enter” i l testo viene aggiunto al thread sopra, come messaggio verde.
// ***** Milestone 4 *****
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina).

var app = new Vue ({
  el: '#boolzap',
  data: {
    sender: [
      {
        name: 'Federico',
        image: 'img/avatar_2.jpg'
      }
    ],
    contacts: [
      {
        name: 'Lorenzo',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages: [
          {
            date: '18/01/2021 16:30:00',
            text: 'Sei andato al supermercato?',
            status: 'sent'
          },
          {
            date: '18/01/2021 16:35:16',
            text: 'Sì, ho già comprato tutto il necessario per la torta.',
            status: 'received'
          },
          {
            date: '18/01/2021 16:38:10',
            text: 'Va bene, a più tardi.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Giulia',
        avatar: 'img/avatar_io.jpg',
        visible: true,
        messages: [
          {
            date: '01/02/2021 11:00:00',
            text: 'Vorresti andare a correre al parco questo pomeriggio?',
            status: 'sent'
          },
          {
            date: '01/02/2021 11:35:28',
            text: 'Va bene. A che ora ci vediamo?',
            status: 'received'
          },
          {
            date: '01/02/2021 11:37:06',
            text: 'Ti andrebbe alle 18:00?',
            status: 'sent'
          },
          {
            date: '01/02/2021 11:38:30',
            text: 'Ti do la mia conferma.',
            status: 'received'
          }
        ],
      },
      {
        name: 'Alessio',
        avatar: 'img/avatar_3.jpg',
        visible: true,
        messages: [
          {
            date: '24/03/2021 17:10:00',
            text: 'Stasera andiamo in pizzaeria?',
            status: 'received'
          },
          {
            date: '24/03/2021 17:13:20',
            text: 'Oggi non mi sento tanto bene. Ho la febbre.',
            status: 'sent'
          },
          {
            date: '24/03/2021 17:15:08',
            text: 'Mi dispiace. Buona guarigione.',
            status: 'received'
          }
        ],
      },
      {
        name: 'Riccardo',
        avatar: 'img/avatar_4.jpg',
        visible:true,
        messages: [
          {
            date: '23/05/2021 10:00:00',
            text: 'Hai superato l\'ultimo esame?',
            status: 'sent'
          },
          {
            date: '23/05/2021 10:03:30',
            text: 'Si, ho sostenuto tutti gli esami del corso. Dalla prossima settimana inizierò la tesi di laurea.',
            status: 'received'
          },
          {
            date: '23/05/2021 10:04:10',
            text: 'Benissimo. Ti faccio tanti auguri!',
            status: 'sent'
          }
        ],
      }
    ],
    counter: 0,
    messageUser: '',
    textUser: ''
  },
  methods: {
    chooseContact(index){
      this.counter = index;
      // if (this.contatore < this.contacts.length) {
      //   this.adressee = [];
      //   this.adressee.push(this.contacts[index]);
      //   // console.log(this.adressee);
      // }
      // console.log(this.contatore);
    },
    sendMessage(){
      this.contacts[this.counter].messages.push({ text: this.messageUser, date: moment().calendar()});
      this.messageUser = '';
      setTimeout(this.receivedMessage,1000);
    },
    receivedMessage() {
      this.contacts[this.counter].messages.push({text: 'Ok', date: moment().calendar(), status: 'received'});
    },
    searchUsers(){
      this.contacts.forEach((item) => {

      });
    }

  }
});
