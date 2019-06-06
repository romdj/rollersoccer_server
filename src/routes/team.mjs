import teams from '../../data/teams.json';

const team = {
  method: 'GET',
  path: '/teams',
  config: {
    id: 'teams',
    handler: () => JSON.stringify(teams)
  }
};

const getTeam = {
  method: 'GET',
  path: '/team/{teamId}',
  config: {
    id: 'teamById',
    handler: (request) => JSON.stringify(teams.filter(team => team === request.params.teamId))
  }
}
export { team, getTeam };