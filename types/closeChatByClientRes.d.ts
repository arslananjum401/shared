import { SupportChat } from "./supportChat";

export type CloseChatByClientRes = {
    updatedChat: SupportChat;
    chats: SupportChat[];
}