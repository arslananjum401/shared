type NotificationType = "BulkDownload-Quotation"
    | "BulkDownload-ShopifyOrderInvoice"
    | "BulkDownload-ManualInvoice"
    | "Ticket-Assignment-Res-To-Client"
    | "Ticket-Assignment-Res-To-Agent"
    | "close-conversation-client"
    | "Create Ticket"
    | "Reopen-Ticket"
export type Notification = {
    id: string;
    notificationType: NotificationType;
    detail: LooseObject;
    read: boolean;
    opened: boolean;
    storeId: string | null;
    userId: string;
    createdBy: string;
    createdAt: Date;

}
type LooseObject = {
    [key: string]: any
}