const app = Vue.createApp({
    data() {
        return {
            outputA: '',
            outputB: '',
            confirmedSet: '',
        }
    },
    methods: {
        showAlert() {
            alert('Showing Alert event!')
        },
        setOutputA() {
            this.outputA = event.target.value
        },
        setOutputB() {
            this.outputB = event.target.value
        },
        confirmSet() {
            this.confirmedSet = this.outputB
        }
    }
})

app.mount('#assignment')