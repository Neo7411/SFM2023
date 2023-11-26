<script>
    import Header from "$lib/Header.svelte";
    import IceCream from "$lib/images/icecream.png"
    import Kobanyai from "$lib/images/K2O.png"
</script>

<Header />
<div class="flex justify-center">
    <div class="flex w-8/12 gap-5">
        <div class="bg-purple-100 flex rounded-xl w-1/2">
            <div>
                <img src={IceCream} alt="icecream"/>
            </div>
            <div class="pr-10">
                <p class="mt-8">Ice cream</p>
                <p class="text-3xl font-extrabold text-purple-600 mt-3 w-48">20% OFF</p>
            </div>
        </div>
        <div class="bg-orange-100 flex rounded-xl w-1/2">
            <div>
                <img src={Kobanyai} alt="icecream"/>
            </div>
            <div class="pr-10">
                <p class="mt-8">Actimel</p>
                <p class="text-3xl font-extrabold text-orange-600 mt-3 w-48">99% OFF</p>
            </div>
        </div>
    </div>
</div>

