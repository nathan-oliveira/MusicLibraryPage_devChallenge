<template>
  <div class="item">
    <div class="image">
      <img
        :src="require('@/assets/img/' + image + '.jpg')"
        width="240"
        height="100"
      />
    </div>
    <h1>{{ name }}</h1>
    <p>{{ tracks }}</p>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "tracks"]
};
</script>

<style lang="scss" scoped>
.item {
  margin-right: 20px;
  cursor: pointer;

  .image {
    overflow: hidden;
    height: 100px;
    border-radius: 5px;
    width: 100px;

    img {
      object-fit: fill !important;
    }

    img:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }

  h1 {
    margin-top: 7px;
    font-size: 13px;
    font-weight: 300;
    color: #d1d1d3a9;
    letter-spacing: 1px;
  }

  h1:hover {
    color: #d1d1d3dc;
    transition: 0.3s;
  }

  p {
    color: rgba(209, 209, 211, 0.233);
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 100;
  }

  p:hover {
    color: #d1d1d3b9;
    transition: 0.3s;
  }
}
</style>
