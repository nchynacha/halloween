<template>
  <div @click="startBgm"  class=" relative min-h-screen w-full text-white">
    <!-- ผีแมวลอย -->
    <div class="ghost w-14 h-14 md:w-20 md:h-20 hidden md:block" style="top: 10%; left: 5%; animation-delay: 0s;">
      <img :src="Catty" alt="" class="flip-x">
    </div>

    <div class="ghost w-36 h-36 bottom-20 right-0 md:top-10 md:right-0  hidden md:block" style=" animation-delay: 2s;">
      <img :src="Catty" alt="">
    </div>

    <div class="ghost3 w-12 h-12 md:top-10 md:right-[30%] top-10 right-4" style=" animation-delay: 3s;">
      <img :src="Catty" alt="">
    </div>

    <div class="ghost3 w-12 h-12" style="bottom: 10%; left: 5%; animation-delay: 4s;">
      <img :src="Catty" alt="" class="flip-x">
    </div>
    <!-- Floating Button -->
    <button 
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all"
    >
      🎃
    </button>
  

    <Home />
    <History />
    <Events/>
    <Schedule/>
  

    

    
  </div>
</template>

<script setup>


import Events from './sections/Events.vue';
import History from './sections/History.vue';
import Home from './sections/Home.vue'

import Catty from '@/assets/images/kitten.png'

  
import { ref, onMounted, onUnmounted } from 'vue'
import Schedule from './sections/Schedule.vue';

const bgm = ref(null)

const startBgm = () => {
  if (!bgm.value) {
    bgm.value = new Audio('/src/assets/spooky-halloween.mp3')
    bgm.value.loop = true
    bgm.value.volume = 0.1 
  }
  bgm.value.play()
}


const showButton = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showButton.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.flip-x {
  transform: scaleX(-1);
}

.ghost {
  position: fixed;
  animation: float 6s ease-in-out infinite;
  z-index: 2;
}

.ghost3 {
  position: fixed;
  animation: float 6s ease-in-out infinite;
  z-index: 0;
  opacity: 0.6;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-40px);
  }
}


</style>
