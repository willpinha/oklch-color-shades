<script lang="ts">
    import { chroma, copied } from "../stores";

    const min = 2;
    const max = 36;
    const increment = 2;

    $: {
        console.log($chroma);
        
        if ($chroma < min) {
            $chroma += increment;
        }

        if ($chroma > max) {
            $chroma -= increment;
        }
    }
</script>

<div class="flex justify-center w-full p-4 fixed top-0 z-[1]">
    <nav class="navbar flex-col bg-base-200 max-w-xl rounded-box shadow min-h-0">
        <div class="flex justify-between w-full">
            <div class="flex items-center gap-2">
                <div class="join">
                    <button class="join-item btn btn-primary" on:click={() => $chroma-=increment }>
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <button class="join-item btn btn-primary" on:click={() => $chroma+=increment }>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>

                <span class="text-sm">{$chroma}C</span>
            </div>

            <a href="https://github.com/willpinha/color-shades" class="btn btn-ghost btn-square text-primary-content">
                <i class="fa-brands fa-github text-2xl text-primary-content"></i>
            </a>
        </div>

        <span class="flex gap-2 text-sm text-success" class:hidden={!$copied}>
            <i class="fa-solid fa-clipboard"></i>
            Copied to clipboard!
        </span>
    </nav>
</div>