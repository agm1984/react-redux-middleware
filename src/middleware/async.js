export default ({ dispatch }) => {
    return (next) => (action) => {
        console.log(action)

        // Ignore if action is not a promise, or no payload
        // if (!action.payload || !action.payload.then) return next(action)

        // // Resolve the promise
        // action.payload.then((payload) => {
        //     // Create new action with the old type
        //     // and resolved promise
        //     const newAction = { ...action, payload }

        //     // Dispatch means go to the top (run cycle over again)
        //     dispatch(newAction)
        // })
        if (action.payload.then) return action.payload
            .then((payload) => dispatch({ ...action, payload }))

        return next(action)
    }
}