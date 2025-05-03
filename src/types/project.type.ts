export type TProject = {
    _id: string;
    title: string;
    techTitle: string;
    mainImage: string;
    images: string[];
    features: string[];
    
    technology: string[];
    packages: string[];
    duration: string;
    description: string;
    problem?: string;
    serial: number;
    liveLink: string;
    clientCode: string;
    serverCode?: string;
};
