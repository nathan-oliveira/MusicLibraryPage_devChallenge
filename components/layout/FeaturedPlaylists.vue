<template>
  <div class="col__featured__playlists">
    <h1>Featured Playlists</h1>
    <div class="wrapper">
      <PlaylistItem image="playlist1" name="Only STARDUST" tracks="24 tracks" />
      <PlaylistItem image="playlist2" name="Mike Vella" tracks="12 tracks" />
      <PlaylistItem
        image="playlist3"
        name="the best singles s2"
        tracks="163 tracks"
      />
      <PlaylistItem image="playlist4" name="Indie" tracks="138 tracks" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col__featured__playlists {
  margin: 40px 0;

  h1 {
    font-size: 18px;
  }

  h1:hover {
    color: #d1d1d3c7;
    transition: 0.3s;
  }
}

.wrapper {
  display: flex !important;
  flex-direction: row !important;
  overflow-x: scroll !important;
  max-width: 1020px;
  height: 280px;
  padding-top: 20px;
}

@media screen and (min-width: 1440px) {
  .wrapper {
    max-width: 1085px;
  }
}

@media screen and (max-width: 1134px) {
  .wrapper {
    max-width: 700px;
  }
}

@media screen and (max-width: 800px) {
  .wrapper {
    max-width: 670px;
  }
}

@media screen and (max-width: 600px) {
  .wrapper {
    max-width: 485px;
  }
}

@media screen and (max-width: 539px) {
  .container {
    margin: 20px 25px;
  }

  .wrapper {
    width: 360px;
  }
}

@media screen and (max-width: 400px) {
  .container {
    margin: 20px;
  }

  .wrapper {
    width: 310px;
  }
}

@media screen and (max-width: 280px) {
  .col__primary figure {
    width: 70% !important;
  }

  .wrapper {
    width: 255px;
  }
}

.wrapper::-webkit-scrollbar {
  border-radius: 14px;
  width: 8px;
  height: 8px;
}

.wrapper::-webkit-scrollbar-track-piece {
  background-color: #040517;
  border-radius: 4px;
}

.wrapper::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgb(43, 23, 114);
  border-radius: 4px;
}

.wrapper::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: rgb(43, 23, 114);
  border-radius: 4px;
}
</style>
