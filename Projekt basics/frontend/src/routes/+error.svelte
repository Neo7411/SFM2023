<script>
    import { Section, Page500 } from 'flowbite-svelte-blocks';
  </script>

<Section name="page404">
    <Page500 class="mt-[20%]">
        <svelte:fragment slot="h1">404</svelte:fragment>
        <svelte:fragment slot="paragraph">
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">This page does not exist :(</p>
        </svelte:fragment>
    </Page500>
</Section>
