const getDate = () => {
  const date = new Date();

  const currentDay =
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const currentMonth =
    date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const formatDate = `${currentYear}-${currentMonth}-${currentDay}`;

  return formatDate;
};

export default getDate;
