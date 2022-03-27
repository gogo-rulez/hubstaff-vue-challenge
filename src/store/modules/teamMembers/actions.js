import axios from 'axios'

export const collectTeamMembersData = async ({ commit }, data) => {
  // collect members data, and save it to store

  try {
    const {status, data} = await axios.get('https://run.mocky.io/v3/34234632-e36c-450d-a0a5-63249d1fa3ad');

    if ([200, 201].includes(status)) {
      commit('SET_TEAM_MEMBERS', data);
    }

  } catch (error) {
    console.log('error', error);
  }
}