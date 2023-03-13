<template>
  <app-page title='Create user'>
    <user-form @submit='onSubmit'/>
  </app-page>
</template>

<script lang='ts' setup>
import AppPage from '@/components/AppPage.vue'
import type { User } from '@/stores/userStore'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { RoutePaths } from '@/router/types'
import UserForm from '@/components/Forms/UserForm.vue'

const userStore = useUserStore()
const router = useRouter()

function onSubmit(user: User) {
  userStore.addUser(user)
  router.push(RoutePaths.UserList)
}


</script>