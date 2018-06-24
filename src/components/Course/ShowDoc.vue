<template>
  <div>
    {{ doc }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { store } from '../../store'

export default {
  name: 'ShowDoc',
  computed: mapGetters({ doc: 'activeDoc' })
};

</script>
