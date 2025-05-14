import { TQueryParam } from "@/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllProjects = async (queryParams?: TQueryParam[]) => {
    try {
        const params = new URLSearchParams();

        if (queryParams) {
            queryParams.forEach((item) => {
                params.append(item.name, item.value.toString());
            });
        }

        const queryString = params.toString();
        const baseUrl = `${process.env.NEXT_PUBLIC_BASE_API}/projects`;
        const fullUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
        const res = await fetch(fullUrl, {
            next: {
                revalidate: 1800
            }
            
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};
export const getSingleProjects = async (id: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
            {
                cache: "no-cache",
            }
        );
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};
