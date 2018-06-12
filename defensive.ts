enum UserState {
  ACTIVE = "ACTIVE",
  FROZEN = "FROZEN",
  DELETED = "DELETED",
}

enum UserAction {
  CREATE_FOLDER = "CREATE_FOLDER",
  SEND_SPAM = "SEND_SPAM",
  DELETE_ACCOUNT = "DELETE_ACCOUNT",
}

interface StateMachine {
  state: UserState;
  handleUserAction(action: UserAction);
}

class UserStateMachine implements StateMachine {
  state: UserState;

  constructor(startingState: UserState) {
    this.state = startingState;
  }

  handleUserAction(action: UserAction) {
    if (this.state === UserState.ACTIVE && action === UserAction.CREATE_FOLDER) {
      return UserState.ACTIVE;
    }
    
    if (this.state === UserState.ACTIVE && action === UserAction.SEND_SPAM) {
      return UserState.FROZEN;
    }
  
    if (this.state === UserState.ACTIVE && action === UserAction.DELETE_ACCOUNT) {
      return UserState.DELETED;
    }

    throw new Error("invalid")
  }
}
