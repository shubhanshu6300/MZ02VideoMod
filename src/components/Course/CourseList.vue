<template>
  <div class="row">
    <div class="col-md-11">
      <ul class="list-group">
        <li class="list-group-item" style="text-align: center;" v-for="(course, k) in courses" v-bind:key="k">
          <span style="cursor: pointer;" v-on:click="show">
            {{ course.name }}
          </span>
          <ul class="list-group" style="display: none;">
            <li class="list-group-item" v-for="(doc, d) in course.docs" v-bind:key="d">
              <span style="cursor: pointer;" v-on:click="showDoc(doc)">{{ doc.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'CourseList',
    data : () => ({}),
    computed: mapGetters([ 'courses' ]),
    methods: {
      show: ({ target }) => {
        if (target.nextElementSibling.style.display === 'block') {
          target.nextElementSibling.style.display = 'none';
        } else {
          target.nextElementSibling.style.display = 'block';
        }
      },
      ...mapMutations(['showDoc'])
    }
  }
</script>
