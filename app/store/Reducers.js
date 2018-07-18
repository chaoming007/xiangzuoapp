const initState={
    searchHistoryTuff:false
}

const SET_SEARCH_HISTORY="SET_SEARCH_HISTORY"    //显示，隐藏搜索历史


function reducerFun(state=initState,action){
    let {type,dat}=action
    switch(type){
        case SET_SEARCH_HISTORY:
            state.searchHistoryTuff=!state.searchHistoryTuff
            return Object.assign({},state)
            break
        default:
            return state
    }
}

// 控制搜索历史显示隐藏
export const setSearchHistory=()=>{    
    return {
        type:SET_SEARCH_HISTORY
    }
}

export default reducerFun
