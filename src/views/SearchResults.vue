<template>
  <div v-if="results" class="results">
    <h1 class="align-left">
      Search results for: <b>{{ searchTerm }}</b>
    </h1>
    <div v-for="result in results" :key="result.show.id" class="item">
      <div class="title-image">
        <div class="image">
          <a :href="`/details/${result.show.id}`">
            <img :src="result.show | getImageUrl" :alt="result.show.name" />
          </a>
        </div>
        <div class="title">{{ result.show.name }}</div>
      </div>
      <div class="data-block">
        <div v-if="result.show.genres.length" class="stats align-left">
          <span class="bold">Genres:</span>
          <span class="genres" v-for="res in result.show.genres" :key="res.id">
            {{ res }} |
          </span>
        </div>
        <div class="network-period align-left">
          <span class="bold">Network: </span>
          <span>{{
            result.show && result.show.webChannel
              ? result.show && result.show.webChannel.name
              : result.show.network.name
          }}</span>
        </div>
        <div v-if="result.show.rating.average" class="rating align-left">
          <span class="bold">Rating: </span>
          <span>{{ result.show.rating.average }}</span>
        </div>
        <div v-html="result.show.summary" class="summary"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  data() {
    return {
      searchTerm: null,
    };
  },
  computed: {
    results() {
      if (this.$store.getters.getCurrentSearch) {
        return this.$store.getters.getCurrentSearch;
      }
      return null;
    },
  },
  mounted() {
    if (this.$route.params.id && this.$route.params.id.length) {
      this.searchTerm = this.$route.params.id;
    }
  },
};
</script>
<style lang="scss">
.data-block {
  padding: 0 10px;
}
.align-left {
  text-align: left;
}
.results {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 10px auto 0;
}
.summary {
  text-align: left;
}
.bold {
  font-weight: bold;
}
.item {
  border: 1px dotted #dadada;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  .title-image {
    .title {
      background-color: #dadada;
    }
    .image {
      a {
        display: flex;
        align-items: flex-end;
      }
    }
  }
}
</style>
