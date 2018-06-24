<template>
  <div class="row">
    <div class="col-md-8">
      <ShowDoc></ShowDoc>
    </div>

    <div class="col-md-4">
      <CourseList></CourseList>
    </div>
  </div>
</template>

<script>
import ShowDoc from './ShowDoc';
import CourseList from './CourseList';
import { store } from '../../store'

export default {
  name: 'ShowDocWrapper',
  store,
  components: { ShowDoc, CourseList }
};
</script>
