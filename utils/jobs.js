const jobs = [
  {
    name: 'PETRA APP',
    picture: require('./../static/petraApp.jpeg'),
    description:
      "Petra's an mobile app maked using react-native principally class components. this app share a position point at the map for a emergence central",
    technologies: [
      'React Native',
      'Stripe',
      'Native Base',
      'Google Apis',
      'Adonis(Node, for backend)'
    ],
    over: false,
    morePictures: [
      require('./../static/petraa1.png'),
      require('./../static/petraa2.png')
    ]
  },
  {
    name: 'PETRA CENTRAL',
    picture: require('./../static/petraCentral.jpeg'),
    description:
      'Petra central is a SPA maked with Nuxt(Vue) this application get all emergences send by PETRA APP and manages them according to urban security protocols',
    technologies: [
      'Vue',
      'Nuxt',
      'Bulma',
      'Adonis(Node, share backend whit PETRA APP)',
      'Google Apis'
    ],
    over: false,
    morePictures: []
  },
  {
    name: 'Scute',
    picture: require('./../static/scuteWeb.jpeg'),
    description: "Scute's a twitter clone, users at Scute can to share their drawings and other types of art's",
    technologies: [
      'Vue',
      'Bulma',
      'Nuxt',
      'Adonis(Node, for backend)'
    ],
    over: false,
    morePictures: [
      require('./../static/scutew2.jpg'),
      require('./../static/scutew3.jpg')
    ]
  },
  {
    name: 'Blob',
    picture: require('./../static/blob.png'),
    description: "Blob's an a application for students, students can to make a study session and share whit their schoolmates",
    technologies: [
      'React Native',
      'Google Apis',
      'Firebase(Live Chat)'
    ],
    over: false,
    morePictures: [
      require('./../static/b1.png'),
      require('./../static/b2.png'),
      require('./../static/b3.png')
    ]
  },
  {
    name: 'HomeWatcher App',
    picture: require('./../static/homeWarcherApp.png'),
    description:
      "HomeWatcher's a mobile app maked using react-native modern standars with hooks and expo client. this app share a position point at the map for a emergence central",
    technologies: [
      'React Native',
      'Expo',
      'Firebase(Live updates)',
      'Google Apis'
    ],
    over: false,
    morePictures: []
  },
  {
    name: 'HomeWatcher Central',
    picture: require('./../static/homeWatcherCentral.png'),
    description:
      'HomeWatcher central is a SPA maked with Nuxt(Vue) this application get all emergences send by HomeWatcher and manages them according to urban security protocols',
    technologies: [
      'Vue',
      'Nuxt',
      'Bulma',
      'Google Apis',
      'Firebase(Live Updates)'
    ],
    over: false,
    morePictures: []
  },
  {
    name: 'Control Tower',
    picture: require('./../static/ct2.png'),
    description: "Control Tower's a mobile app maked at React Native for internal deliveries and route monitoring",
    technologies: [
      'React Native',
      'i18next',
      'Geolocalization',
      'Google Apis',
      'Qr'
    ],
    over: false,
    morePictures: [
      require('../static/ct1.png'),
      require('./../static/ct3.png')
    ]
  },
  {
    name: 'Busco',
    picture: require('./../static/busco.jpeg'),
    description: 'Busco is a mobile app maked for to find local businesses like a bulleting board',
    technologies: [
      'React Native',
      'Geolocalization',
      'Google Apis'
    ],
    over: false,
    morePictures: [
    ]
  }
]

export default jobs
