<script lang="ts">
    import { page } from '$app/stores';

    const links: { name: string; link: string }[] = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'What is this?',
            link: '/what-is-this',
        },
    ];
</script>

<nav class="container">
    <div class="flex justify-between">
        <span class="text-3xl">Nabeel Parkar</span>

        <ul class="flex space-x-5">
            {#each links as link}
                <li class={link.link === $page.path ? 'text-blue-600' : ''}>
                    <a class="nav-link" href={link.link}>{link.name}</a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
