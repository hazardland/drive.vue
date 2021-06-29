<template>
  <div id="app">
    <div class=routes>
        <router-link to='/'>ბილეთბი</router-link>
        <router-link to='/learn'>ზოგიერთი რამ ცოტა რამის შესახებ</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
    html {
        font-family: Verdana
    }
    .page {
        padding: 6px;
        color: #e4e6eb;
        margin-top: 22px;
        font-size: 22px;
        max-width: 1200px
    }
    .routes{
        margin-top: 22px;
    }
    .routes > a {
        background: #3a3b3c;
        color: #e4e6eb;
        text-decoration: none;
        padding: 6px;
        margin-right: 3px;
    }
    .routes > a.router-link-exact-active {
        background: #263951;
    }
</style>
