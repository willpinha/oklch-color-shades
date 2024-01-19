<script lang="ts">
    import { chroma, copied } from "../stores";

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

    function copyCode(light: number) {
        navigator.clipboard.writeText(`oklch(${light}% ${$chroma} ${hue})`);

        $copied = true;

        setTimeout(() => {
            $copied = false
        }, 1000);
    }

    const lights = buildLights();
</script>

<div class="flex flex-col">
    <span class="text-sm">{hue}H</span>

    <div class="flex gap-2">
        {#each lights as light}
            <div class="flex flex-col items-center">
                <button
                    on:click={() => copyCode(light)}
                    class="px-6 py-5 rounded shadow hover:shadow-lg hover:-translate-y-2 hover:duration-200 hover:cursor-copy"
                    style="background-color: oklch({light}% {$chroma} {hue})">
                </button>

                <span class="text-sm">{light}L</span>
            </div>
        {/each}
    </div>
</div>

