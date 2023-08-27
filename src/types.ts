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

export type User = {
    id: string,
    name: string,
    date: Date,
    externalLinks: ExternalLink[],
    bio: string,
};

export type ExternalLink = {};

export type Discussion = {
    id: string,
    name: string,
};
