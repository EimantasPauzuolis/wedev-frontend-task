<template>
  <app-page title='Users'>
    <div class='flex flex-col space-y-2'>
      <div class='flex justify-between'>
        <p v-if='users.length === 0'>
          There are no users.
        </p>
        <app-button @click='handleCreate'>Create user</app-button>
      </div>


      <div class="relative overflow-x-auto shadow-md sm:rounded-lg" v-if='users.length'>
        <table class="w-full text-sm text-left text-gray-500 bg-white">
          <thead class="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">
              First name
            </th>
            <th scope="col" class="px-6 py-3">
              Surname
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3">
              Country
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="bg-white border-b dark:border-gray-700" v-for='(user, index) in users'>
            <td class="px-6 py-4">
              {{ user.firstName }}
            </td>
            <td class="px-6 py-4">
              {{user.surname}}
            </td>
            <td class="px-6 py-4">
              {{user.email}}
            </td>
            <td class="px-6 py-4">
              {{user.address}}
            </td>
            <td class="px-6 py-4">
              {{user.country}}
            </td>
            <td class="px-6 py-4">
              <div class='flex gap-2'>
                <app-button @click='handleEdit(index)'>Edit</app-button>
                <app-button @click='handleDelete(index)'>Delete</app-button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </app-page>
</template>

<script lang='ts' setup>
import AppPage from '@/components/AppPage.vue'
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue'
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'
import { RouteNames, RoutePaths } from '@/router/types'

const userStore = useUserStore()
const router = useRouter();
const users = computed(() => userStore.users)

function handleDelete(index: number) {
  userStore.removeUser(index);
}

function handleCreate() {
  router.push(RoutePaths.UserCreate)
}

function handleEdit(index: number) {
  router.push({
    name: RouteNames.UserEdit,
    params: {
      userId: index
    }
  })
}

</script>