export * from "./types";

export function makeCheerId(ideaId: string, userId: string): string {
    return `${ideaId}-${userId}`;
}

export function makeVoteId(commentId: string, userId: string): string {
    return `${commentId}-${userId}`;
}
