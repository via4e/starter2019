const initialState = {
    page: 0,
}

export function tutorialReducer(state = initialState, action) {
    switch (action.type){
        case 'TUTORIAL_NEXT':
            return { ...state,
                      init: {
                         ...state.init,
                         tutorial_page:  state.init.tutorial_page + 1
                      }
            }

        default:
            return state
    }
}