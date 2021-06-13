export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
}) 

export const removeCurrentUser = user => ({
    type: 'REMOVE_CURRENT_USER',
    payload: user
})