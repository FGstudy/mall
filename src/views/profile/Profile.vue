<template>
<div class="profile">
<nav-bar class="nav">
  <div slot=center>我的档案</div>
</nav-bar>
<profile-log></profile-log>
<profile-account></profile-account>
<profile-message></profile-message>
<profile-shop></profile-shop>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import ProfileLog from "./childpro/ProfileLog"
import ProfileAccount from "./childpro/ProfileAccount"
import ProfileMessage from "./childpro/ProfileMessage"
import ProfileShop from "./childpro/ProfileShop"


export default {
name: "Profile",
components: {
  NavBar,
  ProfileLog,
  ProfileAccount,
  ProfileMessage,
  ProfileShop
}
}
</script>

<style scoped>
.nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

</style>>
