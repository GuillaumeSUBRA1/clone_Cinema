export default [
    {
        context: ['/oauth2', '/login', '/auth','/movie','/session'],
        target: 'http://localhost:8080',
        secure: true,
    }
]