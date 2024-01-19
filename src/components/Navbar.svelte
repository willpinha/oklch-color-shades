<script lang="ts">
    import chroma from "../stores/chroma";
</script>

<div class="flex justify-center w-full p-4 fixed top-0">
    <nav class="navbar bg-base-200 max-w-md justify-between rounded-box shadow">
        <div class="flex gap-2">
            <input class="range range-sm range-primary" type="range" min="0" max="0.37" step="0.01" bind:value={$chroma} />

            <span class="text-sm">{$chroma}C</span>
        </div>

        <a href="https://github.com/willpinha/color-shades" class="btn btn-ghost btn-sm btn-square text-primary-content">
            <i class="fa-brands fa-github text-xl text-primary-content"></i>
        </a>
    </nav>
</div>