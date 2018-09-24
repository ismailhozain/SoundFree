<template>
  <div id="app">
    <b-navbar toggleable="md">
            <b-navbar-brand href="/">Quietspace</b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/about">About</b-nav-item>
                    <b-nav-item to="/login">Login</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item to="/add-workplace">Add Workplace</b-nav-item>
                    <b-nav-item to="/join-event">Find Workplace</b-nav-item>
               </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view class="p-2"/>
  </div>
</template>

<style lang="scss">

</style>
