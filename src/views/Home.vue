<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'destination-details',
            params: { slug: destination.slug },
          }"
          >{{ destination.name }}
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'destination-details',
              params: {
                slug: destination.slug,
              },
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "../store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 200px;
}

.destinations {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

a {
  color: #3c8a83;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:visited {
  text-decoration: underline;
}
</style>
