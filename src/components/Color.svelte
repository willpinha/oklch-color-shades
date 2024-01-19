<script lang="ts">
    export let light: number;
    export let chroma: number;
    export let hue: number;
</script>

<div class="flex flex-col items-center">
    <div class="px-6 py-5 rounded shadow" style="background-color: oklch({light}% {chroma} {hue})"></div>

    <span class="text-sm">{light}L</span>
</div>
