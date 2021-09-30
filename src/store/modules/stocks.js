import Stocks from '../../data/stocks'

export default {
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state, stocks){
            state.stocks = stocks
        }
    },
    actions:{
        buyStock({commit},order){
            commit()
        },
        initStocks({commit}){
            commit('setStocks',Stocks)
        }
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}