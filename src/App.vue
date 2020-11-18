<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">抽獎</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">抽獎</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/list">列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">新增</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
