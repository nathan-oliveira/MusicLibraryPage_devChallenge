<template>
  <div class="row">
    <div class="col__4">
      <h1>Profile Views</h1>

      <ProfileViews
        image="view1"
        name="Jenny Villa"
        day="1 day ago"
        albums="4 albums"
      />
      <ProfileViews
        image="view2"
        name="Aquila"
        day="3 days ago"
        albums="2 albums"
      />
      <ProfileViews
        image="view3"
        name="This is War"
        day="2 week ago"
        albums="5 albums"
      />
    </div>
    <div class="col__8">
      <h1>Tracks</h1>

      <TracksLists />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;

  .col__4 {
    width: 33% !important;

    h1 {
      font-size: 18px;
      margin-bottom: 20px;
    }

    h1:hover {
      color: #d1d1d3c7;
      transition: 0.3s;
    }
  }

  .col__8 {
    width: 77% !important;

    h1 {
      font-size: 18px;
      margin-left: 40%;
    }

    h1:hover {
      color: #d1d1d3c7;
      transition: 0.3s;
    }
  }
}

@media screen and (min-width: 1440px) {
  .row {
    .col__4 {
      width: 30% !important;
    }
  }
}

@media screen and (max-width: 1134px) {
  .row {
    .col__4 {
      width: 40% !important;
    }
    .col__8 {
      width: 60% !important;
      padding-left: 0% !important;

      h1 {
        margin-top: 10px;
        margin-left: 0% !important;
      }
    }
  }
}

@media screen and (max-width: 1040px) {
  .row {
    display: block;

    .col__4,
    .col__8 {
      width: 100% !important;
    }
  }
}
</style>
