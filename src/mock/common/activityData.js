import {users, groups} from './index'

const events = [
  {
    type: 0,
    event: 'August Iteration'
  },
  {
    type: 1,
    event: 'Message'
  },
  {
    type: 2,
    event: 'Project Progress'
  }
]

const activities = users.map((user, index) => {
  return {
    user: Object.assign({}, user, {group: groups[user.groupId]}),
    activity: events[index % events.length],
    template: ''
  }
})

const templates = [
  (user, activity) => { return `${user.name} In <a >${user.group}</a> Create a new project <a>${activity.event}</a>` },
  (user, activity) => { return `${user.name} In <a >${user.group}</a> released a <a>${activity.event}</a>` },
  (user, activity) => { return `${user.name} In <a >${activity.event}</a> Update to published status` }
]

export {activities, templates}
