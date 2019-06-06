import Hapi from '@hapi/hapi';

import { getTeam, team } from './routes/team.mjs';

const server = Hapi.server({ port: 2019 });

server.route({
    method: 'GET',
    path: '/all',
    config: {
        id: 'all',
        handler: () => 'ok'
    }
});
server.route(team);
server.route(getTeam);

const routeAll = server.match('get', '/all');
const routeTeam = server.match('get', '/teams');


server.start();