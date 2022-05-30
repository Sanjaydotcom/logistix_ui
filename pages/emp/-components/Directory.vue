

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
            <h2 class="text-lg font-medium text-gray-900">Employees</h2>
            <NuxtLink to="/emp/edit" class="text-gray-400 hover:text-gray-500">
              <p class="text-sm font-medium text-gray-500">10 Employees</p>
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
        <!-- This example requires Tailwind CSS v2.0+ -->
        <ul role="list" class="divide-y divide-gray-200 cursor-pointer">
          <li class="p-4">
            <a href="/emp/edit" class="flex">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">Calvin Hawkins</p>
                <p class="text-sm text-gray-500">calvin.hawkins@example.com</p>
              </div>
            </a>
          </li>

          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Kristen Ramos</p>
              <p class="text-sm text-gray-500">kristen.ramos@example.com</p>
            </div>
          </li>

          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Ted Fox</p>
              <p class="text-sm text-gray-500">ted.fox@example.com</p>
            </div>
          </li>
          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Calvin Hawkins</p>
              <p class="text-sm text-gray-500">calvin.hawkins@example.com</p>
            </div>
          </li>

          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Kristen Ramos</p>
              <p class="text-sm text-gray-500">kristen.ramos@example.com</p>
            </div>
          </li>

          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Ted Fox</p>
              <p class="text-sm text-gray-500">ted.fox@example.com</p>
            </div>
          </li>
          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Calvin Hawkins</p>
              <p class="text-sm text-gray-500">calvin.hawkins@example.com</p>
            </div>
          </li>

          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Kristen Ramos</p>
              <p class="text-sm text-gray-500">kristen.ramos@example.com</p>
            </div>
          </li>

          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Ted Fox</p>
              <p class="text-sm text-gray-500">ted.fox@example.com</p>
            </div>
          </li>
          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Calvin Hawkins</p>
              <p class="text-sm text-gray-500">calvin.hawkins@example.com</p>
            </div>
          </li>

          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Kristen Ramos</p>
              <p class="text-sm text-gray-500">kristen.ramos@example.com</p>
            </div>
          </li>

          <li class="p-4 flex">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Ted Fox</p>
              <p class="text-sm text-gray-500">ted.fox@example.com</p>
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