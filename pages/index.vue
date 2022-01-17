<template>
  <div>
    <div
      style="width: 100%;"
    >
      <Nigth v-if="nigth && nigth !== ''" />
      <Day v-if="!nigth && nigth !== ''" />
    </div>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <div
            class="box mt-5"
            :style="{ backgroundColor: nigth ? '#211C2F' : 'white'}"
          >
            <div class="columns is-centered">
              <div class="column is-12" style="display: flex; justify-content: center;">
                <div id="avatar" />
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-half">
                <h1
                  :style="{ color: !nigth ? '#211C2F' : 'white'}"
                  class="title is-3 has-text-centered"
                >
                  Antonio C Guzmán
                </h1>
                <h2
                  :style="{ color: !nigth ? '#211C2F' : 'white'}"
                  class="title is-5 has-text-centered"
                >
                  Frontend Developer
                </h2>
              </div>
            </div>
            <div class="columns is-centered is-mobile">
              <div
                v-for="(social, index) in socials"
                class="column is-2"
                :key="index"
              >
                <a :href="social.url" target="_blank">
                  <img
                    :src="social.source"
                    style="width: 25px; height: 25px;"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-9">
          <div class="columns is-multiline">
            <div
              v-for="(job, index) in jobs"
              :key="index"
              class="column is-6"
            >
              <div
                class="box"
                :style="{ backgroundColor: nigth ? '#211C2F' : 'white'}"
                @mouseover="overedElement(index, true)"
                @mouseleave="overedElement(index, false)"
              >
                <div
                  :class="!job.over ? 'box-image-content' : 'box-image-content-hovered'"
                  :style="{ 'background-image': 'url(' + job.picture + ')' }"
                />
                <div
                  v-if="job.over"
                  class="columns mt-3"
                >
                  <div class="column is-12">
                    <h2
                      :style="{ color: !nigth ? '#211C2F' : 'white'}"
                      class="title is-5"
                    >
                      {{ job.name }}
                    </h2>
                    <p
                      :style="{ color: !nigth ? '#211C2F' : 'white'}"
                      class="is-size-5 mb-5"
                    >
                      {{ job.description }}
                    </p>
                    <span
                      v-for="(technologie, index) in job.technologies"
                      class="tag is-primary mx-1"
                      :key="index"
                    >
                      {{ technologie }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <div
                 class="box"
                  :style="{ backgroundColor: nigth ? '#211C2F' : 'white'}"
              >
                <h2
                  :style="{ color: !nigth ? '#211C2F' : 'white'}"
                  class="title is-2"
                >
                  About me
                </h2>
                <p
                  :style="{ color: !nigth ? '#211C2F' : 'white'}"
                  class="is-size-5"
                >
                  Im have three years of experience
                  at development technological solutions with technologies like
                  React, React-Native, Vue and Adonis framework based in node;
                  Experience at management virtual machines based on linux like
                  ubuntu server or debian 9 using Digital Ocean; Experience at cloud microservices
                  like stripe, Google Cloud Apis, Facebook and twitter Apis.
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <div
                class="box"
                :style="{ backgroundColor: nigth ? '#211C2F' : 'white'}"
              >
                <h2
                  :style="{ color: !nigth ? '#211C2F' : 'white'}"
                  class="title is-2"
                >
                  Expertise
                </h2>
                <div
                  v-for="(expertise, index) in expertises"
                  class="columns is-vcentered is-mobile"
                  :key="index"
                >
                  <div class="column is-2">
                    <img
                      :src="expertise.source"
                      style="width: 60px; height: 60px;"
                    />
                  </div>
                  <div class="column is-10">
                    <progress :class="expertise.class" :value="expertise.expertise" max="100"></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <a
            class="twitter-timeline"
            data-height="900"
            :data-theme="nigth ? 'dark' : 'light'"
            href="https://twitter.com/TopCat34744994?ref_src=twsrc%5Etfw"
          >
            Tweets by TopCat34744994
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/-5KAN9_CzSA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;
            autoplay; clipboard-write;
            encrypted-media; gyroscope;
            picture-in-picture;"
            allowfullscreen
          />
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-half">
          <h3
            :style="{ color: !nigth ? '#211C2F' : 'white'}"
            class="title is-2 has-text-centered"
          >
            Community
          </h3>
          <h3
            :style="{ color: !nigth ? '#211C2F' : 'gray'}"
            class="title is-5 has-text-centered"
          >
            *Coming soon*
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Day from '../components/day.vue'
import Nigth from '../components/nigth.vue'
import jobs from '../utils/jobs'
export default {
  name: 'IndexPage',
  components: { Day, Nigth },
  data () {
    return {
      nigth: '',
      jobs,
      socials: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/TopCat34744994',
          source: require('../static/twitterLogo.png')
        },
        {
          name: 'Linkedinn',
          url: 'https://www.linkedin.com/in/antonio-celaya-a0885b19a/',
          source: require('../static/linkedinnLogo.png')
        },
        {
          name: 'Mail',
          url: 'mailto:antoniocelaya@scuteapp.com?subject="Contacto"&body="Me gustaría poder trabajar contigo"',
          source: require('../static/mailLogo.png')
        }
      ],
      expertises: [
        {
          name: 'React Native',
          source: require('../static/react-native-logo.png'),
          expertise: 100,
          class: 'progress is-info'
        },
        {
          name: 'React',
          source: require('../static/react.png'),
          expertise: 90,
          class: 'progress is-info'
        },
        {
          name: 'Vue',
          source: require('../static/vueJS.png'),
          expertise: 80,
          class: 'progress is-success'
        },
        {
          name: 'Adonis',
          source: require('../static/13810373.png'),
          expertise: 75,
          class: 'progress is-warning'
        }
      ]
    }
  },
  mounted () {
    this.getTime()
    setInterval(() => {
      this.getTime()
    }, 120000)
  },
  methods: {
    getTime () {
      let hour = moment().format('HH')
      hour = parseInt(hour)
      if (hour < 18 && hour > 6) {
        this.nigth = false
        document.body.style.background = 'white'
      } else if (hour >= 18 || hour <= 6) {
        this.nigth = true
        document.body.style.background = '#373C94'
      }
    },
    overedElement (index, over) {
      const newElement = {
        ...this.jobs[index],
        over
      }
      setTimeout(() => {
        this.jobs.splice(index, 1, newElement)
      }, !over ? 200 : 0)
    }
  }
}
</script>
<style scoped>
#avatar {
background-image: url('../static/antonio.jpg');
background-position: center;
background-size: cover;
width: 128px;
height: 128px;
border-radius: 128px;
}
.box-image-content {
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6
}
.box-image-content-hovered {
  opacity: 1;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
body {
  backgroundColor: red;
}
</style>
