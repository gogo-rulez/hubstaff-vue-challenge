<template>
  <div class="team_members__table_wrap mt-5">
    <b-table
      hover
      borderless
      selectable
      select-mode="single"
      thead-class="border-bottom border-black-50"
      :fields="tableHeaders"
      :items="teamMembersList"
    >
      <!-- checkboxes column -->
      <template #head(select)>
        <b-form-checkbox
          v-model="selectAllRows"
        />
      </template>
      <template #cell(select)>
        <b-form-checkbox
          :checked="selectAllRows"
        />
      </template>
      <template #cell(name)="field">
        <div class="d-flex align-items-center">
          <span
            class="d-inline-block mr-3 bg-success rounded-circle"
            style="flex: 0 0 20px; height: 20px;"
          />
          <p class="h6 m-0">
            {{ field.value }}
          </p>
        </div>
      </template>

      <!-- role column -->
      <template #cell(role)="data">
        <b-button
          class="border-0 shadow-none p-0"
          variant="transparent"
        >
          {{ data.value }}
          <b-icon-pencil
            font-scale="0.95"
            variant="transparent"
            :style="{'opacity': data.rowSelected ? 1 : 0}"
          />
        </b-button>
      </template>

      <!-- projects column -->
      <template #cell(projects)="data">
        <b-button
          class="border-0 shadow-none p-0"
          variant="transparent"
        >
          {{ data.value }}
          <b-icon-pencil
            font-scale="0.95"
            variant="transparent"
            :style="{'opacity': data.rowSelected ? 1 : 0}"
          />
        </b-button>
      </template>

      <!-- payment column -->
      <template #cell(payment)="data">
        <b-button
          class="border-0 shadow-none p-0"
          variant="transparent"
        >
          {{ data.value ? data.value : 'No pay rate / No bill rate' }}
          <b-icon-pencil
            font-scale="0.95"
            variant="transparent"
            :style="{'opacity': data.rowSelected ? 1 : 0}"
          />
        </b-button>
      </template>

      <!-- limits column -->
      <template #cell(limits)="data">
        <div class="d-flex align-items-center">
          <div class="d-flex flex-column">
            <p
              class="d-flex flex-column m-0"
            >
              <small
                :class="data.value.weekly ? 'text-black' : 'text-black-50'"
              >
                {{ data.value.weekly ? `${data.value.weekly} / week` : 'No weekly limit' }}
              </small>
              <small
                :class="data.value.daily ? 'text-black' : 'text-black-50'"
              >
                {{ data.value.daily ? `${data.value.daily} / day` : 'No daily limit' }}
              </small>
            </p>
          </div>
          <b-button
            class="border-0 shadow-none p-0 ml-2"
            variant="transparent"
          >
            <b-icon-pencil
              variant="transparent"
              font-scale="0.95"
              :style="{'opacity': data.rowSelected ? 1 : 0}"
            />
          </b-button>
        </div>
      </template>

      <!-- time tracking column -->
      <template #cell(time_tracking)="data">
        <p
          class="d-inline-block m-0 py-1 px-3 text-white text-center rounded h6"
          :class="data.value === 'enabled' ? 'bg-success' : 'bg-error'"
        >
          {{ data.value }}
        </p>
      </template>

      <!-- actions column -->
      <template #cell(actions)>
        <b-dropdown
          :id="`dropdown`"
          text="Actions"
          size="sm"
          variant="transparent"
          class="border rounded px-3 bg-white"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
    <p
      class="mb-0 text-black-50"
    >
      <small>Showing {{ teamMembersList.length }} of {{ getTeamMembers.count }} members</small>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TeamMembersTable',
  props: {
    getTeamMembers: {
      type: Object,
      default: () => {}
    },
    teamMembersList: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      tableHeaders: [
        {
          key: 'select',
          label: '',
          tdClass: 'align-middle p-0',
          thClass: 'align-middle p-0'
        },
        {
          key: 'name',
          label: 'Member',
          tdClass: 'align-middle',
          thClass: 'align-middle'
        },
        {
          key: 'role',
          tdClass: 'align-middle',
          thClass: 'align-middle'
        },
        {
          key: 'projects',
          tdClass: 'align-middle',
          thClass: 'align-middle'
        },
        {
          key: 'payment',
          tdClass: 'align-middle',
          thClass: 'align-middle'
        },
        {
          key: 'limits',
          tdClass: 'align-middle',
          thClass: 'align-middle'
        },
        {
          key: 'time_tracking',
          tdClass: 'align-middle',
          thClass: 'align-middle'
        },
        {
          key: 'actions',
          label: '',
          tdClass: 'align-middle',
          thClass: 'align-middle'
        },
      ],
      selectAllRows: false
    }
  },

  methods: {

  }
}
</script>