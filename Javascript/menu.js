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
            href="#review-carousal"
            >Testimonials</a
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
          >Devices</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link p-0 mb-0 d-inline-block"
          href="#review-carousal"
          >Testimonials</a
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
</div>
`;

const pageMenu = document.getElementById("pageMenu");
pageMenu.insertAdjacentHTML("beforeend", menu);

const footer = `
<div class="container py-3 mb-5">
<div class="row align-items-start justify-content-start gap-5 gap-md-0">
  <div class="col-md-6">
    <img
      src="logo/logo-color.jpg"
      class="img-fluid col-12 col-md-8 mb-4"
      alt=""
    />
    <p class="font-roboto m-0 color-main fs-6 col-12 col-md-10">
      Pro Financial Solutions delivers personalized accounting services
      to clients across Ipswich, Colchester, and Chelmsford. We
      prioritize your financial well-being, offering expert guidance as
      your proactive and approachable accountants. Let us be your
      trusted financial advisor and tax planner on the path to your
      success.
    </p>
  </div>
  <div class="col-md-3 font-works">
    <h2 class="color-second mb-4">Main Menu</h2>

    <div class="d-flex flex-column gap-2 gap-md-3">
      <a class="color-main fw-light fs-5 text-decoration-none" href="index.html"
        >Home</a
      >
      <a class="color-main fw-light fs-5 text-decoration-none" href="team.html"
        >Services
      </a>
      <a class="color-main fw-light fs-5 text-decoration-none" href="team.html"
        >Our Team
      </a>
      <a class="color-main fw-light fs-5 text-decoration-none" href="about-us.html"
        >About Us
      </a>
    </div>
  </div>
  <div class="col-md-3">
    <h2 class="color-second mb-4">Get In Touch</h2>
    <div class="d-flex flex-column gap-2 gap-md-3">
      <a
        class="color-main fw-light fs-5 text-decoration-none"
        href="mailto:info@profinancialsolutions.com"
      >
        Email Us
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            />
          </svg>
        </span>
      </a>
      <a
        class="color-main fw-light fs-5 text-decoration-none"
        href="/index.html#contact-form"
        >Book a free consultation &rarr;
      </a>
    </div>
  </div>
</div>
</div>
<div class="text-bg-secondary bg-opacity-25 py-1">
<div class="container">
  <p class="color-black m-0 fw-bold"></p>
</div>
</div>
`;

const pageFooter = document.getElementById("pageFooter");
pageFooter.insertAdjacentHTML("beforeend", footer);
