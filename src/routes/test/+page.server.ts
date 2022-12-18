import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({url}) => {
    let host = url.host;
	return { host }
};
