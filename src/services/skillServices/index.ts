/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSkills = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
            cache: "force-cache",
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};
