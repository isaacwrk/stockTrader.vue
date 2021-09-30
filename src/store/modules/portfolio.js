export default {
    state:{
        funds: 1000,
        stocks:[]
    },
    mutations:{
        buyStock(state,{stockId,quantity,stockPrice}){
            /*Criando verificação de ação, usando find() se o usuário já tiver ação
            não apagará e sim acrescentará a quantitade */
            const record = state.stocks.find(element => element.id == stockId)
            if(record){
                record.quantity += quantity
            }else{
                state.stocks.push({
                    id: stockId,
                    quantity:quantity
                })
            }
            //ajuste de valor de saldo
            state.funds -= stockPrice * quantity
        },
        sellStock(state,{stockId,quantity,stockPrice}){
            const record = state.stocks.find(element => element.id == stockId)
            if(record.quantity > quantity){
                record.quantity -= quantity
            }else{
                state.stocks.splice(state.stocks.indexOf(record),1)
            }
            state.funds += stockPrice * quantity
        }
    }
}