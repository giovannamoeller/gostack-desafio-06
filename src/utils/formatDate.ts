const formatDate = (date: Date): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
} // TODO

export default formatDate;
