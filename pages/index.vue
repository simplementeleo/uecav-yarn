<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        PASAR PARA ACA
      </h1>
      <ul class="bg-red-900 p-10 rounded-2xl m-5 text-white">
        <li class="mb-3" v-for="(item, index) in todos" :key="index">  {{ index + 1 }}. {{ item.task }} </li>
      </ul>

      <button @click="ver" >
        ver
      </button>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todos: []
      }
    },
    methods: {
      async ver() {
         const db = this.$fire.firestore.collection('todos')
        try {
          const get = await db.get()
          .then(res => {
            res.forEach(el => {
              console.log(el.data())
              this.todos.push(el.data())
            });
          })
        } catch (error) {
          console.log(error)
        }
      }
    }

  }

</script>

<style>
  /* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
