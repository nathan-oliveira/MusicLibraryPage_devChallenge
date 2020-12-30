<template>
  <div class="side__itens">
    <div class="col__segundary">
      <ul>
        <li class="col__link">
          <Aperture />
          <p>Overview</p>
        </li>
        <li class="col__link">
          <Trello />
          <p>News</p>
        </li>
        <li class="col__link">
          <Music />
          <p>Playlists</p>
        </li>
        <li class="col__link">
          <Radio />
          <p>Discorver</p>
        </li>
      </ul>
    </div>
    <div class="col__tertiary">
      <ul>
        <li class="col__link">
          <Sliders />
          <p>Dashboard</p>
        </li>
        <li class="col__link">
          <Message />
          <p>Messages</p>
        </li>
        <li class="col__link">
          <Bell />
          <p>Notifications</p>
        </li>
        <li class="col__link">
          <User />
          <p>Account</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col__segundary,
.col__tertiary {
  width: 52%;
  border-top: 1px solid #d1d1d321;
  margin: 0 auto;

  ul {
    margin-top: 25px;
    margin-bottom: 45px;

    li {
      list-style: none;
      margin: 10px 0;
      font-size: 14px;
      color: rgba(209, 209, 211, 0.51373);
    }

    li:hover {
      color: #e6e6e6e1;
      transition: 0.3s;
    }
  }

  .col__link {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      margin-left: 15px;
    }
  }
}
</style>
