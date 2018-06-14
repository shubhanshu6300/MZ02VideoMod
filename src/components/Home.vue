<template>
  <div>
    <loader v-if="loader"></loader>
    <div v-else>

    <section class="white section nopaddingbottom">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center">
                        <h4>Why Choose Us</h4>
                        <p>One Liner Description. One Liner Description.</p>
                    </div>
                </div><!-- end col -->
            </div><!-- end row -->

            <hr class="invis">

        </div><!-- end container -->
    </section><!-- end section -->
</div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import loader from '@/components/Loader/loader'

export default {

  metaInfo: {
    // Children can override the title.
    title: 'MindZcloud',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s',
    // Define meta tags here.
    meta: [
      {httpequiv: 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'I have things here on my site.'}
    ]
  },

  data () {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'goTo'
    ])
  },
  components: {
    loader
  },
  computed: {
    ...mapGetters([
      'patchUpdateDom',
      'loader'
    ])
  }
}
</script>

<style scoped>
.mySlides {
  /* display: none; */
  position: relative;
  width: 100%;
}
.sliderSlides {
  display: block;
  position: relative;
  width: 100%;
}
</style>
