const initialState = {
    tutorial_page: 0,
}

export function tutorialReducer(state = initialState, action) {
    console.log('tutorial reducer', state.tutorial_page, action)
    switch (action.type){
        case 'TUTORIAL_NEXT':
            return { ...state,
                     tutorial_page:  state.tutorial_page + 1
            }

        default:
            return state
    }
}


/*

return { ...state,
    tutorial: {
        ...state.tutorial,
        tutorial_page:  state.tutorial.tutorial_page + 1
    }
}*/
