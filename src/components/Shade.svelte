<script lang="ts">
    import Color from "./Color.svelte";

    export let chroma: number;
    export let hue: number;

    function buildLights() {
        const lights = [];

        let cur = 5;
        const max = 95;

        while (cur <= max) {
            lights.push(cur);
            cur += 5;
        }

        return lights.reverse();
    }

    const lights = buildLights();
</script>

<div class="flex flex-col gap-2">
    <span class="text-sm">{hue}H</span>

    <div class="flex gap-2">
        {#each lights as l}
            <Color light={l} {chroma} {hue} />
        {/each}
    </div>
</div>

