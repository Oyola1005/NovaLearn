export const XP_PER_LESSON = 20;
export const XP_PER_QUIZ_ANSWER = 10;

export const getLevel = (xp = 0) => {
  return Math.floor(xp / 100) + 1;
};

export const getLevelProgress = (xp = 0) => {
  return xp % 100;
};

export const getNextLevelXP = (xp = 0) => {
  return 100 - (xp % 100);
};

export const addXP = (amount) => {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  if (!user) {
    return null;
  }

  const currentXP = user.points || 0;
  const newXP = currentXP + amount;

  const updatedUser = {
    ...user,
    points: newXP,
    level: getLevel(newXP),
  };

  localStorage.setItem(
    "novalearn_user",
    JSON.stringify(updatedUser)
  );

  return updatedUser;
};