import * as actions from '@/store/modules/teamMembers/actions';
import * as getters from '@/store/modules/teamMembers/getters';
import * as mutations from '@/store/modules/teamMembers/mutations';
import state from '@/store/modules/teamMembers/state';

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
