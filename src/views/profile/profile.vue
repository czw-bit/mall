<template>
  <div>
    <nav-bar class="profile-bar">
      <div slot="center">我的界面</div>
    </nav-bar>
    <profile-main/>
    <profile-info/>
    <profile-list/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import profileMain from './chidComps/profileMain.vue'
  import profileInfo from './chidComps/profileInfo.vue'
  import profileList from './chidComps/profileList.vue'
  export default{
    name:'Profile',
    components:{
      NavBar,
      profileMain,
      profileInfo,
      profileList
    }
  }
</script>

<style scoped>
  .profile-bar {
    background-color: var(--color-tint);
    color: #FFF;
  }
</style>
