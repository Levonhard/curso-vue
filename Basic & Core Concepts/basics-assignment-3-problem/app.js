const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    watch: {
        counter() {
            const that = this
            setTimeout(function() {
                that.counter = 0
            }, 5000)
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num
        },
        result() {
            if (this.counter < 37) {
                return 'Not there yet'
            } else if (this.counter === 37) {
                return this.counter
            } else {
                return 'Too much!'
            }
        },
    },
})

app.mount('#assignment')