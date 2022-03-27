<template>
  <div class="team_members__tabs_wrap mt-5 d-flex justify-content-between">
    <b-tabs pills>
      <b-tab
        :title="`Members (${getTeamMembers.count})`"
        active
        title-link-class="team_members__tab"
      />
      <b-tab
        title="Invites"
        disabled
        title-link-class="team_members__tab"
      />
    </b-tabs>

    <b-input-group
      class="d-inline-flex h-25 w-25 px-2 align-items-center border border-black-50 rounded-pill"
    >
      <b-icon-search />
      <b-form-input
        :value="searchMembersValue"
        size="sm"
        placeholder="Search members"
        class="border-0 bg-transparent shadow-none"
        @keyup="updateSearchMembersValue($event.target.value)"
      />
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: 'TeamMembersPageNav',
  props: {
    getTeamMembers: {
      type: Object,
      default: () => {}
    },
    searchMembersValue:{
      type: String,
      default: ''
    }
  },

  methods: {
    updateSearchMembersValue (val) {
      this.$emit('update:searchMembersValue', val)
    }
  }
}
</script>
