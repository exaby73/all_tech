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

    function isActiveLink(link: string) {
        console.log($page.path, link);
        return $page.path === link;
    }
</script>

<nav class="max-w-6xl m-auto">
    <div class="flex justify-between py-6 px-5 ">
        <span class="text-3xl">Nabeel Parkar</span>

        <ul class="flex space-x-5">
            {#each links as link}
                <li class={isActiveLink(link.link) ? 'text-blue-600' : ''}>
                    <a href={link.link}>{link.name}</a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
