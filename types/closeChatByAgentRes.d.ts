import { AgentSupportChats } from "./agentSupportChats";
import { SupportChat } from "./supportChat";

export type CloseChatByAgentRes = {
    updatedChat: SupportChat;
    agentChats: AgentSupportChats;
}