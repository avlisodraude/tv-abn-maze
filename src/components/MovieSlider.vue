<template>
  <div ref="swiper" class="swiper">
    <h4>{{ label }}</h4>
    <div class="swiper-wrapper">
      <div v-for="item in theMovies" :key="item.id" class="swiper-slide">
        <a :href="`details/${item.id}`">
          <img class="img-slider" :src="item.image.medium" :alt="item.name" />
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "MoviesSlider",
  props: {
    movies: {
      type: Array,
    },
    label: {
      type: String,
    },
  },
  computed: {
    theMovies() {
      return this.movies;
    },
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination],
      loop: false,
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView: "5",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style lang="scss">
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  &.img-slider {
    border-radius: 6%;

    &:hover {
      border: 1px solid white;
      cursor: pointer;
    }
  }
}
h4 {
  text-align: left;
  margin: 5px 0;
}

.swiper-pagination-bullet {
  display: none;
}
</style>
