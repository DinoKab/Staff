import Vue from 'vue';

export default {
  state: {
    staff: []
  },

  mutations: {
    SET_STAFF(state, payload) {
      state.staff = payload;
    }
  },
  actions: {
    LOAD_STAFF({ commit }) {
      Vue.$db.collection('staff')
      .get()
      .then(querySnapshot => {
        let staff = []
        querySnapshot.forEach(s => {
          const data = s.data()
          let worker = {
            id: s.id,
            name: data.name,
            dob: data.dob
          }
          
          staff.push(worker)
        })

        commit('SET_STAFF', staff)
      })
      .catch(error => console.log(error))
    }
  },
  getters: {
    getStaff: state => state.staff
  }
}
