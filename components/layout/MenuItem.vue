<template>
  <div>
    <div class="close__menu">
      <a @click="actionMenu">
        <Close />
      </a>
    </div>
    <div class="itens__menu">
      <Sideitem />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  methods: {
    actionMenu() {
      this.$store.commit("menuAction", !this.$store.state.menu);
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .itens__menu {
    margin-top: 100px;
  }

  .close__menu {
    margin: 20px;
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
  }

  .col__segundary,
  .col__tertiary {
    border-top: 0px !important;
  }

  .col__segundary ul li,
  .col__tertiary ul li {
    font-size: 20px !important;
    align-items: center !important;
  }
}
</style>
