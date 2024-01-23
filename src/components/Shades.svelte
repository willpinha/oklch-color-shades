<script lang="ts">
    import Shade from "./Shade.svelte";

    function buildHues() {
        const hues = [];

        let cur = 0;
        const max = 360;

        while (cur <= max) {
            hues.push(cur);
            cur += 10;
        }

        return hues;
    }

    const hues = buildHues();
</script>

<div class="flex flex-col shades-limit:items-center gap-10 overflow-x-auto">
    {#each hues as hue}
        <Shade {hue} />
    {/each}
</div>
