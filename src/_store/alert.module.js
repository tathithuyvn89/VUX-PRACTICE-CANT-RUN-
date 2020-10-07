export const alert = {
    namespaced : true,
    state : {
        type: null,
        message: null
    },

    actions: {

        success({commit}, message) {
            commit('success', message)
        },

        error({commit}, message) {
            commit('error', message)
        },

        clear({commit}, message) {
            commit('clear', message)
        }   
    }
}