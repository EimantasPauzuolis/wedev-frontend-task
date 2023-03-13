import { defineStore } from 'pinia'
import { ROUTE_GET_ALL_COUNTRIES } from '@/constants/apiRoutes'
import axios from 'axios'

export const useListStore = defineStore('listStore', {
  state: () => state,
  actions: {
    async getCountryList() {
      try {
        if (this.lists.countries.length !== 0) {
          return;
        }

        const response = await axios.get<CountryResponse>(ROUTE_GET_ALL_COUNTRIES);

        this.lists.countries = response.data.map(c => ({
          label: c.name.common,
          value: c.name.common
        }))

      } catch (e) {
        console.log(e)
      }
    }
  }
})

const state: ListState = {
  lists: {
    countries: []
  }
}

export type ListState = {
  lists: Lists;
};

export type Lists = Record<string, List>;

export type List = Array<{
  label: string;
  value: string | number;
}>;

export type CountryResponse = Array<{
  name: {
    common: string
  }
}>