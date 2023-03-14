import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => state,
  actions: {
    addUser(user: User) {
      this.users = [
        ...this.users,
        {
          ...user,
          id: String(this.users.length + 1)
        }
      ]
    },
    removeUser(id: string) {
      this.users = this.users.filter(user => id !== user.id)
    },
    updateUser(id: string, user: User) {
      this.users = this.users.map(u => {
        if (id === u.id) {
          return user
        }
        return u
      })
    }
  }
})

const state: UserState = {
  users: generateUsers(67)
}

export type UserState = {
  users: Array<User>;
};

export type User = {
  id: string;
  firstName: string;
  surname: string;
  email: string;
  address: string;
  country: string;
}

function generateUsers(number: number) {
  return Array(number).fill(0).map((n, i) => ({
    id: `${i + 1}`,
    firstName: `Name${i + 1}`,
    surname: `Surname${i + 1}`,
    email: `email${i + 1}@gmail.com`,
    address: `J. Basanaviciaus g. ${i + 1}`,
    country: 'Lithuania'
  }))
}