import React from 'react'

const stateDefault = {
    Component: <p>Default Content</p>
}

export default (state = stateDefault, action) => {
    switch (action.type) {
        case 'OPEN_FORM':
            state.Component = action.Component
            return { ...state }

        default:
            return state
    }
}
