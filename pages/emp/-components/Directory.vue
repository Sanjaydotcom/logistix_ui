

<script>
export default {
  setup() {
    const openMenu = ref(true);
    const toggleMenu = () => {
      console.log(openMenu.value);
      openMenu.value = !openMenu.value;
    };
    console.log("entered");
    return {
      openMenu,
      toggleMenu,
    };
  },
};
</script>
<template>
  <div class="sm:hidden xl:block xl:flex-shrink-0 xl:order-2">
    <div
      class="
        h-full
        relative
        flex flex-col
        w-96
        border-r border-gray-200
        bg-themeBackground
      "
    >
      <div class="flex-shrink-0">
        <div class="h-16 bg-themeBackground px-6 flex flex-col justify-center">
          <div class="flex items-baseline space-x-3">
            <button
              type="button"
              @click="toggleMenu"
              class="
                bg-gray-50
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-blue-500
              "
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h2 class="text-lg font-medium text-gray-900">Inbox</h2>
            <NuxtLink to="/emp/edit" class="text-gray-400 hover:text-gray-500">
              <p class="text-sm font-medium text-gray-500">10 messages</p>
              <span class="sr-only">Home</span>
            </NuxtLink>
          </div>
        </div>
        <div
          class="
            border-t border-b border-gray-200
            bg-gray-50
            px-6
            py-2
            text-sm
            font-medium
            text-gray-500
          "
        >
          Sorted by date
        </div>
      </div>
      <nav aria-label="Message list" class="min-h-0 flex-1 overflow-y-auto">
        <ul
          role="list"
          class="
            border-b
            bg-themeBackground
            border-gray-200
            divide-y divide-gray-200
          "
        >
          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="/emp/edit" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Gloria Roberston
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Velit placeat sit ducimus non sed
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Virginia Abshire
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Nemo mollitia repudiandae adipisci explicabo optio
                    consequatur tempora ut nihil
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Kyle Gulgowski
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Doloremque reprehenderit et harum quas explicabo nulla
                    architecto dicta voluptatibus
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Hattie Haag
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Eos sequi et aut ex impedit
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Wilma Glover
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Quisquam veniam explicabo
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Dolores Morissette
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Est ratione molestiae modi maiores consequatur eligendi et
                    excepturi magni
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Guadalupe Walsh
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Commodi deserunt aut veniam rem ipsam
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Jasmine Hansen
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Illo illum aut debitis earum
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Ian Volkman
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Qui dolore iste ut est cumque sed
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>

          <li
            class="
              relative
              bg-white
              py-5
              px-6
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-blue-600
            "
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Rafael Klocko
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Aut sed aut illum delectus maiores laboriosam ex
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >1d ago</time
              >
            </div>
            <div class="mt-1">
              <p class="line-clamp-2 text-sm text-gray-600">
                Doloremque dolorem maiores assumenda dolorem facilis. Velit vel
                in a rerum natus facere. Enim rerum eaque qui facilis. Numquam
                laudantium sed id dolores omnis in. Eos reiciendis deserunt
                maiores et accusamus quod dolor.
              </p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="hidden xl:block xl:flex-shrink-0 xl:order-first" v-if="openMenu">
    <EmployeeSidebsar />
  </div>
</template>
<style>
</style>