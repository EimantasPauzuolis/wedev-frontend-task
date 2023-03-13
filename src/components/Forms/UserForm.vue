<template>
  <form @submit='onSubmit' class='space-y-2'>
    <app-text-input
      name='firstName'
      label='First name'
      rules='required'
    />
    <app-text-input
      name='surname'
      label='Last name'
      rules='required'
    />
    <app-text-input
      name='email'
      label='Email address'
      rules='required|email'
    />
    <app-text-input
      name='address'
      label='Address'
      rules='required'
    />
    <app-select
      name='country'
      label='Country'
      rules='required'
      :options='countryOptions'
    />
    <div class='flex justify-end'>
      <app-button type='submit'>Submit</app-button>
    </div>
  </form>
</template>

<script lang='ts' setup>
import AppTextInput from '@/components/Inputs/AppTextInput.vue'
import AppSelect from '@/components/Inputs/AppSelect.vue'
import AppButton from '@/components/AppButton.vue'
import { computed, onMounted } from 'vue'
import { useListStore } from '@/stores/listStore'
import { useForm } from 'vee-validate'
import type { User } from '@/stores/userStore'

const emit = defineEmits<{ (e: "submit", user: User): void }>();

const props = defineProps<{
  user?: User
}>();

const listStore = useListStore()
const countryOptions = computed(() => listStore.lists.countries);

const { handleSubmit, handleReset } = useForm<User>({
  initialValues: props.user
})

const onSubmit = handleSubmit((user: User) => {
  emit("submit", user);
  handleReset()
});


onMounted(() => {
  listStore.getCountryList()
})
</script>