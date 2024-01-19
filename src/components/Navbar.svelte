<script lang="ts">
    import { chroma, copied } from "../stores";

    const max = 0.37;
    const increment = 0.01;

    $: {
        if ($chroma < 0) {
            $chroma += increment;
        }

        if ($chroma > max) {
            $chroma -= increment;
        }

        $chroma = parseFloat($chroma.toFixed(2));
    }
</script>

<div class="flex justify-center w-full p-4 fixed top-0">
    <nav class="navbar flex-col bg-base-200 max-w-md rounded-box shadow min-h-0">
        <div class="flex justify-between w-full">
            <div class="flex items-center gap-2">
                <div class="join">
                    <button class="join-item btn btn-primary btn-sm" on:click={() => $chroma-=increment }>
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <button class="join-item btn btn-primary btn-sm" on:click={() => $chroma+=increment }>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>

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