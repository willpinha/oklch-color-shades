<script lang="ts">
    import Shade from "./Shade.svelte";
    import Navbar from "./Navbar.svelte";

    function buildHues() {
        const hues = [];

        let cur = 0;
        const max = 360;

        while (cur <= max) {
            hues.push(cur);
            cur += 5;
        }

        return hues;
    }

    let chroma: number = 0.2;

    const hues = buildHues();
</script>

<Navbar bind:chroma />

<div class="flex flex-col xl:items-center gap-10 pb-6 pt-24 px-8 overflow-x-auto">
    {#each hues as hue}
        <Shade {chroma} {hue} />
    {/each}
</div>
