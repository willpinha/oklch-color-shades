<script lang="ts">
    import { copied } from "../stores";

    export let light: number;
    export let chroma: number;
    export let hue: number;

    function copyCode() {
        navigator.clipboard.writeText(`oklch(${light}% ${chroma} ${hue})`);

        $copied = true;

        setTimeout(() => {
            $copied = false
        }, 1000);
    }
</script>

<div class="flex flex-col items-center">
    <button
        on:click={copyCode}
        class="px-6 py-5 rounded shadow hover:shadow-lg hover:-translate-y-2 hover:duration-200 hover:cursor-copy"
        style="background-color: oklch({light}% {chroma} {hue})">
    </button>

    <span class="text-sm">{light}L</span>
</div>
