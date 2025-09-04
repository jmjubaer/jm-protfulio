/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSkills = async (selectedCategory?: string) => {
    try {
        const url =
            selectedCategory == "All"
                ? `${process.env.NEXT_PUBLIC_BASE_API}/skills`
                : `${process.env.NEXT_PUBLIC_BASE_API}/skills?category=${selectedCategory}`;
        const res = await fetch(url, {
            next: {
                revalidate: 1800,
            },
            cache: "force-cache"
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};
