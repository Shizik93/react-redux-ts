import * as UserActionCreator from './user'
import * as TodoActionCreator from './todo'

const ActionCreators = {
    ...TodoActionCreator,
    ...UserActionCreator
}

export default ActionCreators