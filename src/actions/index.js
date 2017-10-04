export const selectUser = (user) => {
    console.log("you clicked the user", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }

}