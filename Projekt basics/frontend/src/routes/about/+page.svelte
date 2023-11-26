<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import { Li, List, Heading } from 'flowbite-svelte';
</script>

<Header />
<div class="flex">
    <div class="w-full mx-auto px-20">
        <h1 class="text-4xl font-bold mb-5 mt-10">About Us - Foodpandora</h1>
        <p>Welcome to FoodPandora, where your gastronomic wishes are just a click away! At FoodPandora, we believe that good food is not just a meal, but an experience that should be accessible to everyone, everywhere.</p>
        <h1 class="text-3xl font-bold mt-8 mb-5">Our Journey</h1>
        <p>Founded in 2023, FoodPandora began as a small startup with a big dream: to connect people with the food they love. From the bustling street vendors to the high-end restaurants, our mission was to bring the diverse culinary landscape of the city right to your doorstep. Today, we are proud to say that we have expanded our reach, delivering not just in our home city but across multiple regions, bringing a world of flavors to your table.</p>
        <h1 class="text-3xl font-bold mt-8 mb-5">What we do</h1>
        <p>FoodPandora is more than just a food delivery company. We are a platform that bridges the gap between your hunger and a variety of culinary delights. We partner with a wide range of eateries, from local favorites to hidden gems, ensuring that every palate finds its match. Whether you're craving a gourmet Italian dinner, a hearty Chinese takeout, or something as simple as a sandwich, FoodPandora is your go-to app.</p>
        <h1 class="text-3xl font-bold mt-8 mb-5">Our services include:</h1>
        <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
            <Li>Prompt Delivery: We understand that hunger waits for no one. That's why our efficient delivery team ensures that your food arrives hot and fresh, as quickly as possible.</Li>
            <Li>Diverse Culinary Choices: Explore a plethora of cuisines from a wide array of restaurants. We cater to all dietary preferences, including vegetarian, vegan, and gluten-free options.</Li>
            <Li>User-Friendly Experience: Our app is designed for ease of use. Browse, select, and order with just a few taps.</Li>
            <Li>Catering Services: Hosting an event? Let us handle the food. Our catering services are tailored to meet the needs of your occasion, big or small.</Li>
        </List>
        <h1 class="text-3xl font-bold mt-8 mb-5">Our commitment to quality</h1>
        <p>Quality is the cornerstone of FoodPandora. We meticulously vet all our restaurant partners to ensure that you receive only the best. Hygiene, freshness, and taste are non-negotiable standards for us.</p>
        <h1 class="text-3xl font-bold mt-8 mb-5">Sustainability and Community</h1>
        <p>At FoodPandora, we are committed to sustainability. We continuously work on reducing our carbon footprint through eco-friendly packaging and supporting local businesses. Giving back to the community is part of our ethos, and we actively engage in initiatives to combat hunger and aid in food distribution to those in need.</p>
        <h1 class="text-3xl font-bold mt-8 mb-5">Join Us on a Culinary Adventure</h1>
        <p>We invite you to explore the endless culinary possibilities with FoodPandora. Your next delicious meal is just a few clicks away. Join us in our journey to bring joy, one dish at a time.</p>
        <p class="mt-8 font-bold">Thank you for choosing FoodPandora - Where every meal is a discovery!</p>
    </div>
    <div class=" -mt-5 -mb-8 w-5/12 bg-gradient-to-b from-indigo-800 via-pink-700 to-yellow-500"></div>
</div>
<Footer/>