<template>
  <div id="app">

    		<header id="appheader1" class="header">
                <div class="container">
                </div><!-- end container -->
    		</header><!-- end header -->
      <router-view>
      </router-view>
      <section class="copyright">
          <div class="container">
              <div class="row">
                  <div class="col-md-6 text-left">
                      <p>© 2018 MindZcloud Pvt Ltd.</p>
                  </div><!-- end col -->
                  <div class="col-md-6 text-right">
                  </div>
              </div><!-- end row -->
          </div><!-- end container -->
      </section><!-- end section -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
  },
  computed: {
    ...mapGetters([
    ])
  },
  created () {
  }
}
</script>

<style scoped>

</style>
