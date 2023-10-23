export * from "./types";

export function makeCheerId(ideaId: string, userId: string): string {
    return `${ideaId}-${userId}`;
}
