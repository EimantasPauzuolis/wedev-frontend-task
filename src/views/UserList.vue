<template>
  <app-page title='Users'>
    <div class='flex flex-col space-y-2'>
      <div class='flex justify-between'>
        <p v-if='users.length === 0'>
          There are no users.
        </p>
        <app-button @click='handleCreate'>Create user</app-button>
      </div>
      <input
        v-if='users.length'
        class='rounded shadow-md px-2 my-4 h-12'
        type='text'
        v-model='searchTerm'
        placeholder='Filter by name or surname'
      >
      <div class='relative overflow-x-auto shadow-md sm:rounded-lg' v-if='currentItems.length'>
        <table class='w-full text-sm text-left text-gray-500 bg-white'>
          <thead class='text-xs text-gray-700 uppercase'>
          <tr>
            <th scope='col' class='px-6 py-3'>
              First name
            </th>
            <th scope='col' class='px-6 py-3'>
              Surname
            </th>
            <th scope='col' class='px-6 py-3'>
              Email
            </th>
            <th scope='col' class='px-6 py-3'>
              Address
            </th>
            <th scope='col' class='px-6 py-3'>
              Country
            </th>
            <th scope='col' class='px-6 py-3'>
              Actions
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            class='bg-white border-b'
            v-for='user in currentItems'
            :key='user.id'
          >
            <td class='px-6 py-4'>
              {{ user.firstName }}
            </td>
            <td class='px-6 py-4'>
              {{ user.surname }}
            </td>
            <td class='px-6 py-4'>
              {{ user.email }}
            </td>
            <td class='px-6 py-4'>
              {{ user.address }}
            </td>
            <td class='px-6 py-4'>
              {{ user.country }}
            </td>
            <td class='px-6 py-4'>
              <div class='flex gap-2'>
                <app-button @click='handleEdit(user.id)'>Edit</app-button>
                <app-button @click='handleDelete(user.id)'>Delete</app-button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class='flex gap-2' v-if='totalPages > 1'>
        <app-button
          @click='prev'
          :disabled='isFirstPage'
        >
          Prev
        </app-button>
        <app-button
          v-for='page in totalPages'
          @click='currentPage = page'
          :class='{"ring-1 ring-indigo-800": currentPage === page}'
          :key='page'
        >
          {{ page }}
        </app-button>
        <app-button
          @click='next'
          :disabled='isLastPage'
        >
          Next
        </app-button>
      </div>
    </div>
  </app-page>
</template>

<script lang='ts' setup>
import AppPage from '@/components/AppPage.vue'
import { useUserStore } from '@/stores/userStore'
import { computed, ref } from 'vue'
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'
import { RouteNames, RoutePaths } from '@/router/types'
import { usePagination } from '@/composables/usePagination'

const userStore = useUserStore()
const router = useRouter()
const users = computed(() => userStore.users)
const searchTerm = ref('')


function handleDelete(id: string) {
  userStore.removeUser(id)
}

function handleCreate() {
  router.push(RoutePaths.UserCreate)
}

function handleEdit(id: string) {
  router.push({
    name: RouteNames.UserEdit,
    params: {
      userId: id
    }
  })
}

const filteredUsers = computed(() => users.value.filter(u => {
  if (searchTerm.value) {
    return u.firstName.toLowerCase().includes(searchTerm.value) || u.surname.toLowerCase().includes(searchTerm.value)
  }
  return true
}))

const {
  totalPages,
  currentPage,
  isLastPage,
  isFirstPage,
  currentItems,
  next,
  prev
} = usePagination({ items: filteredUsers, pageSize: 10 })

</script>