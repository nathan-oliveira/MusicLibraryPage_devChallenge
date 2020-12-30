<template>
  <div class="col__footer">
    <figure>
      <img src="@/assets/img/profile.jpg" alt="profile" />
      <figcaption>{{ this.$store.state.nome }}</figcaption>
      <nuxt-link class="side__link" to="/">
        Edit profile
        <Cog class="cog__link" />
      </nuxt-link>
    </figure>
    <a class="icon__menu" @click="actionMenu">
      <MenuIcon />
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    actionMenu() {
      this.$store.commit("menuAction", !this.$store.state.menu);
    }
  }
};
</script>

<style lang="scss" scoped>
.col__footer {
  display: flex;
  align-items: center;

  .icon__menu {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .icon__menu svg {
    transform: rotate(180deg);
  }

  figure {
    display: flex;
    margin: 20px;
    width: 77%;

    figcaption {
      padding-left: 9px;
      margin-top: 1px;
      font-size: 18px;
      font-weight: 600 !important;
      margin-top: 10px;
    }

    img {
      background: no-repeat center;
      background-size: cover;
      max-width: 65px;
      max-height: 65px;
      border-radius: 7px;
    }

    .side__link {
      font-size: 13px;
      margin-left: -136px;
      margin-top: 25px;
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

@media screen and (min-width: 801px) {
  .col__footer {
    display: none;
  }
}
</style>
