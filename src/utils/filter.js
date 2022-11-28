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

Vue.filter("getImageUrl", (img) => {
  if (img.image && img.image.medium) {
    return img.image.medium;
  }
  return "https://via.placeholder.com/210x295.png?text=No+image+available";
});
