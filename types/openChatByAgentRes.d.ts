import { AgentSupportChats } from "./agentSupportChats";
import { SupportChat } from "./supportChat";

export type OpenChatByAgentRes = {
    updatedChat: SupportChat;
    agentChats: AgentSupportChats;
}