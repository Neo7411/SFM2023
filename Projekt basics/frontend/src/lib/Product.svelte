<script>
    import Gyros from "$lib/images/foods/gyros.jpg"
    import Hamburger from "$lib/images/foods/hamburger.jpg"
    import Lepcsanka from "$lib/images/foods/lepcsanka.jpg"
    import Palacsinta from "$lib/images/foods/palacsinta.jpg"
    import Pizza from "$lib/images/foods/pizza.jpg"
    import Sushi from "$lib/images/foods/sushi.jpg"
    import { Button } from "flowbite-svelte"

    export let count = 0
    export let price = 0
    export let type = "burger"
</script>

<div class="flex-row border border-gray-400 rounded-xl overflow-hidden w-full">
    {#if type == "gyros"}
    <img src={Gyros} alt="kep" class="object-cover w-full h-[200px]"/>
    <p class="text-2xl font-bold ml-3 mt-2">Gyros</p>
    {:else if type == "pizza"}
    <img src={Pizza} alt="kep" class="object-cover w-full h-[200px]"/>
    <p class="text-2xl font-bold ml-3 mt-2">Pizza</p>
    {:else if type == "hamburger"}
    <img src={Hamburger} alt="kep" class="object-cover w-full h-[200px]"/>
    <p class="text-2xl font-bold ml-3 mt-2">Hamburger</p>
    {:else if type == "lepcsanka"}
    <img src={Lepcsanka} alt="kep" class="object-cover w-full h-[200px]"/>
    <div class="flex mt-3 justify-between">
        <p class="text-2xl font-bold ml-3">Lepcsánka</p>
        <p class="mr-3 mt-2 bg-purple-500 h-1/2 rounded-xl px-3 text-sm text-white">jabuci's favorite</p>
    </div>
    {:else if type == "palacsinta"}
    <img src={Palacsinta} alt="kep" class="object-cover w-full h-[200px]"/>
    <p class="text-2xl font-bold ml-3 mt-2">Pancake</p>
    {:else if type == "sushi"}
    <img src={Sushi} alt="kep" class="object-cover w-full h-[200px]"/>
    <p class="text-2xl font-bold ml-3 mt-2">Sushi</p>
    {/if}
    <div class="flex justify-between">
        <p class="ml-4">30-40 min</p>
        <p class="text-center mr-5">{price} Ft</p>
    </div>
    <div class="flex justify-end">
        {#if count > 0}
        <Button size="sm" class="mx-4 mb-4 mt-2 w-full bg-purple-600 text-white font-medium -" on:click={() => {count -= 1}}>Remove</Button>
        <Button size="sm" class="mx-4 mb-4 mt-2 bg-white hover:bg-white text-black w-[10px] font-medium cursor-default">{count}</Button>
        <Button size="sm" class="mx-4 mb-4 mt-2 w-full bg-purple-600 text-white font-medium -" on:click={() => {count += 1}}>Add </Button>
        {:else}
        <Button size="sm" class="mx-4 mb-4 mt-2 w-full bg-purple-600 text-white font-medium -" on:click={() => {count += 1}}>Add to cart</Button>
        {/if}
    </div>
</div>