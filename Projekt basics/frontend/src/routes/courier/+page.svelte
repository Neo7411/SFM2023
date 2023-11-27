<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { Button } from 'flowbite-svelte';
	import { Radio } from 'flowbite-svelte';
	import Mcisti from '$lib/images/couriers/mcisti.png';
	import Jozsef from '$lib/images/couriers/jozsef.png';
	import Antonio from '$lib/images/couriers/antonio.png';
	import Tbor from '$lib/images/couriers/t-bor.png';
	import { onMount } from 'svelte';
	import { id, logged_in } from '../../stores';
	import { goto } from '$app/navigation';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	let logged_in_value = '';

	var pizza = parseInt(localStorage.getItem('pizza'));
	var gyros = parseInt(localStorage.getItem('gyros'));
	var hamburger = parseInt(localStorage.getItem('hamburger'));
	var sushi = parseInt(localStorage.getItem('sushi'));
	var palacsinta = parseInt(localStorage.getItem('palacsinta'));
	var lepcsanka = parseInt(localStorage.getItem('lepcsanka'));
	var basket = parseInt(localStorage.getItem('basket'));

  var address = (localStorage.getItem('address'));
  var userid = parseInt(localStorage.getItem('id'));

	let courier = 'mcisti';

	let basketCount = basket;
	$: basketCount = pizza + gyros + hamburger + sushi + palacsinta + lepcsanka;

	onMount(() => {
		if (localStorage.getItem('logged_in') != 'true') {
			goto('/');
		}
		logged_in_value = localStorage.getItem('logged_in');
	});

  async function sendOrder(){
    let courierId = 0;
    if(courier == "mcisti") courierId = 1;
    else if(courier == "jozsef") courierId = 2;
    else if(courier == "t-bor") courierId = 3;
    else if(courier == "antonio") courierId = 4;

    for(let i = 0; i < pizza; i++){
      var asd = fetch('http://localhost:8081/orders/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
        "userId":userid,
        "courierId":courierId,
        "orderName":"pizza",
        "deliveryAddress": address,
        "price":"3500"
       })
		})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }

    for(let i = 0; i < gyros; i++){
      var asd = fetch('http://localhost:8081/orders/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
        "userId":userid,
        "courierId":courierId,
        "orderName":"gyros",
        "deliveryAddress": address,
        "price":"1000"
       })
		})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }

    for(let i = 0; i < lepcsanka; i++){
      var asd = fetch('http://localhost:8081/orders/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
        "userId":userid,
        "courierId":courierId,
        "orderName":"lepcsanka",
        "deliveryAddress": address,
        "price":"2000"
       })
		})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }

    for(let i = 0; i < sushi; i++){
      var asd = fetch('http://localhost:8081/orders/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
        "userId":userid,
        "courierId":courierId,
        "orderName":"sushi",
        "deliveryAddress": address,
        "price":"4000"
       })
		})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }

    for(let i = 0; i < hamburger; i++){
      var asd = fetch('http://localhost:8081/orders/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
        "userId":userid,
        "courierId":courierId,
        "orderName":"hamburger",
        "deliveryAddress": address,
        "price":"3000"
       })
		})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }

    for(let i = 0; i < palacsinta; i++){
      var asd = fetch('http://localhost:8081/orders/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
        "userId":userid,
        "courierId":courierId,
        "orderName":"palacsinta",
        "deliveryAddress": address,
        "price":"500"
       })
		})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }
    localStorage.setItem("pizza", 0)
    localStorage.setItem("gyros", 0)
    localStorage.setItem("hamburger", 0)
    localStorage.setItem("sushi", 0)
    localStorage.setItem("palacsinta", 0)
    localStorage.setItem("lepcsanka", 0)

    goto("/order")

  }
</script>

