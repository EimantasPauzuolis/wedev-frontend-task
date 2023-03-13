import { computed, ref, watch } from 'vue'
import type { ComputedRef } from 'vue'

type PaginationOptions<T> = {
  items: ComputedRef<Array<T>>,
  pageSize: number
}

export function usePagination<T>({ items = computed(() => ([])), pageSize = 5 }: PaginationOptions<T>) {
  const currentPage = ref(1)
  const size = ref(pageSize);

  const totalItems = computed(() => items.value.length)
  const totalPages = computed(() => Math.max(
    1,
    Math.ceil((totalItems.value) / size.value),
  ))

  const isFirstPage = computed(() => currentPage.value === 1)
  const isLastPage = computed(() => currentPage.value === totalPages.value)

  function prev() {
    currentPage.value--
  }

  function next() {
    currentPage.value++
  }

  function clamp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max);
  }

  const currentItems = computed(() => {
    const fromIndex = (currentPage.value - 1) * size.value;
    const toIndex = clamp((currentPage.value * size.value), 0, totalItems.value)
    return items.value.slice(fromIndex, toIndex);
  })

  watch(currentItems, () => {
    if (currentItems.value.length === 0 && currentPage.value > 1) {
      currentPage.value--
    }
  });

  return {
    currentPage,
    totalItems,
    totalPages,
    isFirstPage,
    isLastPage,
    prev,
    next,
    currentItems,
    size
  }
}