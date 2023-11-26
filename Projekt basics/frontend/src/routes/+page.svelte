<script>
  import Logo from "$lib/images/logo.svg"
  import { Input, Label, Checkbox, Button} from 'flowbite-svelte';
</script>

<div class="flex">
  <div class="w-10/12 flex justify-center">
    <div class="w-8/12">
      <a href="/"><img src={Logo} alt="Foodpandora logo" class="mt-5"/></a>
      <div class="flex-row mt-[30%]">
        <h1 class="text-5xl font-extrabold">Login</h1>
        <p class="text-gray-600">Sign in with your credentials that you entered during registration</p>
        <Label class="mt-5 text-gray-600">
          <span>Email</span>
          <Input type="email" placeholder="name@example.com" size="md" />
        </Label>
        <Label class="mt-5 text-gray-600">
          <span>Password</span>
          <Input type="password" placeholder="your password" size="md" />
        </Label>
        <Checkbox class="mt-5">Keep me logged in</Checkbox>
        <Button href="/home" class="w-full h-11 px-4 py-3 bg-gradient-to-l from-indigo-800 via-pink-700 to-yellow-500 rounded-lg shadow justify-start items-center gap-2 inline-flex mt-5">
          <p class="text-center w-full font-extrabold">Login</p>
        </Button>
        <div class="flex justify-center">
          <span class="flex mt-10"><p class="mr-3">Don't have an account?</p><a href="/sign_up"><p class="text-blue-700 cursor-pointer">Sign Up</p></a></span>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen w-full bg-gradient-to-b from-indigo-800 via-pink-700 to-yellow-500"></div>
</div>

