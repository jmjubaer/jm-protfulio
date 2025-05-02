/* eslint-disable @typescript-eslint/no-explicit-any */
import { TMessage } from "@/types";

export const sendMessage = async (payload: TMessage) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};
