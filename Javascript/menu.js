"use strict";

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
