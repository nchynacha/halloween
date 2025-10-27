<template>
  <div
    class="relative min-h-screen flex flex-col items-center justify-center  bg-[radial-gradient(ellipse_at_50%_100%,#000_0%,#360643_60%,#1a0033_100%)]">

    <!-- Background Image -->
    <div 
     class="absolute inset-0 bg-contain bg-no-repeat z-0
         bg-[position:center_5%] lg:bg-[position:105%_center]"
  :style="{ backgroundImage: `url(${BlackCat})` }">
    </div>

    <!-- Content -->
    <div class="sm:pl-20 relative z-10 flex flex-col sm:items-start items-center justify-center w-full">
      
      <!-- Halloween Title -->
      <div class="flex items-center flex-col justify-center">
        <div><h1 class=" text-2xl text-primary font-myFont ">
    31 October 2025
  </h1></div>
  <div class="flex items-center  justify-center gap-3 md:text-9xl text-4xl font-creepy text-white shadow-orange tracking-wider">
        <span>H</span>
        <span>A</span>
        <span>L</span>
        <span>L</span>
        <img :src="Pumpkin" alt="pumpkin" class="w-14 h-14 md:w-32 md:h-32 animate-flip-back">
        <span>W</span>
        <span>E</span>
        <span>E</span>
        <span>N</span></div>
      </div>
      <!-- Subtitle -->
  <h2 class="mt-4 text-base md:text-xl text-gray-400 ">
    The biggest horror festival is approaching...
  </h2>


      <!-- Countdown -->
      <div class="flex justify-center text-center space-x-3 sm:space-x-8 text-white font-extrabold mt-10">
    <div class="countdown-box p-4 rounded-xl w-20  md:w-32">
      <div class="text-4xl sm:text-6xl text-green">{{ days }}</div>
      <div class="text-xs sm:text-sm mt-1 text-gray-300">Days</div>
    </div>
    <div class="countdown-box p-4 rounded-xl w-20 md:w-32">
      <div class="text-4xl sm:text-6xl text-green">{{ hours }}</div>
      <div class="text-xs sm:text-sm mt-1 text-gray-300">Hours</div>
    </div>
    <div class="countdown-box p-4 rounded-xl w-20 md:w-32">
      <div class="text-4xl sm:text-6xl text-green">{{ minutes }}</div>
      <div class="text-xs sm:text-sm mt-1 text-gray-300">Minutes</div>
    </div>
    <div class="countdown-box p-4 rounded-xl w-20 md:w-32 hidden md:block">
      <div class="text-4xl sm:text-6xl text-green">{{ seconds }}</div>
      <div class="text-xs sm:text-sm mt-1 text-gray-300">Seconds</div>
    </div>
  </div>

  <p v-if="finished" class="text-2xl md:text-5xl mt-8 text-green shadow-orange font-creepy">
    The Halloween Festival has begun!
  </p>
    </div> 
    
  </div> 
</template>


<script setup>



import Pumpkin from '@/assets/images/Pumpkin.png'

import BlackCat from '@/assets/images/BlackCat.png'

import { ref, onMounted, onUnmounted } from 'vue'



  // -------------------------------
  // Countdown Timer
  // -------------------------------
  const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
const finished = ref(false)

let interval

onMounted(() => {
  const now = new Date()
  const year = now.getFullYear()
  const targetDate = new Date(`${year}-10-31T19:00:00`)
  if (targetDate < now) targetDate.setFullYear(year + 1)

  function updateCountdown() {
    const nowMs = new Date().getTime()
    const distance = targetDate.getTime() - nowMs

    if (distance < 0) {
      finished.value = true
      clearInterval(interval)
      days.value = '00'
      hours.value = '00'
      minutes.value = '00'
      seconds.value = '00'
      return
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24))
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((distance % (1000 * 60)) / 1000)

    days.value = String(d).padStart(2, '0')
    hours.value = String(h).padStart(2, '0')
    minutes.value = String(m).padStart(2, '0')
    seconds.value = String(s).padStart(2, '0')
  }

  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})

</script>

<style scoped>

.flip-x {
  transform: scaleX(1);
}

.countdown-box {
  backdrop-filter: blur(5px);
  border: 2px solid #FF7518;
}

@keyframes flip-back {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.animate-flip-back {
  animation: flip-back 4s linear infinite;
  transform-style: preserve-3d; /* ให้หมุนมีมิติ */
}

</style>
