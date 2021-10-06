<script context="module" lang="ts">
    import type { ErrorLoad } from '@sveltejs/kit';

    export const load: ErrorLoad = ({ status }) => {
        let message: string;

        if (status === 404) {
            message = 'Page not found';
        } else {
            message = 'Something went wrong';
        }

        return {
            props: {
                message,
            },
        };
    };
</script>

<script lang="ts">
    export let message: string;
</script>

{message}
<a href="/">Back</a>
