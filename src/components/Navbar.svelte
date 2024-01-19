<script lang="ts">
    import { chroma, copied } from "../stores";
</script>

<div class="flex justify-center w-full p-4 fixed top-0">
    <nav class="navbar flex-col bg-base-200 max-w-md rounded-box shadow min-h-0">
        <div class="flex justify-between w-full">
            <div class="flex gap-2">
                <input class="range range-sm range-primary" type="range" min="0" max="0.37" step="0.01" bind:value={$chroma} />

                <span class="text-sm">{$chroma}C</span>
            </div>

            <a href="https://github.com/willpinha/color-shades" class="btn btn-ghost btn-sm btn-square text-primary-content">
                <i class="fa-brands fa-github text-xl text-primary-content"></i>
            </a>
        </div>

        <span class="flex gap-2 text-sm text-success" class:hidden={!$copied}>
            <i class="fa-solid fa-clipboard"></i>
            Copied to clipboard!
        </span>
    </nav>
</div>