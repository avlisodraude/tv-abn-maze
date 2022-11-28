<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <MovieSlider :movies="thriller" label="Thriller" />
    <hr />
    <MovieSlider :movies="comedy" label="Comedy" />
    <hr />
    <MovieSlider :movies="romance" label="Romance" />
    <hr />
    <MovieSlider :movies="horror" label="Horror" />
    <hr />
    <MovieSlider :movies="drama" label="Drama" />
    <hr />
    <MovieSlider :movies="scyFy" label="Science Fiction" />
  </div>
</template>

<script>
import MovieSlider from "@/components/MovieSlider";
export default {
  name: "MoviesListSlider",
  components: {
    MovieSlider,
  },
  data() {
    return {
      drama: [],
      comedy: [],
      scyFy: [],
      thriller: [],
      horror: [],
      romance: [],
    };
  },
  props: {
    msg: String,
    movies: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    if (this.movies) {
      let drama = [],
        comedy = [],
        sciFy = [],
        thriller = [],
        horror = [],
        romance = [],
        family = [],
        crime = [],
        adventure = [],
        action = [];

      const allMovies = this.movies;
      allMovies.map((data) => {
        if (data.genres.includes("Drama")) {
          drama.push(data);
        }
        if (data.genres.includes("Comedy")) {
          comedy.push(data);
        }
        if (data.genres.includes("Science-Fiction")) {
          sciFy.push(data);
        }
        if (data.genres.includes("Thriller")) {
          thriller.push(data);
        }
        if (data.genres.includes("Horror")) {
          horror.push(data);
        }
        if (data.genres.includes("Romance")) {
          romance.push(data);
        }
        if (data.genres.includes("Family")) {
          family.push(data);
        }
        if (data.genres.includes("Crime")) {
          crime.push(data);
        }
        if (data.genres.includes("Adventure")) {
          adventure.push(data);
        }
        if (data.genres.includes("Action")) {
          action.push(data);
        }
      });
      this.drama = drama;
      this.scyFy = sciFy;
      this.comedy = comedy;
      this.thriller = thriller;
      this.horror = horror;
      this.romance = romance;
    }
  },
};
</script>

<style scoped lang="scss">
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-pagination-bullet {
    display: none;
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
hr {
  border-top: 1px solid #ccc;
}
</style>
