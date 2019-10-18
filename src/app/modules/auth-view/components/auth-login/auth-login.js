export default {
  name: 'AuthLogin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData)
      this.$store.dispatch('login', formData)
    }
  },
}