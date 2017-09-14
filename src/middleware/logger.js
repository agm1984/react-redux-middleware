export default function ({ dispatch }) {
    return (next) => (action) => {

        // This runs every time an action creator returns an action
        console.log(action)
        next(action)
    }
}