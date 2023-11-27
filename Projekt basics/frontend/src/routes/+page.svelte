<script>
	import Logo from '$lib/images/logo.svg';
	import { Input, Label, Checkbox, Button } from 'flowbite-svelte';
	import { API, logged_in } from '../stores';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let wrongPassword = false;

	async function login() {
		var asd = fetch('http://localhost:8081/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.id != -1){
          
		 	localStorage.setItem("id", data.id)
			localStorage.setItem("logged_in", "true")
			localStorage.setItem("first", data.firstName)
			localStorage.setItem("last", data.lastName)
			localStorage.setItem("email", data.email)
			localStorage.setItem("address", data.address)
			localStorage.setItem("basket", 0)

			localStorage.setItem("pizza", 0)
			localStorage.setItem("gyros", 0)
			localStorage.setItem("hamburger", 0)
			localStorage.setItem("sushi", 0)
			localStorage.setItem("palacsinta", 0)
			localStorage.setItem("lepcsanka", 0)

	        goto("/home")
        }
		else{
			wrongPassword = true
		}
			});
    }
</script>

<div class="flex">
	<div class="w-10/12 flex justify-center">
		<div class="w-8/12">
			<a href="/"><img src={Logo} alt="Foodpandora logo" class="mt-5" /></a>
			<div class="flex-row mt-[30%]">
				<h1 class="text-5xl font-extrabold">Login</h1>
				<p class="text-gray-600 mt-1">
					Sign in with your credentials that you entered during registration
				</p>
				<Label class="mt-5 text-gray-600">
					<span>Email</span>
					<Input type="email" placeholder="name@example.com" size="md" bind:value={email} />
				</Label>
				<Label class="mt-5 text-gray-600">
					<span>Password</span>
					<Input type="password" placeholder="your password" size="md" bind:value={password} />
				</Label>
				{#if wrongPassword}
				<p class="text-center text-red-500">Wrong username or password</p>
				{/if}
				<Checkbox class="mt-5">Keep me logged in</Checkbox>
				<Button
					on:click={login}
					class="w-full h-11 px-4 py-3 bg-gradient-to-l from-indigo-800 via-pink-700 to-yellow-500 rounded-lg shadow justify-start items-center gap-2 inline-flex mt-5"
				>
					<p class="text-center w-full font-extrabold">Login</p>
				</Button>
				<div class="flex justify-center">
					<span class="flex mt-10"
						><p class="mr-3">Don't have an account?</p>
						<a href="/sign_up"><p class="text-blue-700 cursor-pointer">Sign Up</p></a></span
					>
				</div>
			</div>
		</div>
	</div>
	<div class="h-screen w-full bg-gradient-to-b from-indigo-800 via-pink-700 to-yellow-500"></div>
</div>
