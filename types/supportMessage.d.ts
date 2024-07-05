type SupportMessageUser = {
    id: string;
    firstName: string;
    lastName: string;
    profileImage: string | null;
    email: string;
}
export type SupportMessage = {
    id: string;
    supportChatId: string;
    receiver?: SupportMessageUser;
    sender: SupportMessageUser;
    delivered: boolean;
    read: boolean;
    sent: boolean;
    messageContent: string;
    messageType: string;
    createdBy: string;
    createdAt: Date;
}
