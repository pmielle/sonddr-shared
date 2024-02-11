import { DbUser, User } from "./types.js";

export * from "./types.js";



export async function reviveUser(dbDoc: DbUser, userId: string): Promise<User> {
	return reviveUsers([dbDoc], userId)[0];
}

export function reviveUsers(dbDocs: DbUser[], userId: string|undefined): User[] {

    if (dbDocs.length == 0) { return []; }

    // convert dbDocs into docs
    const docs: User[] = dbDocs.map((dbDoc) => {
        dbDoc["isUser"] = userId === undefined ? undefined : dbDoc.id === userId;
        return dbDoc as any;
    });

    // return
    return docs;

}

export function makeCheerId(ideaId: string, userId: string): string {
	return `${ideaId}-${userId}`;
}

export function makeVoteId(commentId: string, userId: string): string {
	return `${commentId}-${userId}`;
}

export function isChange(obj: any): boolean {
	return 'docId' in obj && 'type' in obj;
}

export const placeholder_id = "PLACEHOLDER_ID";

export const ping_str = "SONDDR_PING";

export const delete_str = "SONDDR_DELETE";
