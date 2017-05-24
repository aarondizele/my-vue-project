import store from '../Store'

export default{
    name: 'counter',
    data () {
        return {
            notications_: 'Counter works!',
            incrementor: store.state
            
        }
    },
    methods: {
        increment(){
            store.increment()
        },
        decrement(){
            store.decrement()
        }
    }

}