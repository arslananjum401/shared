import { SupportMessage } from "./supportMessage";
type SupportChatUser = {
    id: string;
    firstName: string;
    lastName: string;
    profileImage: string | null;
}
export type SupportChat = {
    id: string;
    supportMessages: SupportMessage[];
    store?: {
        storeName: string;
        storeHostName: string | null;
    };
    problemName: string;
    chatStatus: "Opened" | "Closed";
    agent: SupportChatUser | null;
    user: SupportChatUser;
    createdBy: string;
    createdAt: Date;
}