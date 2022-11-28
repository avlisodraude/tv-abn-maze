<template>
  <div class="crewCollection">
    <div v-for="crew in castDetails" class="cast" :key="crew.person.id">
      <div class="headers">
        <h5>{{ crew.person.name }}</h5>
        <p>
          as <b>{{ crew.character.name }}</b>
        </p>
      </div>
      <div class="castMember">
        <img :src="crew.person.image.medium" alt="crew.person.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CastDetails",
  props: {
    castDetails: {
      type: Array,
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
.crewCollection {
  display: flex;
  flex: 1 1 auto; /* Set the shrik 1 which is by default */
  justify-content: space-between;
  margin: 0 auto;
  max-width: 80%;
  overflow: auto;
  padding: 5px;

  .cast {
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
    .headers {
      background-color: #cfcdcd;
      h5 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }
      p {
        margin: 0;
        font-size: 16px;
      }
    }
  }
}
</style>
