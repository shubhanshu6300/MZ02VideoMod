<template>
  <div>
    <loader v-if="loader"></loader>
    <div v-else>
    <section class="grey page-title">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-left">
                    <h1>Access Course</h1>
                </div><!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->
    </section><!-- end section -->


    <section class="white section">
        <div class="container">
            <div class="row" v-for="(slide, k) in training" v-bind:key="k">
                <div id="course-left-sidebar" class="col-md-5">
                    <div class="course-image-widget">
                      <img :src="slide.image" alt="">
                    </div><!-- end image widget -->
                    <div class="course-meta">
                        <p class="course-category">Category : <router-link to="/DomainList">{{slide.domain}}</router-link></p>
                        <hr>
                        <p class="course-forum">Course Duration : <a title="">{{slide.duration}}</a></p>
                        <hr>
                        <p class="course-forum">No Of Sessions : <a title="">{{slide.number}}</a></p>
                    </div><!-- end meta -->
                    <!--<div class="course-button" v-if="usersubscription">
                        <p class="btn btn-primary btn-block">Course Subscribed</p>
                        <router-link :to="{ name: 'AccessCourse', params: { id: k }}" class="btn btn-primary btn-block">CLICK HERE TO ACCESS THIS COURSE</router-link>-->
                    <!--</div>
                  <div v-else>-->
                  <button class="btn btn-primary btn-block">COURSE SUBSCRIBED</button>
                </div><!-- end col -->

                <div id="course-content" class="col-md-7">
                    <div class="course-description">
                        <h3 class="course-title">{{slide.name}}</h3>

                        <p>{{slide.description}}</p>
                    </div><!-- end desc -->

                    <ul class="check">
                      <!--<li v-for="x in slide.featuredTopics">{{x.bullet}}</li>-->
                    </ul>
                    <br>
                    <div class="course-table">
                        <h4>Sessions</h4>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Sl No.</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(slide, k) in sessionlist1" v-bind:key="k">
                                    <td>{{slide.sessionNo}}</td>
                                    <td>
                                      <el-collapse accordion>
                                        <el-collapse-item :title="slide.title" name="1">
                                          <div>{{slide.shortDescription}}</div><br>
                                          <div>
                                            <div class="course-button">
                                          <el-button type="text" class="btn btn-primary btn-xs" v-on:click="calldialogbox()">Video
                                          </el-button>
                                          <el-button type="text" class="btn btn-primary btn-xs" v-on:click="calldialogdocbox()">Document
                                          </el-button>
                                          </div>
                                        </div>
                                          <div id="myModal" style="padding: 10%" class="modal">
                                              <span class="close" v-on:click="callclose()">&times;</span>
                                              <span>
                                              <iframe :src="slide.Video" id="video" width="100%" height="95%" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                                              </iframe>
                                            </span>
                                        </div>
                                        <div id="docModal" class="modal">
                                            <span class="close" v-on:click="calldocclose()" id="docclose" style="padding-top:25px">&times;</span>
                                            <span>
                                            <iframe :src="slide.Doc" id="docview" style="padding-left:17%; padding-right: 17%; padding-bottom: 15%; margin-top: 6%; border-width:0px" width="100%" height="95%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                                          </iframe>
                                        </span>
                                      </div>
                                        </el-collapse-item>
                                      </el-collapse>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div><!-- end course-table -->

                    <hr class="invis">
                </div><!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->
    </section><!-- end section -->

  </div>
  </div>
</template>

<script>

import {mapMutations, mapGetters} from 'vuex'
import loader from '@/components/Loader/loader'

export default {
  props: ['auth', 'authenticated'],

  metaInfo: {
    // Children can override the title.
    title: 'MindZcloud SingleCourse',
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
      activeNames: ['1'],
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations([
      'goTo'
    ]),
    closepopup () {
      let modal = document.getElementById('signinmodal');
      modal.style.display = "none";
    },
    callexpansionpanel: function () {
      var x = document.getElementById('myDIV')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    calldialogbox: function () {
      let modal = document.getElementById('myModal');
      let modal1 = document.getElementById('hideitem');
      let modal2 = document.getElementById('appheader')
      let modal3 = document.getElementById('appheader1')
      let modal4 = document.getElementById('docclose')
      modal.style.display = "block";
      modal1.style.opacity = "0.4";
      modal2.style.zIndex = "-1";
      modal3.style.zIndex = "-1";
/*      let x = document.getElementsByTagName('iframe')[0]
      let y = window.getComputedStyle(x, null).getPropertyValue('padding-right')
      let z = window.getComputedStyle(x, null).getPropertyValue('margin-right')
      console.log(y + '@@' + z)
      modal4.style.paddingRight = x */
    },
    callclose: function () {
      let modal = document.getElementById('myModal');
      let modal1 = document.getElementById('hideitem');
      let modal2 = document.getElementById('appheader')
      let modal3 = document.getElementById('appheader1')
      modal.style.display = "none";
      modal1.style.opacity = "1";
      modal2.style.zIndex = "0";
      modal3.style.zIndex = "0";
    },
    calldialogdocbox: function () {
      let modal = document.getElementById('docModal');
      let modal1 = document.getElementById('hideitem');
      let modal2 = document.getElementById('appheader')
      let modal3 = document.getElementById('appheader1')
      let x = document.getElementsByTagName('iframe')[0]
      let y = window.getComputedStyle(x, null).getPropertyValue('padding-right')
      let z = window.getComputedStyle(x, null).getPropertyValue('margin-right')
      console.log(y + '@@' + z)
      modal.style.display = "block";
      modal1.style.opacity = "0.4";
      modal2.style.zIndex = "-1";
      modal3.style.zIndex = "-1";
    },
    calldocclose: function () {
      let modal = document.getElementById('docModal');
      let modal1 = document.getElementById('hideitem');
      let modal2 = document.getElementById('appheader')
      let modal3 = document.getElementById('appheader1')
      modal.style.display = "none";
      modal1.style.opacity = "1";
      modal2.style.zIndex = "0";
      modal3.style.zIndex = "0";
    },
    handleChange (val) {
      console.log(val)
    }
  },
  components: {
    loader
  },
  computed: {
    ...mapGetters([
      'patchUpdateDom',
      'loader',
      'training',
      'sessionlist1',
      'usersubscription',
      'selfpaced',
      'batches'
    ])
  },
  created () {
    this.$store.commit('getcontent', {id: this.$route.params.id, name: this.$route.name})
    console.log('after getting training list')
    console.log(this.$route.name)
  }
}
</script>

<style scoped>
#myDIV {
}
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0,0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* The Close Button */
.close {
    color: #ff0000;
    font-size: 48px;
    font-weight: bold;
    padding-right: 13%
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
/* The Modal (background) */
.signinmodal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.signinmodal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}
</style>
