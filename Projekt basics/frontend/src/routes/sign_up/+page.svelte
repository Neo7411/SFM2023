<script>
    import Logo from "$lib/images/logo.svg"
    import { Input, Label, Button} from 'flowbite-svelte';
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let password2 = '';
    let first = '';
    let last = '';
    let address = '';
    let passwordError = false

    async function sign_up() {
      if(password == password2){
        console.log("asd")
        var asd = fetch('http://localhost:8081/sign_up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },          
          body: JSON.stringify({ "firstName":first, "lastName":last, "email":email, "password":password, "address":address })
        })
          .then((response) => response.json())
          .then((data) => {console.log(data)
          });
          goto("/")
        }
        else{
          passwordError = true
        }
      }
  </script>

  <div class="flex">
    <div class="w-10/12 flex justify-center">
      <div class="w-8/12">
        <a href="/"><img src={Logo} alt="Foodpandora logo" class="mt-5"/></a>
        <div class="flex-row">
          <h1 class="text-5xl font-extrabold mt-[20%]">Sign up</h1>
          <p class="text-gray-600 mt-1">Fill in the sign up form to register.</p>
          <div class="flex gap-3">
              <Label class="mt-5 w-full text-gray-600">
                <span>First name</span>
                <Input type="text" placeholder="First name" size="md" bind:value={first}/>
              </Label>
              <Label class="mt-5 w-full text-gray-600">
                <span>Last name</span>
                <Input type="text" placeholder="Last name" size="md" bind:value={last}/>
              </Label>
          </div>
          <Label class="mt-5 text-gray-600">
            <span>Email</span>
            <Input type="email" placeholder="name@example.com" size="md" bind:value={email} />
          </Label>
          <Label class="mt-5 text-gray-600">
            <span>Address</span>
            <Input type="email" placeholder="1234 university st. 13." size="md" bind:value={address} />
          </Label>
          <Label class="mt-5 text-gray-600">
            <span>Password</span>
            <Input type="password" placeholder="your password" size="md" bind:value={password} />
          </Label>
          <Label class="mt-5 text-gray-600">
            <span>Password again</span>
            <Input type="password" placeholder="your password again" size="md" bind:value={password2} />
          </Label>
          
          {#if passwordError}
            <p class="text-red-500 text-center">Passwords do not match!</p>
          {/if}
          
          <Button on:click={sign_up} class="mb-10 w-full h-11 px-4 py-3 bg-gradient-to-l from-indigo-800 via-pink-700 to-yellow-500 rounded-lg shadow justify-start items-center gap-2 inline-flex mt-5">
            <p class="text-center w-full font-extrabold">Sign up</p>
          </Button>

        </div>
      </div>
    </div>
    <div class="h-ful w-full bg-gradient-to-b from-indigo-800 via-pink-700 to-yellow-500"></div>
  </div>

