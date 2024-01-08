export const WorkStartDate = new Date(2014, 7, 1);

export const WorkYears = () =>
  new Date().getFullYear() -
  WorkStartDate.getFullYear() +
  (new Date().getMonth() > WorkStartDate.getMonth() ? 1 : 0);
