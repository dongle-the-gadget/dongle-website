import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    // Return a JSON object with the "names" property.
    // The value is a dictionary with the key "Dongle" and value "7205ea32795b7e27d0caf8190f10ae2aec2e4321c470b663e96d8d22530abf24"
    // Make sure that any site can access this file without being blocked by CORS.
    const data = {
        names: {
            Dongle: "7205ea32795b7e27d0caf8190f10ae2aec2e4321c470b663e96d8d22530abf24"
        }
    }
    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json, charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
};