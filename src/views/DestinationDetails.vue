<template>
  <div>
  <go-back-button></go-back-button>
    <section class="destinations">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
          <img
            :src="require(`@/assets/${destination.image}`)"
            :alt="destination.name"
          />
          <p>{{ destination.description }}</p>
      </div>
    </section>
    <section>
      <h2>Top experiencies in {{ destination.name }}</h2>
      <div class="cards">
        <div
          class="card"
          v-for="experiencie in destination.experiences"
          :key="experiencie.slug"
        >
        <router-link :to="{ name: 'experienceDetails', params: { experienceSlug: experiencie.slug } }">
          <img
            :src="require(`@/assets/${experiencie.image}`)"
            :alt="experiencie.name"
          />
          <span class="card__text">
            {{ experiencie.name }}
          </span>
        </router-link>
        </div>
      </div>
    </section>
      <router-view :key="this.$route.path"></router-view>
  </div>
</template>

<script>
import store from "@/store.js";
import GoBackButton from '../components/GoBackButton.vue';
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  components: {
    GoBackButton,
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>


<style scoped>
.destinations img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 25px;
  font-size: 18px;
  text-align: left;
}
.cards {
  display: flex;
}
.cards img {
  max-height: 200px;
}

.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
