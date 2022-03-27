<template>
  <div class="team_members__table_filters_wrap d-flex justify-content-between align-items-end mt-5">
    <b-form class="w-50 d-flex m-0">
      <b-form-group
        class="w-50 text-silver m-0"
      >
        <template #label>
          <p class="text-uppercase text-black-50 m-0">
            Role
          </p>
        </template>
        <b-form-select
          :value="selectedRole"
          :options="roles"
          class="w-100"
          @change="updateSelectedRole($event)"
        />
      </b-form-group>
      <b-form-group
        label="Time tracking"
        class="w-50 ml-4 mb-0"
      >
        <template #label>
          <p class="text-uppercase text-black-50 m-0">
            Time tracking
          </p>
        </template>
        <b-form-select
          :value="selectedTimeTracking"
          labe="Time tracking"
          class="d-inline-block"
          :options="timeTracking"
          @change="updateSelectedTimeTracking($event)"
        />
      </b-form-group>
    </b-form>

    <b-btn
      class="mr-0 h-25"
      variant="primary"
    >
      Invite member
    </b-btn>
  </div>
</template>

<script>
export default {
  name: 'TeamMembersTableFilters',
  props: {
    selectedRole: {
      type: String,
      default: ''
    },
    roles: {
      type: Array,
      default: () => []
    },
    selectedTimeTracking:{
      type: String,
      default: ''
    },
    timeTracking: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    updateSelectedRole (val) {
      this.$emit('update:selectedRole', val)
    },

    updateSelectedTimeTracking (val) {
      this.$emit('update:selectedTimeTracking', val)
    }
  }
}
</script>