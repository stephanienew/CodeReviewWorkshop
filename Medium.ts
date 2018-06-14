/**
 * Returns true if the current time is after the given cutoff
 * @param cutoffHour Number from 0-23 that represents the cutoff time
 */
const isAfterCutoff = (cutoffHour: number): boolean => {
  return new Date().getHours() > cutoffHour;
}

/**
 * Returns true if the migration was scheduled for the given
 * user and team.
 */
const scheduleMigration = (userId: number, teamId: number): boolean => {
  const user = getUser(userId);
  if (!user) {
    return false;
  }

  const team = getTeam(teamId);
  if (!team) {
    return false;
  }

  if (user.team.id != teamId) {
    return false;
  }

  migrationQueue.enqueue({
    userId: userId, 
    teamId: teamId
  });

  return true;
}

const runDataCleanup = () => {
  const stream = new ProductTableStream();
  stream.on("data", (product) => {
    // Some processing happens here
    // ...
  }).on("end"), () => {
    return;
  }).on("error"), (err) => {
    throw err;
  }
}
