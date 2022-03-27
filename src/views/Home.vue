<template>
  <div
    v-if="dataReady"
    class="team_members p-5"
  >
    <div class="team_members__title_wrap">
      <h3 class="font-weight-normal">
        Members
      </h3>
    </div>

    <!-- navigation tabs and search field -->
    <TeamMembersPageNav
      :get-team-members="getTeamMembers"
      :search-members-value.sync="searchMembersValue"
    />

    <!-- owner counter and tooltip -->
    <TeamMembersOwnerCounter
      :get-team-members="getTeamMembers"
      :number-of-owners="numberOfOwners"
    />

    <!-- filters and invite member button -->
    <TeamMembersTableFilters
      :selected-role.sync="selectedRole"
      :roles="roles"
      :selected-time-tracking.sync="selectedTimeTracking"
      :time-tracking="timeTracking"
    />

    <!-- the results table -->
    <TeamMembersTable
      :team-members-list="teamMembersList"
      :get-team-members="getTeamMembers"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TeamMembersPageNav from '@/components/teamMembers/PageNav';
import TeamMembersOwnerCounter from '@/components/teamMembers/OwnerCounter';
import TeamMembersTableFilters from '@/components/teamMembers/TableFilters';
import TeamMembersTable from '@/components/teamMembers/Table';

export default {
  name: 'TeamMembers',

  components: {
    TeamMembersPageNav,
    TeamMembersOwnerCounter,
    TeamMembersTableFilters,
    TeamMembersTable
  },

  data () {
    return {
      dataReady: false,
      searchMembersValue: '',
      selectedRole: 'All Roles',
      roles: [
        'All Roles',
        'Owner',
        'Viewer'
      ],
      selectedTimeTracking: 'All Time Tracking',
      timeTracking: [
        'All Time Tracking',
        'Enabled',
        'Disabled'
      ]
    };
  },

  computed: {
    ...mapGetters('teamMembers', ['getTeamMembers']),

    numberOfOwners () {
      // return the number of members that have the "Owner" role

      let members = this.getTeamMembers.members || []
      const owners = members.filter(x => x.role.toLowerCase() === 'owner')
      return owners.length
    },

    teamMembersList () {
      // we get the team members from store
      // and we run them through the existing filters
      // in the return we either return the filtered array of members or an empty array

      let filteredMembers = this.getTeamMembers.members || []

      if (this.searchMembersValue) {
        filteredMembers = filteredMembers.filter(x => x.name.toLowerCase().includes(this.searchMembersValue.toLowerCase()))
      }

      if (this.selectedRole !== 'All Roles') {
        filteredMembers = filteredMembers.filter(x => x.role.toLowerCase() === this.selectedRole.toLowerCase())
      }

      if (this.selectedTimeTracking !== 'All Time Tracking') {
        filteredMembers = filteredMembers.filter(x => x.time_tracking.toLowerCase() === this.selectedTimeTracking.toLowerCase())
      }

      return filteredMembers
    }
  },

  async mounted () {
    // wait for the team members to be collected, then show the page
    await this.collectTeamMembersData()
    this.dataReady = true
  },

  methods: {
    ...mapActions('teamMembers', ['collectTeamMembersData'])
  },

}
</script>

<style lang="scss" scoped>
::v-deep {
  .team_members {

    &__tab {
      border-bottom: 2px solid #efefef;
      border-radius: 0;
      background-color: transparent;
      color: var(--secondary);
      text-transform: uppercase;

      &.active {
        border: none;
        border-bottom: 2px solid var(--primary);
        background-color: transparent;
        color: var(--primary);
      }
    }

    &__table_wrap {
      .b-table-row-selected {
        .btn:hover {
          color: var(--primary);

          .b-icon {
            color: var(--primary);
          }
        }
      }
    }
  }
}
</style>