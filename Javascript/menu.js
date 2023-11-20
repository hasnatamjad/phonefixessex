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
        <img
          src="logo/PHONE FIX logo bl-01.png"
          loading="lazy"
          id="main-logo"
          style="width: 4.5rem"
        />
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
<!-- Footer -->
    <footer class="text-center text-lg-start text-white bg-main-dark">
      <!-- Section: Links  -->
      <section class="py-4">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3 row-gap-3">
            <!-- Grid column -->
            <div class="col-md-5 col-lg-5 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h4 class="text-uppercase fw-bold">Phonefixessex</h4>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
              />
              <p>
                Phonefixessex are capable of repairing any electronic device on
                the market now and those manufactured in the several years. We
                also do reselling of best phones.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h5 class="text-uppercase fw-bold">Pages</h5>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
              />
              <p>
                <a href="index.html" class="text-white">Home</a>
              </p>
              <p>
                <a href="faq.html" class="text-white">FAQ</a>
              </p>
              <p>
                <a href="terms.html" class="text-white">Terms of Services</a>
              </p>
              <p>
                <a href="privacy-policy.html" class="text-white"
                  >Privacy Policy</a
                >
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Contact Us</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
              />

              <p>
                <i class="fas fa-envelope mr-3"></i> info@Phonefixessex.co.uk
              </p>
              <p><i class="fas fa-phone mr-3"></i>07426603236</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center px-3 py-2"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © 2023 Copyright:
        <a class="text-white" href="https://Phonefixessex.co.uk/"
          >Phonefixessex</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
`;

const pageFooter = document.getElementById("pageFooter");
pageFooter.insertAdjacentHTML("beforeend", footer);
