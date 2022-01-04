<template>
  <!-- <hello-world /> -->

  <!-- <v-layout row wrap> -->
    <v-container>
        <Pokemon-Aleatorio></Pokemon-Aleatorio>
        <TablaDatos :array_pokemones="array_pokemones"></TablaDatos>
        
        
    </v-container>
      
  <!-- </v-layout> -->
  
  <!-- <p></p> -->
</template>

<script>
  // import Vue from 'vue'
  // import HelloWorld from '../components/HelloWorld'
  //IMPORTAR AXIOS SI O SI
  import axios from 'axios'
  import Cards from '../components/Cards';
  import TablaDatos from '../components/TablaDatos';
  // Vue.prototype.$axios = axios;
  export default {
    name: 'Home',

    components: {
      // HelloWorld,
      'Pokemon-Aleatorio':Cards,
      'TablaDatos':TablaDatos
    },
    data(){
      return{
        array_pokemones:[
          {}
        ],

      }
    },
    created() {
      // console.log('ES UNA PRUEBAAAAAAAAAAAAAA')
      // const url=`https://pokeapi.co/api/v2/pokemon/4`;
      // axios.get(url).then((result)=>{           
      //     // console.log('ññññññññññññññññññññ'+result.data);
      //     alert(result.data)
      // })
      this.llenar();
    },
    methods:{
          llenar(){
                    const url = 'https://pokeapi.co/api/v2/pokemon/';
                    axios.get(url).then((result)=>{
                      this.array_pokemones=result.data
                      console.log(this.array_pokemones)      
                    })
                    
          }
          
    }
  }
</script>