<Header {basketCount} />
<div class="flex w-8/12 m-auto gap-10">
	<div class="w-2/3">
		<p class="text-3xl font-bold">Select Courier</p>
		{#if basketCount > 0}
			<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Basket</p>
			<Table class="rounded-xl overflow-hidden">
				<TableHead class="bg-purple-200">
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Quantity</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
				</TableHead>
				<TableBody>
					{#if pizza > 0}
						<TableBodyRow>
							<TableBodyCell>Pizza</TableBodyCell>
							<TableBodyCell>{pizza}</TableBodyCell>
              <TableBodyCell>{pizza * 3500}</TableBodyCell>
						</TableBodyRow>
					{/if}
					{#if gyros > 0}
						<TableBodyRow>
							<TableBodyCell>Gyros</TableBodyCell>
							<TableBodyCell>{gyros}</TableBodyCell>
              <TableBodyCell>{gyros * 1000}</TableBodyCell>
						</TableBodyRow>
					{/if}
					{#if hamburger > 0}
						<TableBodyRow>
							<TableBodyCell>Hamburger</TableBodyCell>
							<TableBodyCell>{hamburger}</TableBodyCell>
              <TableBodyCell>{hamburger * 3000}</TableBodyCell>
						</TableBodyRow>
					{/if}
					{#if sushi > 0}
						<TableBodyRow>
							<TableBodyCell>Sushi</TableBodyCell>
							<TableBodyCell>{sushi}</TableBodyCell>
              <TableBodyCell>{sushi * 4000}</TableBodyCell>
						</TableBodyRow>
					{/if}
					{#if palacsinta > 0}
						<TableBodyRow>
							<TableBodyCell>Palacsinta</TableBodyCell>
							<TableBodyCell>{palacsinta}</TableBodyCell>
              <TableBodyCell>{palacsinta * 500}</TableBodyCell>
						</TableBodyRow>
					{/if}
					{#if lepcsanka > 0}
						<TableBodyRow>
							<TableBodyCell>Lepcsánka</TableBodyCell>
							<TableBodyCell>{lepcsanka}</TableBodyCell>
              <TableBodyCell>{lepcsanka * 2000}</TableBodyCell>
						</TableBodyRow>
					{/if}
				</TableBody>
			</Table>
		{/if}
		<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose your hero</p>
		<div class="flex-row w-full">
			<Radio class="mb-3" name="custom" bind:group={courier} value="mcisti" custom>
				<div
					class="inline-flex items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-[2px] peer-checked:bg-gradient-to-l from-indigo-200 via-pink-200 to-yellow-100 peer-checked:border-blue-800 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<img src={Mcisti} alt="mcisti" />
					<div class="ml-3">
						<p class="font-bold text-black">Mc István</p>
						<p class="text-gray-500">Máv</p>
					</div>
				</div>
			</Radio>
			<Radio class="mb-3" name="custom" bind:group={courier} value="jozsef" custom>
				<div
					class="inline-flex items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-[2px] peer-checked:bg-gradient-to-l from-indigo-200 via-pink-200 to-yellow-100 peer-checked:border-blue-800 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<img src={Jozsef} alt="jozsef" />
					<div class="ml-3">
						<p class="font-bold text-black">Jozsef</p>
						<p class="text-gray-500">Motorbike</p>
					</div>
				</div>
			</Radio>
			<Radio class="mb-3" name="custom" bind:group={courier} value="t-bor" custom>
				<div
					class="inline-flex items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-[2px] peer-checked:bg-gradient-to-l from-indigo-200 via-pink-200 to-yellow-100 peer-checked:border-blue-800 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<img src={Tbor} alt="t-bor" />
					<div class="ml-3">
						<p class="font-bold text-black">T-bor</p>
						<p class="text-gray-500">E-bike</p>
					</div>
				</div>
			</Radio>
			<Radio class="mb-3" name="custom" bind:group={courier} value="antonio" custom>
				<div
					class="inline-flex items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-[2px] peer-checked:bg-gradient-to-l from-indigo-200 via-pink-200 to-yellow-100 peer-checked:border-blue-800 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<img src={Antonio} alt="antonio" />
					<div class="ml-3">
						<p class="font-bold text-black">Antonio</p>
						<p class="text-gray-500">Tram no.2</p>
					</div>
				</div>
			</Radio>
		</div>

		{#if basketCount > 0}
			<Button on:click={sendOrder}
				class="w-full h-11 px-4 py-3 bg-gradient-to-l from-indigo-800 via-pink-700 to-yellow-500 rounded-lg shadow justify-start items-center gap-2 inline-flex mt-5"
			>
				<p class="text-center w-full font-extrabold">Order</p>
			</Button>
		{:else}
			<p class="text-center text-red-500">Empty basket</p>
		{/if}
	</div>
	<div class="rounded-2xl overflow-hidden" style="width: 100%">
		<iframe
			title="map"
			width="100%"
			height="600"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=debrecen+(My%20Business%20Name)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			><a href="https://www.maps.ie/population/"></a></iframe
		>
	</div>
</div>

<Footer />
