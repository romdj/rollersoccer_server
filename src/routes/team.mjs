import teams from '../../data/teams';

const team = {
  method: 'GET',
  path: '/teams',
  config: {
    id: 'root',
    handler: () => JSON.stringify(teams)
  }
};

const getTeam = {
  method: 'GET',
  path: '/team/{teamId}',
  config: {
    id: 'root',
    handler: (request) => JSON.stringify(teams.filter(team => team === request.params.teamId))
  }
}
export { team, getTeam };