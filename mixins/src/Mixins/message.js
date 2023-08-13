export default {
  data() {
    return {
      msg:''
    };
  },
 
  methods: {
    getMessage(value){
      return this.msg = value
    }
  }
}