<template>
  <div v-if="showDetails" class="about">
    <GeneralDetails
      :movieGeneralDetails="showDetails"
      :description="description"
      :castDetails="cast"
    />
    <h2>Cast</h2>
    <CastDetails :castDetails="cast" />
  </div>
</template>

<script>
import axios from "axios";
import GeneralDetails from "@/components/GeneralDetails";
import CastDetails from "@/components/CastDetails";

export default {
  name: "DetailsView",
  data() {
    return {
      showDetails: null,
      description: null,
      cast: null,
    };
  },
  components: {
    GeneralDetails,
    CastDetails,
  },
  mounted() {
    axios
      .get(
        `https://api.tvmaze.com/shows/${this.$route.params.id}?embed[]=seasons&embed[]=episodes&embed[]=cast`
      )
      .then((show) => {
        this.showDetails = show.data;
        this.description = show.data.summary;
        this.cast = show.data._embedded.cast.slice(0, 20);
      });
  },
};
</script>
