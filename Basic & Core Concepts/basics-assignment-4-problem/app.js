const app = Vue.createApp({
    data() {
        return {
            user: '',
            buttonToggle: true,
            showParagraph: 'visible',
            paragraph: '',
            pStyle: '',
        }
    },
    computed: {
        userStyle() {
            if (this.user === 'Leonardo') {
                return 'user1'
            } else if (this.user === 'Sharon') {
                return 'user2'
            }
        },
    },
    watch: {
        buttonToggle(value) {
            this.showParagraph = value ? 'visible' : 'hidden'
        },
        paragraph(value) {
            this.pStyle = `background-color: ${value};`
        }
    },
    methods: {
        btnToggle() {
            this.buttonToggle = !this.buttonToggle
        }
    }
})

app.mount('#assignment')