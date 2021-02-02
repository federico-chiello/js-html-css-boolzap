// Milestone 1
// ● Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse.
// ● Visualizzazione dinamica della lista contatti: tramite l a direttiva v-for, visualizzare nome e immagine di ogni contatto.

var app = new Vue ({
  el: '#boolzap',
  data: {
    name: 'Sofia',
    avatar: 'img/avatar_io.jpg',
    contacts: [
      {
        name: 'Lorenzo',
        avatar: '_1',
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
        name: 'Francesco',
        avatar: '_2',
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
        avatar: '_3',
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
        avatar: '_4',
        visible: true,
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
    adressee:[]
  }
});
