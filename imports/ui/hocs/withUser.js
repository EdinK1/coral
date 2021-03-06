import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'

const withUser = withTracker(() => {
  const user = Meteor.user()

  return {
    user,
    username: user && user.username,
    email: user && user.emails[0] && user.emails[0].address,
  }
})

export default withUser
