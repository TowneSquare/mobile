import moment from "moment";
function groupedDays(messages) {
  return messages.reduce((acc, el, i) => {
    const messageDay = moment(el.createdAt).format("YYYY-MM-DD");
    if (acc[messageDay]) {
      return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
    }
    return { ...acc, [messageDay]: [el] };
  }, {});
}
export default function generateItems(messages) {
  const days = groupedDays(messages);
  const sortedDays = Object.keys(days).sort(
    (x, y) => moment(y, "YYYY-MM-DD").unix() - moment(x, "YYYY-MM-DD").unix()
  );
  const items = sortedDays.reduce((acc, date) => {
    const sortedMessages = days[date].sort((x, y) => {
      new Date(y.created_at) - new Date(x.created_at);
    });
    return acc.concat([...sortedMessages, { dateType: "day", date, id: date }]);
  }, []);

  return items;
}
