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
      this.message = 'Hello I am mixins'
    }
  }
}