import Hapi from '@hapi/hapi';
import { teams, getTeam } from './routes/team.mjs';

const server = Hapi.server({ port: 2019 });
server.route({
    method: 'GET',
    path: '/all',
    config: {
        id: 'all',
        handler: () => 'ok'
    }
});
server.route(teams);
server.route(getTeam);

const routeAll = server.match('get', '/all');
const routeTeam = server.match('get', '/teams');


server.start();
