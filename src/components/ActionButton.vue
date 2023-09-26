<template>
    <button :class="style">{{ text }}</button>
</template>

<script>
export default {
     props: ["text"],
     data() {
       
        return {
            style: " rounded-sm px-6 py-2 text-white bg-blue-900 font-thin",
        };
    },
};
</script>
