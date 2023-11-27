<script>
// @ts-nocheck

    import Header from "$lib/Header.svelte";
    import IceCream from "$lib/images/icecream.png"
    import Kobanyai from "$lib/images/K2O.png"
    import Product from "$lib/Product.svelte"
    import Footer from "$lib/Footer.svelte";
    import { logged_in } from "../../stores";
    import { onMount } from "svelte";
	import { goto } from "$app/navigation";

    let logged_in_value = ""
    var pizza = parseInt(localStorage.getItem("pizza"))
    var gyros = parseInt(localStorage.getItem("gyros"))
    var hamburger = parseInt(localStorage.getItem("hamburger"))
    var sushi = parseInt(localStorage.getItem("sushi"))
    var palacsinta = parseInt(localStorage.getItem("palacsinta"))
    var lepcsanka = parseInt(localStorage.getItem("lepcsanka"))
    var basket = parseInt(localStorage.getItem("basket"))

    let basketCount = basket
    $:basketCount = pizza + gyros + hamburger + sushi + palacsinta + lepcsanka

    onMount(() => {
        if (localStorage.getItem("logged_in") != "true") {
            goto("/")
        }
        logged_in_value = localStorage.getItem("logged_in")
    });

    function saveStuff(event){
        localStorage.setItem("pizza", pizza)
        localStorage.setItem("gyros", gyros)
        localStorage.setItem("hamburger", hamburger)
        localStorage.setItem("sushi", sushi)
        localStorage.setItem("palacsinta", palacsinta)
        localStorage.setItem("lepcsanka", lepcsanka)
    }
</script>

{#if logged_in_value == "true"}
<Header basketCount={basketCount} on:buttonPressed={saveStuff}/>
<div class="flex justify-center">
    <div class="flex w-8/12 gap-5">
        <div class="bg-purple-100 flex rounded-xl w-1/2">
            <div>
                <img src={IceCream} alt="icecream"/>
            </div>
            <div class="pr-10">
                <p class="mt-8">Ice cream</p>
                <p class="text-3xl font-extrabold text-purple-600 mt-3 w-32">20% OFF</p>
            </div>
        </div>
        <div class="bg-orange-100 flex rounded-xl w-1/2">
            <div>
                <img src={Kobanyai} alt="icecream"/>
            </div>
            <div class="pr-10">
                <p class="mt-8">Actimel</p>
                <p class="text-3xl font-extrabold text-orange-600 mt-3 w-32">99% OFF</p>
            </div>
        </div>
    </div>
</div>

<div class="flex w-full mt-8">
    <p class="w-8/12 mx-auto font-bold">Products</p>
</div>

<div class="flex mx-auto mt-3 gap-5 justify-between w-8/12">
    <Product type="gyros" bind:count={gyros} price=1000/>
    <Product type="pizza" bind:count={pizza} price=3500/>
    <Product type="lepcsanka" bind:count={lepcsanka} price=2000/>
</div>
<div class="flex mx-auto mt-8 gap-5 justify-between w-8/12">
    <Product type="sushi" bind:count={sushi} price=4000/>
    <Product type="palacsinta" bind:count={palacsinta} price=500/>
    <Product type="hamburger" bind:count={hamburger} price=3000/>
</div>

<Footer/>
{/if}
