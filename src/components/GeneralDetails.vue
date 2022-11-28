<template>
  <div v-if="details" class="about">
    <h1>{{ details.name }}</h1>
    <div class="container">
      <div class="image">
        <img :src="details | getImageUrl" :alt="details.name" />
      </div>
      <div class="main">
        <div class="genders">
          <span class="bold">Genres:</span>
          <span v-for="(genre, index) in details.genres" :key="index">
            {{ genre }}
            {{ index + 1 < details.genres.length ? "|" : "" }}
          </span>
        </div>
        <div class="stats">
          <span class="bold">Broadcasted:</span>
          {{ details | getNetworkName }}
          ({{ details.premiered | getYearOnly }} /
          {{ details.ended | getEndYear }})
        </div>
        <div class="crew">
          <span class="bold">Staring:</span>
          <span v-for="(actor, index) in castDetails" :key="actor.person.id">
            {{ actor.person.name }}
            {{ index === castDetails.length - 1 ? "" : "|" }}
          </span>
        </div>
        <div class="rating">
          <span class="bold">Rating:</span>
          {{ movieGeneralDetails.rating.average }}
        </div>
        <div v-html="description" class="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralDetails",
  props: {
    movieGeneralDetails: {
      type: Object,
    },
    castDetails: {
      type: Array,
    },
    description: {
      type: String,
    },
  },
  computed: {
    details() {
      return this.movieGeneralDetails;
    },
  },
};
</script>
<style lang="scss">
.container {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .image {
    justify-content: flex-end;
    flex-grow: 2;
    height: 100px;
  }
  .description {
    padding: 0 20px;
    text-align: left;
  }
  .genders,
  .rating {
    padding: 0 20px;
    text-align: left;
  }
  .bold {
    font-weight: bold;
  }
  .stats,
  .crew {
    text-align: left;
    padding: 0 20px;
  }
}
</style>
