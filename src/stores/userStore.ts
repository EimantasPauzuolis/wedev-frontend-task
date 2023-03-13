import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => state,
  actions: {
    addUser(user: User) {
      this.users = [
        ...this.users,
        user
      ]
    },
    removeUser(index: number) {
      this.users = this.users.filter((user, i) => i !== index)
    },
    updateUser(index: number, user: User) {
      this.users = this.users.map((u, i) => {
        if (index === i) {
          return user
        }
        return u
      })
    }
  }
})

const state: UserState = {
  users: []
}

export type UserState = {
  users: Array<User>;
};

export type User = {
  firstName: string;
  surname: string;
  email: string;
  address: string;
  country: string;
}
