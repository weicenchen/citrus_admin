<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-black flex-md-nowrap py-4 shadow">
      <a class="logo col-sm-3 d-block col-md-2 mr-0 text-hide px-0" href="#">Citrus</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link text-white" href="#" @click.prevent="signOut">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    signOut () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/logout`
      vm.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    }
  }
}
</script>
