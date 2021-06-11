console.log('hello world')
var newapp = new Vue({
    el: '#app',
    data: {
        test: 'test',
        boolean: false,
        array: ['uno', 'due', 'tre'],
        input:'testo iniziale'
    },
    methods:{
        change: function(){
            if(this.boolean == false){
                this.boolean = true
            } else {
                this.boolean = false
            }
            
        }
    }
})