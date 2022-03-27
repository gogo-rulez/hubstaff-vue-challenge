<template>
  <div class="team_members__tooltip_wrap mt-3">
    <p>
      {{ numberOfOwners }} of {{ getTeamMembers.count }} members counts towards your pricing plan
      <b-icon-info-circle-fill
        v-b-tooltip.hover
        title="Viewers don't count towards your Team of 10 (Premium) plan"
        variant="black-50"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: 'TeamMembersOwnerCounter',
  props: {
    getTeamMembers: {
      type: Object,
      default: () => {}
    },
    numberOfOwners:{
      type: Number,
      default: 0
    }
  },
}
</script>