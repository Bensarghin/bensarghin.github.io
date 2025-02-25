class HeaderLayout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <!-- header section start-->
    <header>
      <nav
        class="lg:mb-28 mb-10 px-4 lg:px-8"
        aria-label="Global"
      >
        <div class="flex items-center py-2.5 container mx-auto justify-between">
          <div class="flex lg:flex-1">
            <a href="/index.html" class="-m-1.5">
              <img class="h-14 w-auto" src="../../assets/logo.svg" alt="" />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="open -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a
              href="/index.html"
              class="tracking-wide scroll-smooth text-primary uppercase text-[13px] font-semibold"
              >home</a
            >
            <a
              href="/pages/about.html"
              class="tracking-wide scroll-smooth transition hover:text-primary uppercase text-[13px] font-semibold text-gray"
              >about</a
            >
            <a
              href="/index.html#projects"
              class="tracking-wide scroll-smooth transition hover:text-primary uppercase text-[13px] font-semibold text-gray"
              >projects</a
            >
            <a
              href="/index.html#services"
              class="tracking-wide scroll-smooth transition hover:text-primary uppercase text-[13px] font-semibold text-gray"
              >services</a
            >
            <a
              href="/index.html#contact"
              class="tracking-wide scroll-smooth transition hover:text-primary uppercase text-[13px] font-semibold text-gray"
              >contact</a
            >
          </div>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="lg:hidden hidden mobile-nav" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>
        <div
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="./assets/logo.svg" alt="" />
            </a>
            <button
              type="button"
              class="close -m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  href="pages/about.html"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >home</a
                >
                <a
                  href="pages/about.html"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >about</a
                >
                <a
                  href="#projects"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >projects</a
                >
                <a
                  href="#services"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >services</a
                >
                <a
                  href="#contact"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >contact</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

        `
    }
}

class FooterLayout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
    <footer class="bg-white px-4 py-14 border-t border-[#0000001a]">
      <div class="container mx-auto grid lg:grid-cols-3 justify-between gap-4">
        <div>
          <h1 class="mb-3 font-bold uppercase">Our Services</h1>
          <ul>
            <li class="mb-1">Custom web application development in Tangier</li>
            <li class="mb-1">Affordable web app solutions for Moroccan startups</li>
            <li class="mb-1">E-commerce platform development services Morocco</li>
            <li class="mb-1">Web-based CRM development for small businesses in Morocco</li>
            <li class="mb-1">Booking system development for Moroccan hotels</li>
            <li class="mb-1">Educational web portal development in Morocco</li>
            <li class="mb-1">Real estate web application development Morocco</li>
            <li class="mb-1">Custom CMS development services in Tangier</li>
            <li class="mb-1">Web application maintenance and support Morocco</li>
            <li class="mb-1">Responsive web app design for Moroccan businesses</li>
          </ul>
        </div>
        <div>
          <h1 class="mb-3 font-bold uppercase">case studies</h1>
          <ul>
            <li class="mb-1 underline"><a class="hover:text-primary" href="./pages/case-study/smartstarentcar.html">Car rental management system</a></li>
            <li class="mb-1 underline"><a class="hover:text-primary" href="./pages/case-study/svtmousstaid.html">Prof Classroom management system</a></li>
            <li class="mb-1 underline"><a class="hover:text-primary" href="./pages/case-study/armagic.html">Digital identity plateform</a></li>
          </ul>
        </div>
        <div>
          <h1 class="mb-3 font-bold uppercase">Pages</h1>
          <ul>
            <li class="mb-1 underline"><a class="hover:text-primary" href="/pages/about.html">About</a></li>
            <li class="mb-1 underline"><a class="hover:text-primary" href="/index.html#contact">Contact</a></li>
            <li class="mb-1 underline"><a class="hover:text-primary" href="/pages/case-study/smartstarentcar.html">SMARTSTARRENTCAR Case-study</a></li>
            <li class="mb-1 underline"><a class="hover:text-primary" href="/pages/case-study/svtmousstaid.html">SVTMOUSTAID Case-study</a></li>
            <li class="mb-1 underline"><a class="hover:text-primary" href="/pages/case-study/armagic.html">ARMAGIC Case-study</a></li>
          </ul>
        </div>
      </div>
      <div class="container mx-auto border-t mt-10 border-[#0000001a]">
        <div class="flex items-center justify-between mt-10">
          <img src="/assets/images/logo.svg" class="h-16 w-auto" alt="" />
          <p class="fz-13">© 2025 hamid bensarghin</p>
        </div>
      </div>
  </footer>
        `
    }
}

customElements.define('header-layout', HeaderLayout)
customElements.define('footer-layout', FooterLayout)