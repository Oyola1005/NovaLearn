import { lessons } from "../data/lessons";

export const getCourseProgress = (courseId, completedLessons = []) => {
  const courseLessons = lessons[courseId] || [];

  if (courseLessons.length === 0) {
    return 0;
  }

  const completed = courseLessons.filter((lesson) =>
    completedLessons.includes(lesson.id)
  ).length;

  return Math.round((completed / courseLessons.length) * 100);
};

export const getTotalCompletedLessons = (completedLessons = []) => {
  return completedLessons.length;
};