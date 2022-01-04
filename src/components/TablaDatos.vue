<template>

<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            POKEMONES
          </th>
          <th class="text-left">
            URL
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in array_pokemones.results"
          :key="item.name"
        >
          <td>{{item.name}}</td>
          <td>{{item.url}} </td>
        </tr>
      </tbody>
    </template>
    
  </v-simple-table>
  
</template>
<script>
export default {
    data () {
      
    },
    props:['array_pokemones'],
    created(){
      this.llenar()
    },
    methods:{
      llenar(){
        console.log(Object.keys(this.array_pokemones).length)
        
      }
    }
  }





  /*
  <ul>
      <li v-for="pokemon in array_pokemones.results" v-bind:key="pokemon.name">
        <a href="">{{pokemon.name}}</a>
      </li>
    </ul>
  
  
  
  
  */
</script>


