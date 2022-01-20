<template>
  <div style="max-width: 100%; overflow: hidden;">
    <div style="width: 100%; max-width: 100%; overflow-x: hidden;">
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
                <div
                  style="width: 128px; height: 128px; display: flex; justify-content: center; align-items: center"
                >
                  <div
                    v-lazy:background-image="require('./../static/antonio.jpg')"
                    id="avatar"
                  />
                  </div>
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
            <div
              class="columns is-centered is-mobile"
              style="width: 100%; display: flex; justify-content: center;"
            >
              <div
                v-for="(social, index) in socials"
                :key="index"
                style="margin: 12px;"
              >
                <a :href="social.url" target="_blank">
                  <img
                    v-lazy="social.source"
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
                  style="display: flex; align-items: center; justify-content: center; width: 100%;"
                  :style="{height: job.over ? 150 : 300}"
                >
                  <div
                    :class="!job.over ? 'box-image-content' : 'box-image-content-hovered'"
                    v-lazy:background-image="job.picture"
                  />
                </div>
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
                    <button
                      @click="renderModal(true, job)"
                      class="button is-success is-fullwidth mt-4"
                    >
                      Ver más
                    </button>
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
                  class="columns is-vcentered is-mobile is-gapless"
                  :key="index"
                >
                  <div class="column is-3">
                    <div style="width: 60px; height: 60px; align-items: center; justify-content: center;">
                      <img
                        v-lazy="expertise.source"
                        class="expertiseImg"
                      />
                    </div>
                  </div>
                  <div class="column is-9 is-half">
                    <progress :class="expertise.class" :value="expertise.expertise" max="100"></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div
            class="box"
            :style="{ backgroundColor: nigth ? '#211C2F' : 'white'}"
          >
            <div class="columns">
              <div class="column is-12">
                <div
                  v-for="(repository, index) of repositories"
                  class="columns is-mobile is-vcentered"
                  :key="index"
                >
                  <div class="column is-3">
                    <img
                      v-lazy="repository.image"
                      style="width: 45px; height: 45px;"
                    />
                  </div>
                  <div class="column is-9">
                    <a
                      :style="{ color: !nigth ? '#211C2F' : 'white'}"
                      class="title is-4"
                      :href="repository.url"
                      target="_blank"
                    >
                      {{ repository.name }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      <div  style="padding: 15px;" />
    </div>
    <ModalDetail
      v-if="openModal"
      :closeModal="renderModal"
      :detailObject="defaultJob"
      :nigth="nigth"
    />
  </div>
</template>

<script>
import moment from 'moment'
import Day from '../components/day.vue'
import Nigth from '../components/nigth.vue'
import jobs from '../utils/jobs'
import ModalDetail from '../components/modalDetails.vue'
export default {
  name: 'IndexPage',
  components: { Day, Nigth, ModalDetail },
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
      ],
      openModal: false,
      defaultJob: {
        name: '',
        picture: '',
        description: '',
        technologies: []
      },
      repositories: [
        {
          name: 'Gario300',
          image: require('../static/githubLogo.png'),
          url: 'https://github.com/gario300/'
        },
        {
          name: 'Scute300',
          image: require('../static/githubLogo.png'),
          url: 'https://github.com/scute300/'
        }
      ]
    }
  },
  mounted () {
    this.getTime()
  },
  methods: {
    getTime () {
      this.nigth = true
      document.body.style.background = '#373C94'
    },
    overedElement (index, over) {
      const newElement = {
        ...this.jobs[index],
        over
      }
      setTimeout(() => {
        this.jobs.splice(index, 1, newElement)
      }, !over ? 200 : 0)
    },
    renderModal (open, objectd) {
      if (open) {
        this.defaultJob = objectd
      }
      this.openModal = open
      document.documentElement.style.overflow = open ? 'hidden' : 'auto'
    }
  }
}
</script>
<style scoped>
#avatar {
background-position: center;
background-size: cover;
width: 128px;
height: 128px;
border-radius: 128px;
}
#avatar[lazy=loading] {
  width: 32px;
  height: 32px;
}
.box-image-content {
  height: 150px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;
  border-radius: 8px;
}
.box-image-content[lazy=loading]{
  width: 32px;
  height: 32px;
}
.expertiseImg {
  width: 60px;
  height: 60px;
}
.expertiseImg[lazy=loading]{
  width: 32px;
  height: 32px;
}
.box-image-content-hovered {
  opacity: 1;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  width: 100%;
}
</style>
