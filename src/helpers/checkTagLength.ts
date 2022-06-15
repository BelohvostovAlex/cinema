export const checkTagsArrayLength = (tags: string[]): string[] => {
  if (tags.length > 5) {
    const newTags = tags.slice(0, 5);
    newTags.splice(5, 0, 'more...');
    return newTags;
  }
  return tags;
};

export const checkTagLength = (tags: string) => {
  if (tags) {
    const newTags = checkTagsArrayLength(tags.split(','));

    return newTags.map((tag) => {
      if (tag.length > 7) {
        const newTag = tag.substring(0, 7) + '...';
        return newTag;
      }
      return tag;
    });
  }
};
