<template>
  <div
    class="min-h-screen p-6 md:p-20 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_50%_0%,#000_0%,#360643_60%,#1a0033_100%)] text-gray-100">
    
    <section class="w-full max-w-3xl mx-auto">
      <h2
        class="text-center text-2xl md:text-4xl font-myFont font-bold shadow-orange text-green mb-10 border-b border-orange-500/40 pb-4">
        The Night’s Schedule
      </h2>

      <div class="space-y-3">
        <div
          v-for="(item, i) in schedule"
          :key="i"
          class="bg-dark hover:bg-red/30 transition-all duration-300 p-4 rounded-xl border-primary border-x-2 shadow-xl flex flex-col md:flex-row md:space-x-6">
          <div
            class="font-semibold text-base text-orange-400 w-full md:w-32 text-center md:text-left md:text-nowrap">
            {{ item.time }}
          </div>
          <div class="flex-1 text-red-400 font-bold text-center md:text-left">
            {{ item.title }}
          </div>
        </div>
        <!-- Final Note --> <p class="text-gray-500 text-center text-sm italic pt-4"> *Note: The schedule may be subject to change based on weather conditions and participant attendance.* </p>
      </div>

      <div class="text-center mt-16">
        <button
          ref="ctaButton"
          class="bg-orange-600 hover:bg-orange-700 hover:scale-95 text-green font-myFont text-base md:text-2xl font-bold py-4 px-10 rounded-full transition duration-300 uppercase tracking-widest">
          Book Your Fear Ticket
        </button>
        <p class="text-gray-500 mt-3 text-sm italic">
          Limited seats available — don’t miss the scariest night of the year!
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const schedule = [
  { time: "7:00 PM", title: "The Gates Open" },
  { time: "7:00 - 8:00 PM", title: "Trick or Treat Zone" },
  { time: "8:00 - 9:30 PM", title: "Pumpkin Carving Final Judging" },
  { time: "9:30 - 10:30 PM", title: "Costume Contest Showcase & Vote" },
  { time: "10:30 - 11:00 PM", title: "Costume Contest Grand Finale" },
  { time: "11:00 PM - 1:30 AM", title: "EDM Party: Terror Beats" },
  { time: "1:30 - 2:00 AM", title: "Final Call & Closing" }
]
</script>
