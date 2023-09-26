<template>
    <p :class="style">{{ text }}</p>
</template>

<script>
export default {
    props: ["text"],
    data() {
        return {
            style: "text-gray-800 font-normal ",
        };
    },
};
</script>
