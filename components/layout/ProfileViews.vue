<template>
  <div class="profile">
    <figure>
      <div class="image">
        <img :class="image" :src="require('@/assets/img/' + image + '.jpg')" />
      </div>
      <figcaption>
        {{ name }}
        <p>{{ day }}</p>
      </figcaption>
    </figure>
    <p>{{ albums }}</p>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "day", "albums"]
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;

  p {
    color: rgba(209, 209, 211, 0.233);
    font-size: 13px;
    letter-spacing: 1px;
  }

  p:hover {
    color: #d1d1d3c7;
    transition: 0.3s;
  }

  figure {
    display: flex;

    figcaption {
      font-size: 14px !important;
      margin-left: 12px;
      margin-top: 5px;
      color: rgba(209, 209, 211, 0.51373);

      p {
        margin-top: 10px;
        font-size: 11px;
        color: rgba(209, 209, 211, 0.233);
        letter-spacing: 1px;
      }
    }

    figcaption:hover {
      color: #d1d1d3c7;
      transition: 0.3s;
    }

    .image {
      overflow: hidden;
      height: 55px;
      width: 55px;
      border-radius: 6px;

      img {
        transform: scale(1.1);
        margin-top: 4px;
        width: 100px;
        margin-left: -22px;
      }

      img:hover {
        transform: scale(1.15);
        transition: 0.5s;
      }

      .view2 {
        margin-top: -29px !important;
        margin-left: -33px !important;
      }
    }
  }
}

.profile:hover {
  color: #ffffff;
  transition: 0.3s;
}
</style>
