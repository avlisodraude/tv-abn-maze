<template>
  <div class="home">
    <MoviesListSlider
      v-if="movies.length"
      :movies="movies"
      msg="Search for your favourite series"
    />
  </div>
</template>

<script>
import MoviesListSlider from "@/components/MoviesListSlider.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    MoviesListSlider,
  },
  created() {
    axios.get("https://api.tvmaze.com/shows").then((res) => {
      this.$store.commit("SET_MOVIES", res.data);
    });
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
  },
};
</script>
<style>
.home {
  margin: 0 auto;
  max-width: 80%;
}
</style>
