
import { createStore, mapGetters } from 'vuex'

const store = createStore({
    state: {
        sessionInfo: {},
        
    },
    getters: {
        getSessionInfo(state) {
            console.log(state.sessionInfo + "---Getting Session Info");
            return state.sessionInfo
        },
       
    },
    mutations: {
        setSessionInfo(state, receivedSessionInfo) {
            console.log("Set User Session" + JSON.stringify(receivedSessionInfo))
            state.sessionInfo = receivedSessionInfo
        },
        

    },
    

})

export { store };

