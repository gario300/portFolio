<template>
  <div>
    <div class="modalLocal">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ detailObject.name}}</p>
          <button
            @click="closeModal(false)"
            class="delete"
            aria-label="close"
          />
        </header>
        <section class="modal-card-body">
          <div class="columns is-centered">
            <div class="column is-half">
              <img
                :src="detailObject.picture"
                style="width: 100%; height: auto;"
              />
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <span>
                <h3 class="title is-4">Description:</h3>
              </span>
              <p class="is-size-5 mb-5">
                {{ detailObject.description }}
              </p>
              <span
                v-for="(technologie, index) in detailObject.technologies"
                class="tag is-primary mx-1"
                :key="index"
              >
                {{ technologie }}
              </span>
            </div>
          </div>
          <div class="columns is-multiline is-centered">
            <div
              v-for="(photo, index) of detailObject.morePictures"
              class="column"
              :key="index"
            >
              <div
                style="height: 300px;"
              >
                <img
                  :src="photo"
                  style="height: 100%; width: auto; border-radius: 5px;"
                />
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalDetail',
  props: {
    closeModal: {
      type: Function,
      required: true
    },
    detailObject: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.modalLocal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: hidden;
}
.modalInd {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
</style>
