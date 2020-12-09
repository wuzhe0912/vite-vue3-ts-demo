import { createStore } from 'vuex';

interface State {
  player: string,
  list: any[]
}

export default createStore({
  state: {
    player: 'Pitt',
    list: []
  },

  mutations: {
    createList(state: any, newList: string) {
      state.list.push(newList)
    },

    updateList(state: any, payload: any) {
      const { index, status } = payload
      state.list[index].isFinished = status
    },

    deleteList(state: any, index: number) {
      state.list.splice(index, 1)
    },
  }
});