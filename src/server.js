// import Hapi from 'hapi';
const Hapi = require('@hapi/hapi');

const server = Hapi.server({ port: 2019 });
server.route({
    method: 'GET',
    path: '/all',
    config: {
        id: 'all',
        handler: () => 'ok'
    }
});
server.route({
    method: 'GET',
    path: '/teams',
    config: {
        id: 'teams',
        handler: () => {
            return JSON.stringify([{ name: 'Shinobis', country: 'Belgium', logo:'../media/images/teams' }, { name: 'AMSCAS', country: 'France' }]);
        },
    }
});

const routeAll = server.match('get', '/all');
const routeTeam = server.match('get', '/teams');


server.start();
