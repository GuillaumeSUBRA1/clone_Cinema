export default [
    {
        context: ['/oauth2', '/login', '/auth','/movie','/session','/booking'],
        target: 'http://localhost:8080',
        secure: true,
    }
]