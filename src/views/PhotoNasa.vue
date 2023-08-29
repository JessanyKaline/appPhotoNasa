<script setup>
import { onMounted, reactive } from 'vue'
import { getAPOD } from '@/services/nasaApi'

const state = reactive({
  loading: true,
  show: false,
  title: '',
  subTitle:'',
  date: '',
  img: '',
  text: ''  
})

const fetchAPODData = async () => {
  try {
    const apodData = await getAPOD();

    state.title = apodData.title
    state.subTitle = apodData.copyright
    state.date = apodData.date
    state.text = apodData.explanation
    state.img = apodData.hdurl
    state.loading = false

    return apodData;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    return null;
  }
}

onMounted(() => {
  fetchAPODData();
})

</script>

<template> 
    <v-container  >
      <v-card
        class="mx-auto"
        color="#0D0D0D"
        elevation="10"
      >
        <div v-if="state.loading" class="text-center mt-10">
          <v-progress-circular
            indeterminate
            size="60"
            color="white"
          ></v-progress-circular> 
        </div>     
        <v-else>
              <v-img
                :src="state.img"
                cover
              ></v-img>
        </v-else>

              <v-card-title>
                {{state.title}}
              </v-card-title>

              <v-card-subtitle>
                {{ state.subTitle }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="orange-lighten-1"
                  variant="text"
                  @click="state.show = !state.show"
                >
                  Explore
                </v-btn>

                <v-spacer></v-spacer>
                
              </v-card-actions>

                <v-expand-transition>
                  <div v-show="state.show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ state.text }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
      </v-card>
    </v-container>
      
 
</template>