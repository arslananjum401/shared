interface Role {
    roleName: string;
    roleType: "Custom" | "General";
    scopes: string[];
    id: string;
}

interface Store {
    id: string;
    setupStepsCompleted: string[]
    shopifyStoreId: string;
    storeName: string;
    sessionId: string;
    emailDelay: string | null;
    email: string | null;
    contactEmail: string;
    templateId: string | null;
    emailTemplateId: string | null;
    storeHostName?: string | null,
    storePhoneNumber?: string | null,
    storeAddress?: string | null,
    billed: boolean | null;
}

export interface ClientUser {
    id: string;
    firstName: string;
    middleName: string | null;
    lastName: string;
    userName: string;
    email: string;
    isVerifiedEmail: boolean;
    isEnabled: boolean;
    isDeleted: boolean;
    profileImage: string;
    createdBy: string;
    createdAt: string;
    roles: Role[];
    stores: Store[];
}