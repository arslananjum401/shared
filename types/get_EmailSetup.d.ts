type T_EmailSetup = {
    id: string;
    emailLogoEnable: boolean;
    emailBannerEnable: boolean;
    logoImage: string;
    logoHeight: string;
    logoWidth: string;
    bannerImage: string;
    bannerWidth: string;
    emailDelay: number;
    createdAt: Date;
    emailBrandingTranslations: {
        languageId: string;
        createdAt: Date;
        pdfFileName: string;
        subject: string;
        message: string;
        footerNote: string;
        footerNoteEnable: boolean;
        language: {
            id: string;
            languageName: string;
            languageCode: string;
        };
    }[];
}

export interface Get_EmailSetup extends T_EmailSetup {
    bannerImage: string;
    logoImage: string;
}
