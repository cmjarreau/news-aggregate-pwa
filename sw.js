self.addEventListener('install', e => {
    console.log('install');
})

self.addEventListener('fetch', e => {
    console.log('fetch');
})