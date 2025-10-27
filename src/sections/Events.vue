<template>
  
    <div class="min-h-screen w-full flex flex-col px-6 pt-6 md:px-20 bg-[radial-gradient(ellipse_at_50%_100%,#000_0%,#360643_60%,#1a0033_100%)]">
      <h1 class="text-center text-xl md:text-4xl font-myFont font-bold text-green shadow-orange mb-8">
        Let’s Get Spooky!
      </h1>

      <div class="flex justify-center items-center mb-16">
        <img :src="Carnival" alt="" class="w-[200px] h-[200px] md:w-[370px] md:h-[370px]" />
      </div>

<div class="flex flex-wrap md:flex-nowrap justify-center lg:justify-around items-center gap-3 gap-y-12 lg:gap-8 shadow-orange">

  <div class="w-36 md:w-64 md:h-38 flex flex-col items-center bg-secondary/40 rounded-xl relative overflow-visible">
    <img :src="Pumpkin"
      class="w-20 h-20 md:w-32 md:h-32 -translate-y-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-14" />
    <p class="-translate-y-8 text-sm md:text-xl font-semibold text-white">Jack-o'-lantern</p>
  </div>

  <div class="w-36 md:w-64 md:h-38 flex flex-col items-center bg-secondary/40 rounded-xl relative overflow-visible">
    <img :src="TrickorTreat"
      class="w-20 h-20 md:w-32 md:h-32 -translate-y-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-14" />
    <p class="-translate-y-8 text-sm md:text-xl font-semibold text-white">Trick or Treat</p>
  </div>

  <div class="w-36  md:w-64 md:h-38 flex flex-col  items-center bg-secondary/40 rounded-xl relative overflow-visible">
    <img :src="Ghost"
      class="w-20 h-20 md:w-32 md:h-32 -translate-y-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-14" />
    <p class="-translate-y-8 text-sm md:text-xl font-semibold text-white">Costume Contest</p>
  </div>

  <div class="w-36  md:w-64 md:h-38 flex flex-col items-center bg-secondary/40 rounded-xl relative overflow-visible">
    <img :src="Hauntedhouse"
      class="w-20 h-20 md:w-32 md:h-32 -translate-y-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-14" />
    <p class="-translate-y-8 text-sm md:text-xl font-semibold text-white">Haunted House</p>
  </div>

</div>

       
    </div>
 
</template>

<script setup>

import Pumpkin from '@/assets/images/Pumpkin.png'
import TrickorTreat from '@/assets/images/Trick or Treat.png'
import Hauntedhouse from '@/assets/images/haunted house.png'
import Ghost from '@/assets/images/ghost.png'
import Carnival from '@/assets/images/Carnival.png'
</script>
