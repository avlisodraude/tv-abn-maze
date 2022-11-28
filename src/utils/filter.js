import Vue from "vue";

Vue.filter("getYearOnly", (str) => {
  const date = new Date(str);
  return date.getFullYear().toString();
});

Vue.filter("getEndYear", (str) => {
  if (str) {
    const date = new Date(str);
    return date.getFullYear().toString();
  }
  return "now";
});

Vue.filter("getNetworkName", (str) => {
  if (str && str.network && str.network.name) {
    return str.network.name;
  }
  return "";
});
