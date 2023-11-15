"use strict";
/*
const topBar = `
<div class="container-fluid px-3">
<div class="d-flex align-items-center justify-content-center">
  <div>
    <p class="m-0 fs-6 text-center">
      To contact email us at
      <a
        href="mailto:info@profinancialsolution.com"
        class="text-light text-decoration-none"
        >info@profinancialsolution.com</a
      >
    </p>
  </div>
  <!-- <div>
    <p class="m-0">+1234567</p>
  </div> -->
</div>
</div>
`;

const pageTopBar = document.getElementById("pageTopBar");
pageTopBar.insertAdjacentHTML("beforeend", topBar);
*/
const menu = `
<!-- navbar -->
    <div class="container-fluid sticky-top bg-white main-navbar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid px-md-5 py-2">
          <a class="navbar-brand" href="index.html">
            <!-- <img src="logo/logo-color.jpg" loading="lazy" id="main-logo" /> -->
            PHONEFIXESSEX
          </a>

          <button
            class="navbar-toggle d-sm-inline-block d-md-none d-lg-none border-0 bg-transparent"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.3em"
              viewBox="0 0 448 512"
            >
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul
              class="navbar-nav mb-2 mb-lg-0 fs-6 fw-bold color-main font-roboto gap-5 align-items-center"
            >
              <li class="nav-item">
                <a
                  class="nav-link p-0 mb-0 d-inline-block"
                  aria-current="page"
                  href="/index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link p-0 mb-0 d-inline-block"
                  href="#devices-options"
                  >Devices</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link p-0 mb-0 d-inline-block"
                  href="#why-fonefixessex"
                  >Why Us?</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 mb-0 d-inline-block" href="faq.html"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- offcanvas sidebar -->
    <div
      class="offcanvas offcanvas-start"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-header">
        <a class="navbar-brand" href="index.html">
          PHONEFIXESSEX
          <!-- <img src="logo/logo-color.jpg" loading="lazy" id="main-logo" /> -->
        </a>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="col-11 mx-auto">
        <hr />
      </div>
      <div class="offcanvas-body">
        <div class="justify-content-eb">
          <ul
            class="navbar-nav mb-2 mb-lg-0 fs-6 fw-bold color-main font-works gap-4 align-items-center"
          >
            <li class="nav-item">
              <a
                class="nav-link p-0 mb-0 d-inline-block"
                aria-current="page"
                href="/index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link p-0 mb-0 d-inline-block"
                href="#devices-options"
                onclick="scrollToSection('devices-options')"
                >Devices</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link p-0 mb-0 d-inline-block"
                href="#why-fonefixessex"
                onclick="scrollToSection('why-fonefixessex')"
                >Why Us?</a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link p-0 mb-0 d-inline-block" href="faq.html"
                >FAQ</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
`;

const pageMenu = document.getElementById("pageMenu");
pageMenu.insertAdjacentHTML("beforeend", menu);

const footer = `
<footer id="footer" class="pt-3 pt-md-5 pb-0 mb-0 bg-main-dark">
      <div class="container py-4">
        <div
          class="row align-items-start justify-content-between row-gap-5 px-1 px-md-0 text-white"
        >
          <div class="col-12 col-md-6">
            <img
              src="logo/logo-color.jpg"
              class="img-fluid col-12 col-md-8 mb-4"
              alt=""
            />
            <p class="font-roboto m-0 text-white fs-6 col-12 col-md-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              tempora architecto illo corporis aspernatur voluptate debitis
              temporibus inventore commodi in.
            </p>
          </div>
          <div class="col-6 col-md-3">
            <h2 class="text-main-light fw-bold mb-4">Pages</h2>

            <div class="d-flex flex-column gap-2 gap-md-3">
              <a class="text-white fs-6 text-decoration-none" href="index.html"
                >Home</a
              >

              <a class="text-white fs-6 text-decoration-none" href="faq.html"
                >FAQ
              </a>
              <a class="text-white fs-6 text-decoration-none" href="terms.html"
                >Terms of services
              </a>
              <a
                class="text-white fs-6 text-decoration-none"
                href="privacy-policy.html"
                >Privacy Policy
              </a>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <h2 class="text-main-light fw-bold mb-4">Get In Touch</h2>
            <div class="d-flex flex-column gap-2 gap-md-3">
              <a
                class="text-white fs-6 text-decoration-none mb-0"
                href="mailto:info@profinancialsolutions.com"
              >
                Email Us
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.1em"
                    viewBox="0 0 512 512"
                    style="fill: #fff"
                  >
                    <path
                      d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                class="text-white fs-6 text-decoration-none mb-0"
                href="tel:07735793515"
              >
                Give us a call &rarr;
              </a>
            </div>
          </div>
          <hr class="col-11 col-md-12 mx-auto" />
          <p class="text-accent fw-bold m-0 text-center">
            FoneFixessex - All Right Reserved
          </p>
        </div>
      </div>
    </footer>
`;

const pageFooter = document.getElementById("pageFooter");
pageFooter.insertAdjacentHTML("beforeend", footer);
