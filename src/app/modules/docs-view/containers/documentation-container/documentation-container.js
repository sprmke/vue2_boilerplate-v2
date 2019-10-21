import DocumentationSidebar from '@/app/modules/docs-view/components/documentation-sidebar/documentation-sidebar.vue';

export default {
  name: 'DocumentationContainer',
  components: {
    DocumentationSidebar
  },
  computed: {
    pageTitle() {
      let title = this.$route.meta.title;
      return title.replace('Vue Boilerplate - ', '');
    }
  }
}