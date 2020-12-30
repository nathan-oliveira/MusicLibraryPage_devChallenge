<template>
  <div>
    <div :class="this.$store.state.menu ? `grid display-none` : `grid`">
      <Sidebar />
      <Main>
        <Nuxt />
      </Main>
      <Footer />
    </div>
    <div :class="!this.$store.state.menu ? `grid display-none` : `grid`">
      <MenuItem />
    </div>
  </div>
</template>
