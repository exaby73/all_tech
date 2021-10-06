<script context="module" lang="ts">
    import type { Load, LoadOutput } from '@sveltejs/kit';

    export const load: Load = async ({ fetch }) => {
        const frontendsResponse = await fetch('/api/frontends.json');
        const frontends = await frontendsResponse.json();
        const backendsResponse = await fetch('/api/backends.json');
        const backends = await backendsResponse.json();

        return {
            props: {
                frontends,
                backends,
            },
        };
    };
</script>

<script lang="ts">
    import { goto } from '$app/navigation';

    import type { Tech } from 'src/types';

    export let frontends: Tech[];
    export let backends: Tech[];

    let frontend: string;
    let backend: string;

    $: buttonShouldEnable = !!frontend && !!backend;

    function submit() {
        if (!buttonShouldEnable) {
            return alert("This isn't right...");
        }

        const url = `/${frontend}/${backend}`;
        goto(url);
    }
</script>

<svelte:head>
    <title>Home | All techs</title>
</svelte:head>

<h1>This app is a show of all the tech stacks I know</h1>
<p>Just choose a tech stack, and see an app built in it.</p>

<select bind:value={frontend}>
    <option value={undefined} disabled={frontend === undefined} selected>Choose a frontend</option>

    {#each frontends as f}
        <option value={f.value} disabled={frontend === f.value}>{f.name}</option>
    {/each}
</select>

<select bind:value={backend}>
    <option value={undefined} disabled={backend === undefined} selected>Choose a backend</option>

    {#each backends as b}
        <option value={b.value} disabled={backend === b.value}>{b.name}</option>
    {/each}
</select>

<button on:click={submit} disabled={!buttonShouldEnable}>Submit</button>
