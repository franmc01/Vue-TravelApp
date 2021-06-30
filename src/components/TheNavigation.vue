<template>
  <nav id="nav">
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'destination-details',
            params: { slug: destination.slug },
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "../store";
export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

/*
#nav a.router-link-exact-active {
  color: #42b983;
}
 */

#nav a.my-custom-active-class {
  color: #42b983;
}

.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
</style>
