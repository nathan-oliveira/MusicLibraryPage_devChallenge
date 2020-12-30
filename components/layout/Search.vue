<template>
  <div class="col__search">
    <div id="lupa">
      <SearchIcon />
    </div>
    <input type="text" placeholder="Search artists, playlists or tracks" />
  </div>
</template>

<style lang="scss" scoped>
.col__search {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 35px;

  input {
    flex: 1;
    padding: 0 40px;
    width: 400px;
    border: none;
    outline: none;
    background: transparent;
    color: #d1d1d3;
    font-size: 15px;
  }

  #lupa {
    position: absolute;
    float: right;
    margin: 0px 3px;
    cursor: pointer;
  }
}

.col__search:hover,
.col__search:focus-within {
  transition: 0.3s;
  border: 0.5px solid #d1d1d325;
  border-radius: 5px;
}

@media screen and (max-width: 400px) {
  .col__search {
    width: 310px;
  }
}

@media screen and (max-width: 280px) {
  .col__search {
    width: 255px;
  }
}
</style>
