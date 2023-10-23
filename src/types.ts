export type Goal = {
    id: string,
    name: string,
    color: string,
    icon: string,
    order: number,
};

export type Idea = {
    id: string,
    title: string,
    author: User,
    goals: Goal[],
    externalLinks: ExternalLink[],
    date: Date,
    content: string,
    supports: number,
};

export type DbIdea = {
    id: string,
    title: string,
    authorId: string,
    goalIds: string[],
    externalLinks: ExternalLink[],
    date: Date,
    content: string,
    supports: number,
};

export type Comment = {
    id: string,
    author: User,
    ideaId: string,
    date: Date,
    content: string,
    rating: number,
};

export type DbComment = {
    id: string,
    authorId: string,
    ideaId: string,
    date: Date,
    content: string,
    rating: number,
};

export type User = {
    id: string,
    name: string,
    date: Date,
    externalLinks: ExternalLink[],
    bio: string,
};

export type ExternalLinkType = "instagram" | "discord" | "slack" | "googledrive";
export type ExternalLink = {
    type: ExternalLinkType,
    url: string,
};

export type Discussion = {
    id: string,
    users: User[],
    lastMessage: Message;
};

export type DbDiscussion = {
    id: string,
    userIds: string[],
    lastMessageId: string,
};

export type Notification = {
    id: string,
    from: User,
    content: string,
    date: Date,
};

export type DbNotification = {
    id: string,
    fromId: string,
    content: string,
    date: Date,
};

export type Message = {
    id: string,
    discussionId: string,
    author: User,
    date: Date,
    content: string,    
};

export type DbMessage = {
    id: string,
    discussionId: string,
    authorId: string,
    date: Date,
    content: string,
};

export type Cheer = {
    id: string,
    authorId: string,
    ideaId: string,
};
