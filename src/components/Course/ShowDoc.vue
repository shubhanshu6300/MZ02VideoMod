<template>
  <div>
    <embed :src="doc.link" type="application/pdf" width="100%" height="600px" />
    {{ doc }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { store } from '../../store';

export default {
  name: 'ShowDoc',
  computed: mapGetters({ doc: 'activeDoc' })
};

</script>
