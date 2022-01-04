<template>
  <div>
    <v-app-bar
      indigo darken-1
      color="primary accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="drawer=!drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>YOMAR</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        
      </v-menu>
    </v-app-bar>
      <!-- MODALLLLLLLLLLLLLL -->

    <v-navigation-drawer
      dark
      class="red darken-3"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item >
        <v-list-item-avatar>
          <v-img src="http://www.w3bai.com/w3css/img_avatar3.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Yomar Gabriel</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
  </div>


  
</template>

<script>
export default{
  data() {
    return{
      drawer:null
    }
  },
}
</script>
