export default {
  name: 'AuthRegister',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onRegister() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$store.dispatch('register', formData)
    }
  },
}