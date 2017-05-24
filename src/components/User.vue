<template>
  <div>

    <div class="oLoader" v-if="loading">
        <div class="oLoading"></div>
    </div>

    <div class="container">
       <!-- <div class="h-200 d-flex flex-row w-100 sticky-top bg-primary text-white">
            <div class="p-2">Flex item 1</div>
            <div class="p-2">Flex item 2</div>
            <div class="p-2">Flex item 3</div>
        </div> -->

        <ul class="nav nav-pills sticky-top">
        <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>

       <!-- <div>
             <div class="card" style="display: block; margin: 10px; width: 20rem;">
                <div class="card-block">
                    <p class="card-title">Name: <input type="text" v-model="newUser.name" style="width: 10rem;"> </p>
                    <p class="card-text">Company: <input type="text" v-model="newUser.company.name" style="width: 10rem;"></p>
                    <a href="#" class="btn btn-outline-primary" @click="add(newUser)">Add</a>
                </div>
            </div>
            <h5>New User: <br>Name: {{newUser.name}}<br>Company: {{newUser.company.name}}</h5>
        </div>
        <div>
        <button class="btn btn-outline-info" @click="filterUserByName(users)">{{users}}</button>
        </div> -->
        <div class="row no-gutters">
        
            <div class="card" style="display: block; margin: 10px; width: 20rem;" v-for="(user, id) in users">
                <div class="card-block">
                    <p class="card-title justify-content-center">Name : <input type="text" v-model="user.name" style="width: 10rem;"> </p>
                    <p class="card-text">{{user.company.name }}</p>
                    <a href="#" class="btn btn-outline-success" @click="save(user)">Save</a>
                    <a href="#" class="btn btn-outline-danger" @click="remove(user)">Delete</a>
                </div>
            </div>
        
            <p class="alert bg-faded" v-show="emptyUser">There are any informations to display</p>
        </div>
        <button class="btn btn-success" @click="clickAlert">Call alert</button>
        <button class="btn btn-success" @click="launchModal()">Launch modal</button>
        
        <div class="modal fade" v-if="modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>


    </div>

  </div>
</template>

<script>

export default {

  data: function () {
    return {
        message: 'Work!',
        loading: false,
        users: [],
        show: true,
        alert: false,
        modal: false,
        newUser: {
            name: 'Paul',
            company: {
                name: 'Laxis Tech.',
                catchPhrase: 'Some thing newest'
            }
        }
    }
  },
  mounted() {

    // return this.$http.get('http://jsonplaceholder.typicode.com/users').then(response => {
    this.$user = this.$resource('users{/id}', {}, {}, {
        before: () => { this.loading = true },
        after: () => { this.loading = false }
    });

    this.$user.query().then(response => {
        // success callback
        this.users = response.data
    }, (response) => {
        // error callback
        console.log(response, 'Error')
    });
  },
  methods: {
      add (user) {
        this.$user.save({id: user.id}, {name: user.name}).then((response) => {
        }, (response) => {
            console.log('Error', response)

        })
      },

      save (user) {
        // this.loading = true;

        this.$user.update({id: user.id}, {name: user.name}).then((response) => {

        // this.$http.put('http://jsonplaceholder.typicode.com/users/' + user.id, {

        //     name: user.name

        // }).then((response) => {

        }, (response) => {

            console.log('Error', response)

        })
        // .then(_ => {

        //     this.loading = false

        // })
      },

      remove (user){
        //   this.loading = true;
          this.$user.remove({id: user.id}).then((response) => {
        //   this.$http.delete('http://jsonplaceholder.typicode.com/users/' + user.id).then((response) => {
            this.users = this.users.filter(h => h !== user)

        }, (response) => {

            console.log('Error', response)

        })
        // .then(_ => {

        //     this.loading = false

        // })
      },

      filterUserByName (value){

         return value.sort();   

      },
      showIFrame(){
          this.show = !this.show
      },
      clickAlert(){
          this.alert = !this.alert
          this.modal_ = !this.modal_
        //   $(this.alert).alert()
        // $(this.alert = !this.alert).alert()
      }
    },
    computed: {
        emptyUser(){
            return this.users.length <= 0;
        },
         launchModal(){
          this.modal = !this.modal
            $(this.modal).show('toggle')
      }
    }

}

</script>


<style>

.container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: .96rem;
    text-align: left;
}
.oLoader{
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,1);
    background-color: rgba(0,0,0,.7);
    z-index: 3;
    height: 100%;
    width: 100%;
}
.oLoading{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 5px solid #f3f3f3;/* Light grey */
    border-left: 5px solid #2c3e50; /* Blue */
    border-right: 5px solid #2c3e50;
    border-radius: 50%;
    animation: spinner 2s linear infinite;
    z-index: 5;
}
.myMedia{
    border-left: 5px solid #3498db;

}
img{
    width: 64px;
    height: 64px;
}

@keyframes spinner{
    0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}


</style>
