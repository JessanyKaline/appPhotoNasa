<template>
  <v-container>
      <v-row>
        <v-col cols="4" md="2" lg="1" class="font-custom mt-8" >
          <RouterLink to="/">Home</RouterLink>
        </v-col>
        <v-col cols="4" md="2" lg="1" class="font-custom mt-8" >
          <RouterLink to="/photo"> Foto</RouterLink>
        </v-col>
      </v-row>
    </v-container>       
</template>

<style scoped>
.font-custom{
  font-size: 20px;
}
</style>