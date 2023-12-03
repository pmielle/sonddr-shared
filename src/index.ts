export * from "./types.js";

export function makeCheerId(ideaId: string, userId: string): string {
    return `${ideaId}-${userId}`;
}

export function makeVoteId(commentId: string, userId: string): string {
    return `${commentId}-${userId}`;
}

export const placeholder_id = "PLACEHOLDER_ID";
