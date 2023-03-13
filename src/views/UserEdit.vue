<template>
  <app-page title='Edit user'>
    <user-form @submit='onSubmit' :user='editableUser' />
  </app-page>
</template>

<script lang='ts' setup>
import AppPage from '@/components/AppPage.vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { computed, onMounted } from 'vue'
import UserForm from '@/components/Forms/UserForm.vue'
import { RoutePaths } from '@/router/types'
import type { User } from '@/stores/userStore'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const editableUser = computed(() => userStore.users.find(u => u.id === route.params.userId))

function onSubmit(user: User) {
  userStore.updateUser(route.params.userId as string, user)
  router.push(RoutePaths.UserList)
}

onMounted(() => {
  if (!editableUser.value) {
    router.push(RoutePaths.UserList)
  }
})

</script>