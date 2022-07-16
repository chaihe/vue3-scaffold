<!-- home -->
<template>
  <div class="container mx-auto px-4">
    <el-carousel class="rounded-lg" height="300px" :interval="3000">
      <el-carousel-item
        v-for="item in [
          'MoonBirds -Special Version 1',
          'MoonBirds -Special Version 2',
          'MoonBirds -Special Version 3',
        ]"
        :key="item"
      >
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div
      class="flex flex-row mt-3 space-x-4 font-mono text-white text-lg font-bold h-32"
    >
      <div
        class="basis-1/2 cursor-pointer border rounded-lg shadow-lg flex items-center justify-center bg-emerald-500 my-2"
        @click="itemClick"
      >
        QUEST
      </div>
      <div
        class="basis-1/2 cursor-pointer border rounded-lg shadow-lg flex justify-center items-center bg-emerald-500 my-2"
        @click="itemClick"
      >
        INFO
      </div>
    </div>

    <div class="relative rounded-xl overflow-auto">
      <div
        class="grid grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
      >
        <div class="p-4 rounded-lg shadow-lg bg-gray-700">
          <div class="relative rounded-xl overflow-auto p-1">
            <div
              class="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
            >
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">01</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">02</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">03</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">04</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">05</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">06</div>
            </div>
            <div class="product_info static bg-gray-700 text-left mt-3">
              <div class="product_tile">MoonBirds -Special Version 1</div>
              <div class="product_subtitle">20 Rare | 100 in Total</div>
              <div class="product_price">20.0 ETH</div>
              <button
                class="absolute bottom-1 right-2 rounded-lg p-1 bg-indigo-500"
              >
                Get Rare
              </button>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-lg shadow-lg bg-gray-700">
          <div class="relative rounded-xl overflow-auto p-1">
            <div
              class="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
            >
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">01</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">02</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">03</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">04</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">05</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">06</div>
            </div>
            <div class="product_info static bg-gray-700 text-left mt-3">
              <div class="product_tile">MoonBirds -Special Version 1</div>
              <div class="product_subtitle">20 Rare | 100 in Total</div>
              <div class="product_price">20.0 ETH</div>
              <button
                class="absolute bottom-1 right-2 rounded-lg p-1 bg-indigo-500"
              >
                Get Rare
              </button>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-lg shadow-lg bg-gray-700">
          <div class="relative rounded-xl overflow-auto p-1">
            <div
              class="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
            >
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">01</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">02</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">03</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">04</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">05</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">06</div>
            </div>
            <div class="product_info static bg-gray-700 text-left mt-3">
              <div class="product_tile">MoonBirds -Special Version 1</div>
              <div class="product_subtitle">20 Rare | 100 in Total</div>
              <div class="product_price">20.0 ETH</div>
              <button
                class="absolute bottom-1 right-2 rounded-lg p-1 bg-indigo-500"
              >
                Get Rare
              </button>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-lg shadow-lg bg-gray-700">
          <div class="relative rounded-xl overflow-auto p-1">
            <div
              class="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
            >
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">01</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">02</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">03</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">04</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">05</div>
              <div class="p-4 rounded-lg shadow-lg bg-violet-500">06</div>
            </div>
            <div class="product_info static bg-gray-700 text-left mt-3">
              <div class="product_tile">MoonBirds -Special Version 1</div>
              <div class="product_subtitle">20 Rare | 100 in Total</div>
              <div class="product_price">20.0 ETH</div>
              <button
                class="absolute bottom-1 right-2 rounded-lg p-1 bg-indigo-500"
              >
                Get Rare
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="product mt-3">
      <div
        class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2"
      >
        <div
          class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
        >
          <h1
            class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white"
          >
            Beach House in Collingwood
          </h1>
          <p
            class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400"
          >
            Entire house
          </p>
        </div>
        <div
          class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"
        >
          <img
            src="../assets/images/home/01.png"
            alt=""
            class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src="../assets/images/home/02.png"
            alt=""
            class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src="../assets/images/home/03.png"
            alt=""
            class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
        </div>
        <div
          class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"
        >
          <button
            type="button"
            class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Check availability
          </button>
        </div>
        <p
          class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400"
        >
          This sunny and spacious room is for those traveling light and looking
          for a comfy and cosy place to lay their head for a night or two. This
          beach house sits in a vibrant neighborhood littered with cafes, pubs,
          restaurants and supermarkets and is close to all the major attractions
          such as Edinburgh Castle and Arthur's Seat.
        </p>
      </div>
    </main>

    <div class="sm:text-center">
      这将只在640px及更宽的屏幕上居中显示文本，而不是在小屏幕上
    </div>
    <div class="text-center color sm:text-left">
      这将使文字在手机上居中，并在640px及更宽的屏幕上左对齐
    </div>
    <div class="bg-green-500 md:bg-red-500 text-white">grenn-red</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
  console.log("onMounted");
});

const itemClick = () => {
  console.log("itemClick");
};
</script>

<style scoped>
.container {
  min-width: 648px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
