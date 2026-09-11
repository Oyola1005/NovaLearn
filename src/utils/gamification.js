export const XP_PER_LESSON = 20;

export const XP_PER_QUIZ_ANSWER = 10;

export const getLevel = (xp) => {
  return Math.floor(xp / 100) + 1;
};

export const getLevelProgress = (xp) => {
  return xp % 100;
};

export const getNextLevelXP = (xp) => {
  return 100 - (xp % 100);
};

export const addXP = (amount) => {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  if (!user) return;

  const newPoints = (user.points || 0) + amount;

  const updatedUser = {
    ...user,
    points: newPoints,
    level: getLevel(newPoints)
  };

  localStorage.setItem(
    "novalearn_user",
    JSON.stringify(updatedUser)
  );

  return updatedUser;
};