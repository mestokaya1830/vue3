export default {
  data() {
    return {
      message:''
    };
  },
  mounted() {
    this.getMessage()
  },
  methods: {
    getMessage(){
      this.message = 'Mixins mean that you can create and share some function in Mixins page'
    }
  }
}