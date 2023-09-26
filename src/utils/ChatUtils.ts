import moment from 'moment';
export class ChatClass {
  private message: Array<any> = [];
  constructor(message: any[]) {
    this.message = message;
  }
  private groupedDays() {
    return this.message.reduce((acc, el, i) => {
      const messageDay = moment(el.createdAt).format('YYYY-MM-DD');
      if (acc[messageDay]) {
        return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
      }
      return { ...acc, [messageDay]: [el] };
    }, {});
  }
  generateItems() {
    const days = this.groupedDays();
    const sortedDays = Object.keys(days).sort(
      (x, y) => moment(y, 'YYYY-MM-DD').unix() - moment(x, 'YYYY-MM-DD').unix()
    );
    const items = sortedDays.reduce((acc, date) => {
      const sortedMessages = days[date].sort((x, y) => {
        (new Date(y.created_at) as any) - (new Date(x.created_at) as any);
      });
      return acc.concat([
        ...sortedMessages,
        { dateType: 'day', date, id: date },
      ]);
    }, []);

    return items;
  }
  getDisplayDate(array: string[]): string {
    const year = array[0];
    const month = array[1];
    const day = array[2];
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    const compDate: Date = new Date(
      parseFloat(year),
      parseFloat(month) - 1,
      parseFloat(day)
    );
    const diff: number = today.getTime() - compDate.getTime();

    if (compDate.getTime() === today.getTime()) {
      return 'Today';
    } else if (diff <= 24 * 60 * 60 * 1000) {
      return 'Yesterday';
    } else {
      return compDate.toDateString();
    }
  }
}
