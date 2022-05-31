<script setup>
const showInbox = false;
const showSettings = ref(false);
const toggleSettings = () => {
  showSettings.value = !showSettings.value;
};
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- Top nav-->
    <header class="flex-shrink-0 relative h-16 bg-white flex items-center">
      <!-- Logo area -->
      <div class="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
        <a
          href="#"
          class="
            flex
            items-center
            justify-center
            h-16
            w-16
            bg-cyan-400
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600
            lg:w-20
          "
        >
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
            alt="Workflow"
          />
        </a>
      </div>

      <!-- Picker area -->
      <div class="mx-auto lg:hidden">
        <div class="relative">
          <label for="inbox-select" class="sr-only">Choose inbox</label>
          <select
            id="inbox-select"
            class="
              rounded-md
              border-0
              bg-none
              pl-3
              pr-8
              text-base
              font-medium
              text-gray-900
              focus:ring-2 focus:ring-blue-600
            "
          >
            <option value="/open">Open</option>
            <option value="/archived">Archived</option>
            <option value="/assigned">Assigned</option>
            <option value="/flagged">Flagged</option>
            <option value="/spam">Spam</option>
            <option value="/drafts">Drafts</option>
          </select>
          <div
            class="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              flex
              items-center
              justify-center
              pr-2
            "
          >
            <!-- Heroicon name: solid/chevron-down -->
            <svg
              class="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Menu button area -->
      <div
        class="
          absolute
          inset-y-0
          right-0
          pr-4
          flex
          items-center
          sm:pr-6
          lg:hidden
        "
      >
        <!-- Mobile menu button -->
        <button
          type="button"
          class="
            -mr-2
            inline-flex
            items-center
            justify-center
            p-2
            rounded-md
            text-gray-400
            hover:text-gray-500 hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600
          "
        >
          <span class="sr-only">Open main menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
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
      </div>

      <!-- Desktop nav area -->
      <div
        class="
          hidden
          lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between
        "
      >
        <div class="min-w-0 flex-1">
          <div
            class="max-w-2xl relative text-gray-400 focus-within:text-gray-500"
          >
            <label for="desktop-search" class="sr-only"
              >Search all inboxes</label
            >
            <input
              id="desktop-search"
              type="search"
              placeholder="Search all inboxes"
              class="
                block
                w-full
                border-transparent
                pl-12
                placeholder-gray-500
                focus:border-transparent
                sm:text-sm
                focus:ring-0
              "
            />
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                flex
                items-center
                justify-center
                pl-4
              "
            >
              <!-- Heroicon name: solid/search -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
          <nav aria-label="Global" class="flex space-x-10">
            <LanguageSwitch />
            <div class="relative text-left">
              <button
                type="button"
                class="
                  flex
                  items-center
                  text-sm
                  font-medium
                  text-gray-900
                  rounded-md
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-600
                "
                id="menu-0-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>Inboxes</span>
                <!-- Heroicon name: solid/chevron-down -->
                <svg
                  class="ml-1 h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
              <div
                v-if="showInbox"
                class="
                  origin-top-right
                  absolute
                  z-30
                  right-0
                  mt-2
                  w-40
                  rounded-md
                  shadow-lg
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-0-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-0"
                  >
                    Technical Support
                  </a>

                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-1"
                  >
                    Sales
                  </a>

                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-2"
                  >
                    General
                  </a>
                </div>
              </div>
            </div>

            <a href="#" class="text-sm font-medium text-gray-900">Reporting</a>

            <div
              @click="toggleSettings"
              class="text-sm font-medium text-gray-900 cursor-pointer"
            >
              Settings
            </div>
          </nav>
          <div class="flex items-center space-x-8">
            <span class="inline-flex">
              <a
                href="#"
                class="
                  -mx-1
                  bg-white
                  p-1
                  rounded-full
                  text-gray-400
                  hover:text-gray-500
                "
              >
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
            </span>

            <div class="relative inline-block text-left">
              <button
                type="button"
                class="
                  bg-white
                  rounded-full
                  flex
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-600
                "
                id="menu-1-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>

              <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
              <div
                v-if="showSettings"
                class="
                  origin-top-right
                  absolute
                  z-30
                  right-0
                  mt-2
                  w-56
                  rounded-md
                  shadow-lg
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-1-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-1-item-0"
                  >
                    Your Profile
                  </a>
                  <DarkModeSwitch />
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-1-item-1"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide this `div` based on menu open/closed state -->
    </header>

    <!-- Bottom section -->
    <div class="min-h-0 flex-1 flex overflow-hidden">
      <!-- Narrow sidebar-->
      <nav
        aria-label="Sidebar"
        class="
          hidden
          lg:block lg:flex-shrink-0 lg:bg-gray-800 lg:overflow-y-auto
        "
      >
        <div class="relative w-20 flex flex-col p-3 space-y-3">
          <a
            href="#"
            class="
              bg-gray-900
              text-white
              flex-shrink-0
              inline-flex
              items-center
              justify-center
              h-14
              w-14
              rounded-lg
            "
          >
            <span class="sr-only">Open</span>
            <!-- Heroicon name: outline/inbox -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </a>

          <a
            href="#"
            class="
              text-gray-400
              hover:bg-gray-700
              flex-shrink-0
              inline-flex
              items-center
              justify-center
              h-14
              w-14
              rounded-lg
            "
          >
            <span class="sr-only">Archive</span>
            <!-- Heroicon name: outline/archive -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </a>

          <a
            href="#"
            class="
              text-gray-400
              hover:bg-gray-700
              flex-shrink-0
              inline-flex
              items-center
              justify-center
              h-14
              w-14
              rounded-lg
            "
          >
            <span class="sr-only">Customers</span>
            <!-- Heroicon name: outline/user-circle -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>

          <a
            href="#"
            class="
              text-gray-400
              hover:bg-gray-700
              flex-shrink-0
              inline-flex
              items-center
              justify-center
              h-14
              w-14
              rounded-lg
            "
          >
            <span class="sr-only">Flagged</span>
            <!-- Heroicon name: outline/flag -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
          </a>

          <a
            href="#"
            class="
              text-gray-400
              hover:bg-gray-700
              flex-shrink-0
              inline-flex
              items-center
              justify-center
              h-14
              w-14
              rounded-lg
            "
          >
            <span class="sr-only">Spam</span>
            <!-- Heroicon name: outline/ban -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </a>

          <a
            href="#"
            class="
              text-gray-400
              hover:bg-gray-700
              flex-shrink-0
              inline-flex
              items-center
              justify-center
              h-14
              w-14
              rounded-lg
            "
          >
            <span class="sr-only">Drafts</span>
            <!-- Heroicon name: outline/pencil-alt -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </a>
        </div>
      </nav>
      <div>
        <EmployeeSidebsar />
      </div>
      <slot />
    </div>
  </div>
</template>