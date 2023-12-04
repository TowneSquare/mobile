interface Tags {
  name: string;
}
export function SearchFuntion<T extends Tags>(
  tags: T[],
  searchWord: string
): T[] {
  const newData = tags.filter((item: T) => {
    const tagDetails = item.name ? item.name.toUpperCase() : "".toUpperCase();
    const search = searchWord.toUpperCase();
    return tagDetails.includes(search);
  });
  return newData;
}
export function ExtractTags(sentence: string): string[] {
  const tags: string[] = [];
  const words = sentence.split(/\s+/);
  words.forEach((word) => {
    if (word.startsWith("#") || word.startsWith("@") || word.startsWith("$")) {
      tags.push(word);
    }
  });
  return tags;
}

export const getTime = (time:string) => {
  
}
