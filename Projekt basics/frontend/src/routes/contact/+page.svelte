<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import { Li, List, Heading } from 'flowbite-svelte';
</script>

<Header />
<div class="flex">
    <div class="w-full mt-36 px-20">
        <h1 class="text-4xl font-bold mb-5 ">Contact Us - Foodpandora</h1>
        <p>We at FoodPandora are always eager to hear from you! Whether you have a question, feedback, or just want to share your culinary adventures, our team is here to listen and assist. Below are the ways you can get in touch with us:</p>
        <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
            <Li>Phone: +1 23 45 678</Li>
            <Li>Email: support@foodpandora.com</Li>
            <Li>Available 24/7, our friendly team is ready to help you with your orders, answer any questions, and resolve issues.</Li>
        </List>
    </div>
    <div class="h-screen -mt-5 -mb-8 w-5/12 bg-gradient-to-b from-indigo-800 via-pink-700 to-yellow-500"></div>
</div>
<Footer/>