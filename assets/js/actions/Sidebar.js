import * as AppActions from 'actions/App'

export const OPEN = 'SIDEBAR_OPEN'
export const open = () => ({
    type: OPEN,
})

export const CLOSE = 'SIDEBAR_CLOSE'
export const close = () => ({
    type: CLOSE,
})
