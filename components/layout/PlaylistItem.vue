<template>
  <div class="item">
    <div class="image">
      <img
        :src="require('@/assets/img/' + image + '.jpg')"
        width="240"
        height="210"
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
  min-width: 310px;
  margin-right: 20px;

  .image {
    overflow: hidden;
    height: 190px;
    border-radius: 12px;

    img {
      object-fit: cover;
    }

    img:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }

  h1 {
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
  }

  p {
    color: #d1d1d359;
    margin-top: 5px;
    font-size: 11px;
    cursor: pointer;
  }
}

@media screen and (max-width: 400px) {
  .item {
    min-width: 250px !important;
    margin-left: 5px;

    .image {
      height: 170px !important;

      img {
        object-fit: fill !important;
        height: 170px;
      }
    }
  }
}
</style>
