<script setup lang="ts">
import { SvgIcon } from '@/components/common'
</script>

<template>
  <div class="relative bg-sky-300/10">
    <div class="absolute rounded-full bg-rose-300 animate-spin top-1/2 w-36 blur-3xl rotate-36 h-36"></div>
    <div class="absolute right-0 w-56 h-48 rounded-full animate-spin bg-violet-400 top-12 blur-3xl rotate-36"></div>
    <div
      class="absolute transition duration-300 ease-in-out rounded-full bg-sky-200 left-1/3 animate-bounce w-72 bottom-12 blur-3xl rotate-36 h-72"
    ></div>
    <div class="absolute bottom-0 right-0 w-48 h-48 bg-green-400 rounded-full animate-pulse blur-3xl"></div>
    <div class="absolute w-24 h-24 bg-yellow-400 rounded-full left-1/4 animate-pulse -top-12 blur-3xl rotate-36"></div>
    <div class="w-full h-screen bg-white/10"></div>
    <div class="absolute top-0 left-0 right-0 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
      <div class="max-w-3xl mx-auto">
        <header class="flex flex-col items-center justify-center h-screen">
          <div class="text-center">
            <div class="flex justify-center mb-12 -mt-36">
              <SvgIcon class="w-24 h-24 text-violet-500" icon="ph:webhooks-logo-duotone" />
            </div>

            <h1 class="text-4xl font-black tracking-tight sm:text-5xl text-slate-800">
              开箱即用的<span
                class="text-transparent bg-clip-text bg-gradient-to-br from-green-400 from-10% to-sky-500 to-70% w-fit px-1"
                >Vue3</span
              >项目
            </h1>
            <p class="mt-6 text-lg font-medium leading-8 text-slate-600">
              本项目基于 Vue3 + Vite2 + TailwindCSS + Pinia +
              Naive，内置了路由、状态管理、国际化、主题切换、错误处理，让你专注于业务开发，无需再花费时间在搭建项目上。
            </p>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>
