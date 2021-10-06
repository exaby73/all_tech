import type { EndpointOutput, RequestHandler } from '@sveltejs/kit';
import type { Tech } from 'src/types';

export const get: RequestHandler = (): EndpointOutput<Tech[]> => {
    return {
        body: [
            {
                value: 'express',
                name: 'Express.js',
            },
        ],
    };
};
