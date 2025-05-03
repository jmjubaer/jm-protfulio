export type TContact = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
};
export type TError = {
    message: string;
};
export type TMessage = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};
export type TQueryParam = {
    name: string;
    value: string | number | boolean;
};
export type IMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
};
