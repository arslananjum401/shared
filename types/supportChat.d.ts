import { SupportMessage } from "./supportMessage";
type SupportChatUser = {
    id: string;
    firstName: string;
    lastName: string;
    profileImage: string | null;
}
export type SupportChat = {
    id: string;
    supportMessages: SupportMessage[]
    problemName: string;
    chatStatus: "Opened" | "Closed";
    agent: SupportChatUser | null;
    user: SupportChatUser;
    createdBy: string;
    createdAt: Date;
}