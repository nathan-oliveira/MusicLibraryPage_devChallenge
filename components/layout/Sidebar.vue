<template>
  <div class="sidenav">
    <div class="col__primary">
      <figure>
        <div class="image">
          <img src="@/assets/img/profile.jpg" alt="profile" />
        </div>
        <figcaption>{{ this.$store.state.nome }}</figcaption>
        <nuxt-link class="side__link" to="/">
          Edit profile
          <Cog class="cog__link" />
        </nuxt-link>
      </figure>
    </div>
    <Sideitem />
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
.col__primary {
  figure {
    margin: 85px 20px 160px 20px;
    display: flex;

    figcaption {
      padding-left: 9px;
      margin-top: 1px;
      font-size: 16px;
      font-weight: 600 !important;
      width: 40px;
    }

    .image {
      overflow: hidden;
      height: 62px;
      width: 61px;
      border-radius: 4px;

      img {
        margin-top: -5px;
        background: no-repeat center;
        background-size: cover;
        max-width: 70px;
        max-height: 70px;
      }

      img:hover {
        transform: scale(1.04);
        transition: 0.5s;
      }
    }

    .side__link {
      font-size: 11px;
      margin-left: -30px;
      margin-top: 40px;
      color: #d1d1d383;
      font-weight: 400;

      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .cog__link {
        margin-left: 5px;
      }
    }

    .side__link:hover {
      color: #d1d1d3c9;
      transition: 0.3s;
    }
  }
}

@media screen and (max-width: 800px) {
  .sidenav {
    display: none;
  }
}
</style>
