import moment from 'moment';
import {
  Data,
  ChatDate,
  ChatText,
  DataWithoutChatDate,
} from '../models/conversationModel';

import { nanoid } from '@reduxjs/toolkit';
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
  private isNotDate(data: Data): data is ChatText {
    return (data as ChatText).message !== undefined;
  }
  private isDate(data: Data): data is ChatDate {
    return (data as ChatDate).dateType !== undefined;
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

  sortMessagesBasedOnConsecutiveUserId(conversationData: Data[]) {
    const sortedConversation = [];
    let currentUserId = null;
    let currentGroup = [];
    conversationData.forEach((currentMessage) => {
      if (this.isNotDate(currentMessage)) {
        if (currentMessage.user.id === currentUserId) {
          currentGroup.push(currentMessage);
        } else {
          if (currentGroup.length > 0) {
            if (currentGroup.length > 1) {
              sortedConversation.push({
                sortedType: 'sorted',
                content: currentGroup,
                id: nanoid(),
              });
            } else {
              sortedConversation.push(currentGroup[0]);
            }
          }
          currentUserId = currentMessage.user.id;
          currentGroup = [currentMessage];
        }
      } else {
        if (currentGroup.length > 0) {
          if (currentGroup.length > 1) {
            sortedConversation.push({
              sortedType: 'sorted',
              content: currentGroup,
              id: nanoid(),
            });
          } else {
            sortedConversation.push(currentGroup[0]);
          }
          currentGroup = [];
        }
        sortedConversation.push(currentMessage);
      }
    });
    if (currentGroup.length > 0) {
      if (currentGroup.length > 1) {
        sortedConversation.push({
          sortedType: 'sorted',
          content: currentGroup,
          id: nanoid(),
        });
      } else {
        sortedConversation.push(currentGroup[0]);
      }
    }
    sortedConversation.forEach((group) => {
      if (group.sortedType === 'sorted') {
        for (let i = group.content.length - 1; i > 0; i--) {
          const currentCreatedAt = new Date(group.content[i].createdAt);
          const previousCreatedAt = new Date(group.content[i - 1].createdAt);
          if (
            currentCreatedAt.getMinutes() === previousCreatedAt.getMinutes()
          ) {
            delete group.content[i - 1].createdAt;
          }
        }
      }
    });
    return sortedConversation;
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

export function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp);
  const now = new Date();
  const sameDay =
    now.getDate() === date.getDate() &&
    now.getMonth() === date.getMonth() &&
    now.getFullYear() === date.getFullYear();

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday =
    yesterday.getDate() === date.getDate() &&
    yesterday.getMonth() === date.getMonth() &&
    yesterday.getFullYear() === date.getFullYear();

  if (sameDay) {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }); // returns "HH:MM"
  } else if (isYesterday) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString(); // returns "MM/DD/YYYY"
  }
}
