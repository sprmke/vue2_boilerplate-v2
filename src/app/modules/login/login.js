
export default {
  name: 'LoginView',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData)
      this.$store.dispatch('login', formData)
    }
  }
}