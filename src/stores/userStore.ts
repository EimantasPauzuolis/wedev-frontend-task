import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => state,
  actions: {
    addUser(user: User) {
      this.users = [
        ...this.users,
        {
          ...user,
          id: String(this.users.length + 1),
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
  users: [
    {"id": "1","firstName":"E1","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "2","firstName":"E2","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "3","firstName":"E3","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "4","firstName":"E4","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "5","firstName":"E5","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "6","firstName":"E6","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "7","firstName":"E7","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "8","firstName":"E8","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "9","firstName":"E9","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "10","firstName":"E10","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "11","firstName":"E11","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "12","firstName":"E12","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "13","firstName":"E13","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "14","firstName":"E14","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "15","firstName":"E15","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "16","firstName":"E16","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "17","firstName":"E17","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "18","firstName":"E18","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "19","firstName":"E19","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "20","firstName":"E20","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "21","firstName":"E21","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "22","firstName":"E22","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "23","firstName":"E23","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "24","firstName":"E24","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "25","firstName":"E25","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "26","firstName":"E26","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "27","firstName":"E27","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
    {"id": "28","firstName":"E28","surname":"PAUZUOLIS","email":"eimantas.pauzuolis@gmail.com","address":"9 Bow Street","country":"United Kingdom"},
  ]
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
