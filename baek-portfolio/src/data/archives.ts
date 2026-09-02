export type ArchiveChannel = {
  name: string;
  url: string;
  description: string;
  metric: string;
};

export type ArchivePost = {
  date: string;
  title: string;
  source: string;
  metric: string;
};

export type Archives = {
  channels: ArchiveChannel[];
  posts: ArchivePost[];
};

export const archives: Archives = {
  channels: [],
  posts: [],
};
