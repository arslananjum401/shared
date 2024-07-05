import { SupportChat } from "./supportChat"
export type AgentSupportChats = {
    chats: SupportChat[];
    assignedChats: number;
    unAssignedChats: number;
}