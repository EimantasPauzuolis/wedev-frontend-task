<template>
  <header>
    <nav class='bg-indigo-600 px-2'>
      <ul class='max-w-7xl mx-auto flex gap-2 py-4 text-white font-semibold'>
        <li>
          <router-link
            :to='RoutePaths.UserList'
            class='hover:bg-indigo-500 rounded p-2'
          >
            Users
          </router-link>
        </li>
        <li>
          <router-link
            :to='RoutePaths.UserCreate'
            class='hover:bg-indigo-500 rounded p-2'
          >
            Create user
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <main class='max-w-7xl mx-auto p-4 bg-white h-screen'>
    <RouterView />
  </main>
</template>

<script setup lang='ts'>
import { RouterLink, RouterView } from 'vue-router'
import { RoutePaths } from '@/router/types'
</script>
