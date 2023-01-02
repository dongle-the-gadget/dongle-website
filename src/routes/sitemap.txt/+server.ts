import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    // Get all +page.svelte and +page.md from the site
    // Note that we are in a subdirectory of routes
    const modules = import.meta.glob(`../**/+page.{svelte,md}`);

    // Get the path of all pages
    const paths = Object.keys(modules);

    // Convert all paths to an absolute URL, using the url parameter.
    // This is necessary because the paths are relative to the current file.
    // The url parameter is the URL of the current page.
    const absolutePaths = paths.map(path => new URL(path, url.origin).href);

    // For each path, split each element by slash.
    // Remove the final element, which is the filename.
    // Also remove the trailing slash.
    const pathsWithoutFilename = absolutePaths.map(path => path.split('/').slice(0, -1).join('/'));

    // Format the paths so that each path gets its own line.
    const formattedPaths = pathsWithoutFilename.join('\r\n');

    return new Response(formattedPaths, {
        headers: {
            'Content-Type': 'text/plain, charset=utf-8'
        }
    });
};