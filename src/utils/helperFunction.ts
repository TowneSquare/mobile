interface Tags {
  name: string;
}
interface ItemWithName {
  name: string;
}
export function SearchFuntion<T extends Tags>(
  tags: T[],
  searchWord: string
): T[] {
  const newData = tags.filter((item: T) => {
    const tagDetails = item.name ? item.name.toUpperCase() : ''.toUpperCase();
    const search = searchWord.toUpperCase();
    return tagDetails.includes(search);
  });
  return newData;
}
export function ExtractTags(sentence: string): string[] {
  const tags: string[] = [];
  const words = sentence.split(/\s+/);
  words.forEach((word) => {
    if (word.startsWith('#') || word.startsWith('@') || word.startsWith('$')) {
      tags.push(word);
    }
  });
  return tags;
}

export const getPostTime = (time: string): string => {
  const currentTime = Math.floor(new Date().getTime() / 1000.0);
  const postCreationTime = Math.floor(new Date(time).getTime() / 1000.0);
  const timeElapsed = currentTime - postCreationTime;
  // console.log(timeElapsed);
  if (timeElapsed == 0) {
    return 'Just now';
  } else if (timeElapsed <= 59) {
    return `${timeElapsed}s`;
  } else if (timeElapsed > 59 && timeElapsed <= 3600) {
    return `${Math.floor(timeElapsed / 60)}m`;
  } else if (timeElapsed >= 3600 && timeElapsed <= 86400) {
    return `${Math.floor(timeElapsed / 3600)}h`;
  } else if (timeElapsed > 86400 && timeElapsed <= 604800) {
    return `${Math.floor(timeElapsed / 86400)}d`;
  } else if (timeElapsed > 604800 && timeElapsed <= 31536000) {
    const month = new Date(time).getMonth();
    const date = new Date(time).getUTCDate();
    return `${date} ${getMonth(month)}`;
  } else {
    const month = new Date(time).getMonth();
    const date = new Date(time).getUTCDate();
    const year = new Date(time).getUTCFullYear();
    return `${date} ${getMonth(month)} ${year.toString().slice(2, 4)}`;
  }
};

const getMonth = (index: number): string => {
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return MONTHS[index];
};

export const getCreatedTime = (time: string) => {
  return `${new Date(time).getDate()}/${new Date(time).getMonth()}/${new Date(
    time
  ).getUTCFullYear()}`;
};

export function Search<T extends ItemWithName>(
  items: T[],
  searchTerm: string
): T[] {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return items.filter((item) =>
    item.name.toLowerCase().includes(lowerCaseSearchTerm)
  );
}
export function isUrlEncoded(str: string) {
  try {
    return decodeURIComponent(str) !== str;
  } catch (err) {
    return false;
  }
}

export function encodeUri(str: string) {
  if (isUrlEncoded(str)) {
    return str;
  } else return encodeURIComponent(str);
}
export function isBase64(str: string) {
  const base64Regex =
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  return base64Regex.test(str);
}

export function search<T>(items: T[], searchTerm: string, field: keyof T): T[] {
  // Filter the items based on the search term
  return items.filter((item) =>
    String(item[field]).toLowerCase().includes(searchTerm.toLowerCase())
  );
}
