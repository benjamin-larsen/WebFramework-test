export default function plugin() {
    return {
        name: 'web-framework',

        transform(...args) {
            console.log(args)
        },

        handleHotUpdate(ctx) {
            console.log(ctx.modules[0])
            return []
        }
    }
}