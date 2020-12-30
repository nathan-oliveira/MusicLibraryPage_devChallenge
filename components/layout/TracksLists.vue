<template>
  <div class="col__tracks__playlists">
    <div class="wrapper">
      <TracksListsItem
        image="track1"
        name="Mahara Bon"
        tracks="Sexy in Paris"
      />
      <TracksListsItem image="track2" name="Donna" tracks="Pseudo-Life" />
      <TracksListsItem image="track3" name="Avven" tracks="Magic" />
      <TracksListsItem
        image="track4"
        name="Cony Matt"
        tracks="Living in hell"
      />
      <TracksListsItem
        image="track5"
        name="Claudia Cany"
        tracks="Living in hell"
      />
      <TracksListsItem image="track6" name="Samm" tracks="Same - Huly" />
      <TracksListsItem image="track7" name="Pacify" tracks="Portrait" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col__tracks__playlists {
  margin-left: 40%;
  margin-bottom: -10px;
}

.wrapper {
  display: flex !important;
  flex-direction: row !important;
  overflow-x: scroll !important;
  max-width: 402px;
  height: 200px;
  padding-top: 20px;
}

@media screen and (min-width: 1544px) {
  .wrapper {
    max-width: 402px;
  }
}

@media screen and (min-width: 1440px) {
  .col__tracks__playlists {
    margin-left: 43% !important;
    margin-bottom: -10px;
  }
  
  .wrapper {
    height: 178px;
  }
}

@media screen and (max-width: 1040px) {
  .col__tracks__playlists {
    margin-left: 0%;
    margin-bottom: -10px;
  }

  .wrapper {
    max-width: 80%;
    padding-top: 10px !important;
  }
}

@media screen and (max-width: 600px) {
  .wrapper {
    max-width: 402px;
  }
}

@media screen and (max-width: 539px) {
  .container {
    margin: 20px 25px;
  }

  .wrapper {
    width: 402px;
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
