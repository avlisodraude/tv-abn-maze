<template>
  <div class="topnav">
    <router-link class="active" to="/">Home</router-link>
    <div class="search-container">
      <input
        type="text"
        v-model="searchValue"
        placeholder="Search.."
        name="search"
        @keyup.enter="submit"
      />
      <button type="button" v-on:click="submit">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchValue: null,
    };
  },
  methods: {
    submit() {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${this.searchValue}`)
        .then((details) => {
          this.$store.commit("SET_CURRENT_SEARCH", details.data);
          if (this.$route.name !== "results") {
            this.$router.push({
              name: "results",
              params: { id: this.searchValue },
            });
          }
        });
    },
  },
};
</script>
<style lang="scss">
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;

  a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  a.active {
    background-color: #2196f3;
    color: white;
  }

  .search-container {
    float: right;
  }

  input[type="text"] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  }

  .search-container button {
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

  .search-container button:hover {
    background: #ccc;
  }
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a,
  .topnav input[type="text"],
  .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}
</style>
