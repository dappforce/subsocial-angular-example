export interface PostListItemData {
  id: string;
  ownerId: string;
  ownerImageUrl: string;
  spaceName: string;
  title: string;
  summary: string;
  imageUrl: string;
  createdAtTime: number;
  repliesCount: number;
  hiddenRepliesCount: number;
  visibleRepliesCount: number;
  sharesCount: number;
  upvotesCount: number;
  downvotesCount: number;
  isSharedPost: boolean;
  isComment: boolean;
  isShowMore: boolean;
  ownerName: string;
  postLink: string;
  isMyPost: boolean;
  hidden: boolean;
  body: string;
  tags: string[];
  spaceId?: string;
  link?: string;
  sharedPostId?: string;
  rootPostId?: string;
  spaceLink?: string;
  upvoteActive?: boolean;
  downvoteActive?: boolean;
}
