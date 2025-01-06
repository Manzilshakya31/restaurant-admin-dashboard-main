// app/api/uploadthing/generate-token.ts

import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Handler to generate UploadThing token
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Only allow POST requests for security
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    try {
        // Retrieve credentials from environment variables
        const apiKey = process.env.UPLOADTHING_API_KEY;
        const appId = process.env.UPLOADTHING_APP_ID;
        const regionsEnv = process.env.UPLOADTHING_REGIONS;

        if (!apiKey || !appId || !regionsEnv) {
            throw new Error('Missing UploadThing credentials in environment variables.');
        }

        // Convert regions from comma-separated string to array
        const regions = regionsEnv.split(',').map(region => region.trim());

        // Create the JSON object
        const json = {
            apiKey,
            appId,
            regions,
        };

        // Base64 encode the JSON object
        const token = Buffer.from(JSON.stringify(json)).toString('base64');

        // Return the token
        return res.status(200).json({ token });
    } catch (error: any) {
        console.error('Error generating UploadThing token:', error.message);
        return res.status(500).json({ error: 'Failed to generate token.' });
    }
}
