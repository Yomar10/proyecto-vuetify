<template >
  <v-container grid-list-md>
    <!-- <v-layout row wrap>
      <v-flex xs12 sm6 md4 
      v-for="(item, index) in api" v-bind:key="index"
      v-bind:item="item"
    v-bind:index="index"
      >
            <v-card
    max-width="400"
    dark
    class="indigo darken-1"
    >
    <v-img
      class="white--text align-end"
      height="50%"
      v-bind:src="numero"
    >
     
    </v-img>
     <v-card-title color="primary">{{item.name}}</v-card-title>
      <v-card-title color="primary">{{item.name}}</v-card-title>
    <v-card-text class="text--primary">
      <div>lorem</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text 
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-flex>
    </v-layout> -->
    

    <!-- POKEMON ALEATORIO -->
    <v-card
    class="mx-auto"
    color="teal"
    max-width="200px"
  >
    <v-img
      class="align-end"
      max-height="100%"
      v-bind:src="pokemon_aleatorio.imagen"
    >
      <v-card-title class="red--text">{{pokemon_aleatorio.nombre}}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div>
        <v-progress-linear
          v-model="pokemon_aleatorio.hp"
          height="25"
          color="green darken-4"
        >
          <strong class="white--text">Hp: {{pokemon_aleatorio.hp}}%</strong>
        </v-progress-linear>
      </div>
      <div class="mt-1">
        <v-progress-linear
          v-model="pokemon_aleatorio.attack"
          color="amber"
          height="25"
        >
          <strong class="white--text">Ataque: {{pokemon_aleatorio.attack}}%</strong>
        </v-progress-linear>
      </div>
      <div class="mt-1">
        <v-progress-linear
          v-model="pokemon_aleatorio.defense"
          color="red"
          height="25"
        >
          <strong class="white--text">Defensa: {{pokemon_aleatorio.defense}}%</strong>
        </v-progress-linear>
      </div>
    </v-card-text>
  </v-card>
  <!-- ASLKALSKALSKLAKSL----------------------- -->

  <!-- otroo -->
  </v-container>  
</template>
<script>
    import axios from "axios";
    export default {
        data(){
          return{
            api:{},
            array_pokemon:[
              {
                nombre:'yomar',
                hp:59,
                attack:59,
                defense:70,
                imagen:'asasas'
              }
            ],
            pokemon_aleatorio:{
                nombre:null,
                hp:null,
                attack:null,
                defense:null,
                imagen:null
            },
            numero:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            color_elegido:'',
            // coloresssss
            color:['primary','orange','pink','purple'],
            cards:[
              {
                id:1,
                nombre: 'nombresss'
              },
              {
                id:2,
                nombre: 'nombre2'
              },
              {
                id:3,
                nombre:'nombre3'
              }
            ]
          }; 
      },
      components:{
        //   Appbar
      },
        created(){
              const url="https://pokeapi.co/api/v2/pokemon/4";
              axios.get(url).then((result) => {
                this.api=result.data
                this.array_pokemon.push({nombre:this.api.name,
                                          hp:this.api.stats[0].base_stat,
                                          attack:this.api.stats[1].base_stat,
                                          defense:this.api.stats[2].base_stat,
                                          imagen:this.api.sprites.front_default});
              })
              .catch(error=>console.log(error));
              this.elegir_pokemon_aleatorio();
              
        },
        methods:{
            fetchpokemon:function(){
               
            },
            pintar_cards(){
                  var color=['primary','orange','pink','purple']
                  var numero = Math.floor(Math.random()*((color.length-1)-0));
                  var color_elegido = color[numero];
                  return color_elegido; 
            },
            elegir_pokemon_aleatorio(){
              let aleatorio = Math.floor(Math.random()*(150-1))+1;
              const url=`https://pokeapi.co/api/v2/pokemon/${aleatorio}`;
              axios.get(url).then((result)=>{
                this.pokemon_aleatorio.nombre=result.data.name,
                this.pokemon_aleatorio.hp=result.data.stats[0].base_stat,
                this.pokemon_aleatorio.attack=result.data.stats[1].base_stat,
                this.pokemon_aleatorio.defense=result.data.stats[2].base_stat,
                this.pokemon_aleatorio.imagen=result.data.sprites.front_default;
              })
            }
        }   
    }
</script>
