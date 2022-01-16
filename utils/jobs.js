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
    over: false
  },
  {
    name: 'PETRA CENTRAL',
    picture: require('./../static/petraCentral.jpeg'),
    description:
      'Petra central is a SPA making with Nuxt(Vue) this application get all emergences send by PETRA APP and manages them according to urban security protocols',
    technologies: [
      'Vue',
      'Nuxt',
      'Bulma',
      'Adonis(Node, share backend whit PETRA APP)',
      'Google Apis'
    ],
    over: false
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
    over: false
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
    over: false
  },
  {
    name: 'HomeWatcher App',
    picture: require('./../static/homeWarcherApp.png'),
    description:
      "HomeWatcher's an mobile app maked using react-native modern standarts with hooks and expo client. this app share a position point at the map for a emergence central",
    technologies: [
      'React Native',
      'Expo',
      'Firebase(Live updates)',
      'Google Apis'
    ],
    over: false
  },
  {
    name: 'HomeWatcher Central',
    picture: require('./../static/homeWatcherCentral.png'),
    description:
      'HomeWatcher central is a SPA making with Nuxt(Vue) this application get all emergences send by HomeWatcher and manages them according to urban security protocols',
    technologies: [
      'Vue',
      'Nuxt',
      'Bulma',
      'Google Apis',
      'Firebase(Live Updates)'
    ],
    over: false
  }
]

export default jobs
