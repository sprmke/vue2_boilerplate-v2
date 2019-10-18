import TheHeader from '@/app/modules/_shared/the-header/the-header.vue';

export default {
  name: 'AuthContainer',
  components: {
    TheHeader
  },
  directive: {},
  filters: {},
  mixins: [],
  props: {},
  data() {
    return {
    }
  },
  computed: {
    authPath() {
      return this.$route.path;
    }
  },
  watch: {},
  created() {
  },
  methods: {},
  // third party libraries
}