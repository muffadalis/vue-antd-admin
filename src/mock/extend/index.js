import Mock from 'mockjs'
import {logos, sayings, positions, avatars, admins} from '../common'

const Random = Mock.Random

Random.extend({
  admin () {
    return this.pick(admins)
  },
  welcome () {
    return this.pick(['Take a break.', 'What are you going to eat?', 'Do you want to hit a dota?', "I'm guessing you're probably tired."])
  },
  timefix () {
    const time = new Date()
    const hour = time.getHours()
    return hour < 9 ? 'Good morning' : (hour <= 11 ? 'Good morning.' : (hour <= 13 ? 'Good afternoon.' : (hour <= 20 ? 'Good afternoon' : 'Good evening')))
  },
  avatar () {
    return this.pick(avatars)
  },
  position () {
    return this.pick(positions)
  },
  saying () {
    return this.pick(sayings)
  },
  logo () {
    return this.pick(logos)
  }
})
