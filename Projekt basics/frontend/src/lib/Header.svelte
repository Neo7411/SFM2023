<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import Logo from "$lib/images/logo.svg"
    import BlankProfile from "$lib/images/blankProfile.jpg"
    import { Button, Indicator } from 'flowbite-svelte';
    import { CartOutline } from 'flowbite-svelte-icons';
    import { logged_in } from '../stores';
    import { first, last, address, basket, email } from '../stores';
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    function onButtonClick() {
        dispatch('buttonPressed');
    }

    export let basketCount = 0

    var name = localStorage.getItem("first") + " " + localStorage.getItem("last")
    $:cartCount = basketCount


    function logout() {
        localStorage.setItem("logged_in", "false")
        goto("/")
    }

    
</script>

<Navbar class="w-10/12 mx-auto">
    <NavBrand href="/home">
        <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Foodpandora</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
        <NavUl class="mr-5">
            <NavLi href="/home" active={true}>Home</NavLi>
            <NavLi href="/about">About</NavLi>
            <NavLi href="/contact">Contact</NavLi>
        </NavUl>
        <Button href="/courier" class="relative bg-purple-100 mx-5 hover:bg-purple-200" size="sm" on:click={onButtonClick}>
            <CartOutline class="text-purple-800" />
            <span class="sr-only">Notifications</span>
            <Indicator border size="xl" placement="top-right" class="text-xs font-bold bg-purple-950 rounded-lg">{cartCount}</Indicator>
        </Button>
        <Avatar id="avatar-menu" src={BlankProfile} class="cursor-pointer"/>
        <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        <DropdownHeader>
        <span class="block text-sm">{name}</span>
        <span class="block truncate text-sm font-medium">{localStorage.getItem("email")}</span>
        </DropdownHeader>
        <!-- <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem> -->
        <DropdownItem class="text-red-600" on:click={logout}>Sign out</DropdownItem>
    </Dropdown>
</Navbar>
<div class="border-b border-gray-200 w-full mb-5"></div>