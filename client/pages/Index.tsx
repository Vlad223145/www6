import { useState } from "react";

export default function Index() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <header className="bg-black fixed top-0 w-full z-[1000]">
        {/* Main Navigation */}
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex items-center justify-between py-6 -ml-1">
            {/* Logo */}
            <a href="#home" className="relative">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72dd140c63504d2fff1_b85e775781cf5e5524443e30d349eaca_logo.svg"
                alt="Logo"
                className="inline-block max-w-full"
              />
            </a>

            {/* Navigation Menu */}
            <nav className="relative">
              <div className="flex gap-6 -ml-12">
                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-white/20 rounded-full px-6 py-3 text-white font-medium text-sm uppercase transition-all duration-300 hover:bg-white/30"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-white/20 rounded-full px-6 py-3 text-white font-medium text-sm uppercase transition-all duration-300 hover:bg-white/30"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="bg-white/20 rounded-full px-6 py-3 text-white font-medium text-sm uppercase transition-all duration-300 hover:bg-white/30"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="bg-white/20 rounded-full px-6 py-3 text-white font-medium text-sm uppercase transition-all duration-300 hover:bg-white/30"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="bg-white/20 rounded-full px-6 py-3 text-white font-medium text-sm uppercase transition-all duration-300 hover:bg-white/30"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white/20 rounded-full px-6 py-3 text-white font-medium text-sm uppercase transition-all duration-300 hover:bg-white/30"
                >
                  Contact
                </button>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href="#pricing"
                className="flex items-center text-white font-bold text-sm uppercase"
              ></a>

              {/* Mobile Menu Button */}
              <div className="hidden cursor-pointer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  className="text-white"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M4 7h22M4 15h22M4 23h22"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-end h-[1305px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(190deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72ecd9a07774bed793b_hero-background.webp")`,
        }}
      >
        <div className="max-w-[1320px] mx-auto px-5 w-full">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-[70px]">
            <div className="flex flex-col items-start gap-6">
              <div className="text-white font-bold text-sm uppercase blur-0 transform-none filter">
                NO PRESSURE. NO HYPE.
              </div>
              <div className="max-w-[450px] blur-0 transform-none filter">
                <h1 className="text-[64px] font-black leading-[57.6px] bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    TRAIN LIKE
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    YOU PERFORM
                  </span>
                </h1>
              </div>
              <p className="text-white/80 text-sm leading-5 max-w-[360px] blur-0 transform-none filter">
                Get 2 months absolutely FREE - complete training programs, nutrition
                plans, healthy recipes, video lessons, and personal support. Everything
                you need to transform your fitness journey.
              </p>
              <div className="flex items-center flex-wrap gap-3 blur-0 transform-none filter">
                <a
                  href="#contact"
                  className="flex items-center text-white font-bold text-sm uppercase"
                >
                  <div className="bg-white text-black rounded-full px-7 py-3.5 font-bold uppercase">
                    Try now
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-10 max-w-[530px]">
              <div className="flex items-center gap-4 blur-0 transform-none filter mt-[76px] pb-[82px]"></div>
            </div>
          </div>
        </div>
        {/* Overlay divs */}
        <div className="absolute top-0 left-0 w-full h-0 bg-black z-[9999]"></div>
        <div className="absolute top-0 left-0 w-3/4 h-0 bg-black z-[9999]"></div>
        <div className="absolute top-0 left-0 w-1/2 h-0 bg-black z-[9999]"></div>
        <div className="absolute top-0 left-0 w-1/4 h-0 bg-black z-[9999]"></div>
      </section>

      {/* Ticker Section */}
      <section className="bg-white/5 py-6 overflow-hidden">
        <div className="ticker-content whitespace-nowrap">
          <span className="text-white font-black text-6xl tracking-wider">
            TRY 2 MONTHS FOR{" "}
          </span>
          <span className="text-green-500 font-black text-6xl tracking-wider">
            FREE
          </span>
          <span className="text-white font-black text-6xl tracking-wider mx-20">
            TRY 2 MONTHS FOR{" "}
          </span>
          <span className="text-green-500 font-black text-6xl tracking-wider">
            FREE
          </span>
          <span className="text-white font-black text-6xl tracking-wider mx-20">
            TRY 2 MONTHS FOR{" "}
          </span>
          <span className="text-green-500 font-black text-6xl tracking-wider">
            FREE
          </span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-[48px] font-black leading-[43.2px] text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform-none">
                NOT JUST A GYM.
              </span>
              <span className="text-white font-black transform-none">
                A PLACE TO BELONG.
              </span>
            </h2>
            <p className="text-white/80 text-sm leading-5 max-w-[500px] mx-auto text-center transform-none">
              Experience our complete ONLINE fitness ecosystem FREE for 2 months. Get personal
              training, nutrition guidance, 200+ healthy recipes, video workouts, and
              dedicated support. No gym needed - everything delivered digitally to transform your journey.
            </p>
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-6 max-w-[400px] mx-auto mt-8">
              <div className="text-center">
                <div className="text-white font-bold text-lg mb-2">After FREE Trial</div>
                <div className="text-3xl font-black text-white mb-1">
                  <span className="text-green-500">$15</span>/month
                </div>
                <div className="text-white/60 text-sm">Full access to everything • Cancel anytime</div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-between border border-white/20 rounded-full px-8 py-4 max-w-[850px] mx-auto my-15 transform-none">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72d903f201509ea6d4b_about-icon1.svg"
                alt=""
                className="max-w-full"
              />
              <div className="text-white font-bold text-sm leading-5 max-w-[112px] uppercase">
                10+ YEARS OF EXPERIENCE
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c15fb9f7d6a3c29721e9e_line.svg"
              alt=""
              className="max-w-full"
            />
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72dd86fe80724383916_about-icon2.svg"
                alt=""
                className="max-w-full"
              />
              <div className="text-white font-bold text-sm leading-5 max-w-[138px] uppercase">
                5000+ TRAINING SESSIONS
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c15fb9f7d6a3c29721e9e_line.svg"
              alt=""
              className="max-w-full"
            />
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72ee930cf1c40a52161_about-icon3.svg"
                alt=""
                className="max-w-full"
              />
              <div className="text-white font-bold text-sm leading-5 max-w-[130px] uppercase">
                140+ OFFLINE & ONLINE EVENTS
              </div>
            </div>
          </div>

          {/* About Images Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-[1063px] mx-auto mt-[90px] relative">
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c20609df695e212bb9121_about-image1.webp"
                alt="About Image"
                className="inline-block max-w-full rounded-[40px]"
              />
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c20bb24f6e4bcc3c09599_about-small1.svg"
                alt="About Small Image"
                className="absolute -left-[6%] top-[5%] max-w-full transform-none"
              />
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c20bbc1ca63b370020058_about-small2.svg"
                alt="About Small Image"
                className="absolute -bottom-[70px] left-[70px] max-w-full transform-none"
              />
            </div>
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c2060b2ff4f18d3dadf0d_69ab5f243ca18eaa66c7999c77f4ff43_about-image2.webp"
                alt="About Image"
                className="inline-block max-w-full rounded-[40px]"
              />
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c20bbbbdb123e95db969e_about-small4.svg"
                alt="About Small Image"
                className="absolute right-[18px] -top-[28px] max-w-full transform-none"
              />
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c20bc4e0575a0fcc0dc1a_about-small5.svg"
                alt="About Small Image"
                className="absolute -bottom-[50px] right-[69px] max-w-full transform-none"
              />
            </div>
            <img
              src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c20bb9df695e212bbd06a_about-small3.svg"
              alt="About Small Image"
              className="absolute bottom-0 left-1/2 right-0 top-0 max-w-full"
              style={{ transform: "matrix(1, 0, 0, 1, -80.58, -87.5)" }}
            />
          </div>

          {/* Partners Section */}
          <div className="mt-[100px] text-center">
            <div className="text-white/60 text-sm font-bold leading-5 text-center uppercase transform-none">
              OUR PARTNERS
            </div>
            <div className="flex items-center flex-wrap justify-center gap-8 mt-6 text-center transform-none">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c2871c1ca63b37007afea_client-logo1.svg"
                alt=""
                className="max-w-full text-center"
              />
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c28719cf2e5856aa4748a_client-logo2.svg"
                alt=""
                className="max-w-full text-center"
              />
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c2871abf5b83568db0984_client-logo3.svg"
                alt=""
                className="max-w-full text-center"
              />
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c2871441bb5f57f79cc83_client-logo4.svg"
                alt=""
                className="max-w-full text-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white/5 py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="grid grid-cols-3 gap-x-16 gap-y-10 items-start">
            {/* Services Content */}
            <div className="flex flex-col items-start justify-start sticky top-[120px]">
              <div className="flex flex-col gap-6">
                <div className="text-white font-bold text-sm leading-5 uppercase transform-none">
                  OUR SERVICES
                </div>
                <h2 className="text-[48px] font-black leading-[43.2px]">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform-none">
                    NOT JUST WORKOUTS.
                  </span>
                  <span className="text-white font-black transform-none">
                    A WHOLE APPROACH.
                  </span>
                </h2>
                <p className="text-white/80 text-sm leading-5 max-w-[360px] transform-none">
                  Experience our complete fitness ecosystem FREE for 2 months:
                  personal training, nutrition guidance, healthy recipes, video
                  workouts, and dedicated support — everything included.
                </p>
                <div className="flex items-center flex-wrap gap-3 mt-2 transform-none">
                  <a
                    href="#pricing"
                    className="flex items-center text-white font-bold text-sm uppercase"
                  >
                    <div className="bg-white text-black rounded-full px-7 py-3.5 font-bold uppercase">
                      Try now
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="col-span-2 flex flex-col gap-10">
              {/* Service 1 */}
              <div className="flex items-end justify-between border-t border-white/10 pt-15 pb-10 relative overflow-hidden transform-none">
                <div className="w-[52%]">
                  <h3 className="text-white/80 text-2xl font-black leading-[30px]">
                    PERSONAL TRAINING
                  </h3>
                  <p className="text-white/60 text-lg leading-[22.5px] mt-3 max-w-[338px]">
                    One-on-one coaching, fully focused on your goals, fitness
                    level, and progress. Included FREE in your 2-month trial.
                  </p>
                </div>
                <div className="flex items-end justify-center text-right w-[48%]">
                  <div className="flex flex-col items-end justify-between -mr-[34px] text-right">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684faa6f25e45d423cb50655_personal-training1.jpg"
                      alt=""
                      width="60"
                      className="rounded-xl -mr-2.5 max-w-full opacity-0 relative z-[2] w-[60px]"
                      style={{
                        transform:
                          "matrix(0.838671, 0.544639, -0.544639, 0.838671, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684faa6f168be5fb13a61f4d_personal-training2-p-500.jpg"
                      alt=""
                      width="130"
                      className="rounded-2xl -mb-[30px] -mt-4 max-w-full opacity-0 w-[130px]"
                      style={{
                        transform:
                          "matrix(0.981627, 0.190809, -0.190809, 0.981627, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684faa70a1e68e77c07c9a72_personal-training3.jpg"
                      alt=""
                      width="80"
                      className="rounded-2xl max-w-full opacity-0 relative z-[2] w-[80px]"
                      style={{
                        transform:
                          "matrix(0.93358, -0.358368, 0.358368, 0.93358, 0, 0)",
                      }}
                    />
                  </div>
                  <div className="text-white/60 text-[150px] font-bold leading-[127.5px] relative z-[1] text-right">
                    01
                  </div>
                </div>
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 absolute bottom-0 left-0 right-0 h-1.5 w-full opacity-0"
                  style={{ transform: "matrix(1, 0, 0, 1, -681.75, 0)" }}
                ></div>
              </div>

              {/* Service 2 */}
              <div className="flex items-end justify-between border-t border-white/10 pt-15 pb-10 relative overflow-hidden transform-none">
                <div className="w-[52%]">
                  <h3 className="text-white/80 text-2xl font-black leading-[30px]">
                    NUTRITION GUIDANCE
                  </h3>
                  <p className="text-white/60 text-lg leading-[22.5px] mt-3 max-w-[338px]">
                    Complete nutrition plans with healthy recipes and meal guides.
                    Everything you need for balanced eating - FREE for 2 months.
                  </p>
                </div>
                <div className="flex items-end justify-center text-right w-[48%]">
                  <div className="flex flex-col items-end justify-between -mr-[34px] text-right">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf1c2532c63aee1b075_nutrition-guidance1.jpg"
                      alt=""
                      width="60"
                      className="rounded-xl -mr-2.5 max-w-full opacity-0 relative z-[2] w-[60px]"
                      style={{
                        transform:
                          "matrix(0.838671, 0.544639, -0.544639, 0.838671, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbeeb467cc4a8e846a15_nutrition-guidance2-p-500.jpg"
                      alt=""
                      width="130"
                      className="rounded-2xl -mb-[30px] -mt-4 max-w-full opacity-0 w-[130px]"
                      style={{
                        transform:
                          "matrix(0.981627, 0.190809, -0.190809, 0.981627, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbed7326a3ff0d414603_nutrition-guidance3.jpg"
                      alt=""
                      width="80"
                      className="rounded-2xl max-w-full opacity-0 relative z-[2] w-[80px]"
                      style={{
                        transform:
                          "matrix(0.93358, -0.358368, 0.358368, 0.93358, 0, 0)",
                      }}
                    />
                  </div>
                  <div className="text-white/60 text-[150px] font-bold leading-[127.5px] relative z-[1] text-right">
                    02
                  </div>
                </div>
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 absolute bottom-0 left-0 right-0 h-1.5 w-full opacity-0"
                  style={{ transform: "matrix(1, 0, 0, 1, -681.75, 0)" }}
                ></div>
              </div>

              {/* Service 3 */}
              <div className="flex items-end justify-between border-t border-white/10 pt-15 pb-10 relative overflow-hidden transform-none">
                <div className="w-[52%]">
                  <h3 className="text-white/80 text-2xl font-black leading-[30px]">
                    STRENGTH & CONDITIONING
                  </h3>
                  <p className="text-white/60 text-lg leading-[22.5px] mt-3 max-w-[338px]">
                    Structured programs to build muscle, boost stamina, and stay
                    injury-free.
                  </p>
                </div>
                <div className="flex items-end justify-center text-right w-[48%]">
                  <div className="flex flex-col items-end justify-between -mr-[34px] text-right">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbedaa837dca8c6bcbb5_strength-conditioning1.jpg"
                      alt=""
                      width="60"
                      className="rounded-xl -mr-2.5 max-w-full opacity-0 relative z-[2] w-[60px]"
                      style={{
                        transform:
                          "matrix(0.838671, 0.544639, -0.544639, 0.838671, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbede65b6e12ebd0f008_strength-conditioning2-p-500.jpg"
                      alt=""
                      width="130"
                      className="rounded-2xl -mb-[30px] -mt-4 max-w-full opacity-0 w-[130px]"
                      style={{
                        transform:
                          "matrix(0.981627, 0.190809, -0.190809, 0.981627, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbedce6b9bae00cf2b9c_strength-conditioning3.jpg"
                      alt=""
                      width="80"
                      className="rounded-2xl max-w-full opacity-0 relative z-[2] w-[80px]"
                      style={{
                        transform:
                          "matrix(0.93358, -0.358368, 0.358368, 0.93358, 0, 0)",
                      }}
                    />
                  </div>
                  <div className="text-white/60 text-[150px] font-bold leading-[127.5px] relative z-[1] text-right">
                    03
                  </div>
                </div>
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 absolute bottom-0 left-0 right-0 h-1.5 w-full opacity-0"
                  style={{ transform: "matrix(1, 0, 0, 1, -681.75, 0)" }}
                ></div>
              </div>

              {/* Service 4 */}
              <div className="flex items-end justify-between border-t border-white/10 pt-15 pb-10 relative overflow-hidden transform-none">
                <div className="w-[52%]">
                  <h3 className="text-white/80 text-2xl font-black leading-[30px]">
                    YOGA & FLEXIBILITY
                  </h3>
                  <p className="text-white/60 text-lg leading-[22.5px] mt-3 max-w-[338px]">
                    Find balance in your body and mind with calming,
                    mobility-focused sessions.
                  </p>
                </div>
                <div className="flex items-end justify-center text-right w-[48%]">
                  <div className="flex flex-col items-end justify-between -mr-[34px] text-right">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbee00626b3c2a7fec28_yoga-flexibility1.jpg"
                      alt=""
                      width="60"
                      className="rounded-xl -mr-2.5 max-w-full opacity-0 relative z-[2] w-[60px]"
                      style={{
                        transform:
                          "matrix(0.838671, 0.544639, -0.544639, 0.838671, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf0ce6b9bae00cf2c7e_yoga-flexibility2-p-500.jpg"
                      alt=""
                      width="130"
                      className="rounded-2xl -mb-[30px] -mt-4 max-w-full opacity-0 w-[130px]"
                      style={{
                        transform:
                          "matrix(0.981627, 0.190809, -0.190809, 0.981627, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf03b96909871d88fc1_yoga-flexibility3.jpg"
                      alt=""
                      width="80"
                      className="rounded-2xl max-w-full opacity-0 relative z-[2] w-[80px]"
                      style={{
                        transform:
                          "matrix(0.93358, -0.358368, 0.358368, 0.93358, 0, 0)",
                      }}
                    />
                  </div>
                  <div className="text-white/60 text-[150px] font-bold leading-[127.5px] relative z-[1] text-right">
                    04
                  </div>
                </div>
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 absolute bottom-0 left-0 right-0 h-1.5 w-full opacity-0"
                  style={{ transform: "matrix(1, 0, 0, 1, -681.75, 0)" }}
                ></div>
              </div>

              {/* Service 5 */}
              <div className="flex items-end justify-between border-t border-b border-white/10 pt-15 pb-10 relative overflow-hidden transform-none">
                <div className="w-[52%]">
                  <h3 className="text-white/80 text-2xl font-black leading-[30px]">
                    PROGRESS TRACKING
                  </h3>
                  <p className="text-white/60 text-lg leading-[22.5px] mt-3 max-w-[338px]">
                    Complete progress tracking with video tutorials and personal
                    support. All included FREE in your 2-month trial.
                  </p>
                </div>
                <div className="flex items-end justify-center text-right w-[48%]">
                  <div className="flex flex-col items-end justify-between -mr-[34px] text-right">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf0e467876639fab8ac_progress-tracking1.jpg"
                      alt=""
                      width="60"
                      className="rounded-xl -mr-2.5 max-w-full opacity-0 relative z-[2] w-[60px]"
                      style={{
                        transform:
                          "matrix(0.838671, 0.544639, -0.544639, 0.838671, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf0a16df6a9f8dee3ba_progress-tracking2-p-500.jpg"
                      alt=""
                      width="130"
                      className="rounded-2xl -mb-[30px] -mt-4 max-w-full opacity-0 w-[130px]"
                      style={{
                        transform:
                          "matrix(0.981627, 0.190809, -0.190809, 0.981627, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf1eccfb1a99ba1776e_progress-tracking3.jpg"
                      alt=""
                      width="80"
                      className="rounded-2xl max-w-full opacity-0 relative z-[2] w-[80px]"
                      style={{
                        transform:
                          "matrix(0.93358, -0.358368, 0.358368, 0.93358, 0, 0)",
                      }}
                    />
                  </div>
                  <div className="text-white/60 text-[150px] font-bold leading-[127.5px] relative z-[1] text-right">
                    05
                  </div>
                </div>
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 absolute bottom-0 left-0 right-0 h-1.5 w-full opacity-0"
                  style={{ transform: "matrix(1, 0, 0, 1, -681.75, 0)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-[48px] font-black leading-[43.2px] text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform-none">
                MEET THE TRAINERS
              </span>
              <span className="text-white font-black transform-none">
                GUIDANCE YOU CAN TRUST.
              </span>
            </h2>
            <p className="text-white/80 text-sm leading-5 max-w-[500px] mx-auto text-center transform-none">
              They're more than just fitness experts — they're real people who
              listen, support, and walk with you, every step of the way.
            </p>
          </div>

          {/* Trainers Features */}
          <div className="flex items-center justify-between border border-white/20 rounded-full px-8 py-4 max-w-[700px] mx-auto my-15 transform-none">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fc4aac7e02f3dad49c3d5_profile-icon.svg"
                alt=""
                className="max-w-full"
              />
              <div className="text-white font-bold text-sm leading-5 max-w-[120px] uppercase">
                PERSON-FIRST APPROACH
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c15fb9f7d6a3c29721e9e_line.svg"
              alt=""
              className="max-w-full"
            />
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fc4aa016df490500fe3b6_certificate-icon.svg"
                alt=""
                className="max-w-full"
              />
              <div className="text-white font-bold text-sm leading-5 max-w-[115px] uppercase">
                CERTIFIED & EXPERIENCED
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684c15fb9f7d6a3c29721e9e_line.svg"
              alt=""
              className="max-w-full"
            />
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fc4aabb8ed6e01d031039_inclusive-mindset-icon.svg"
                alt=""
                className="max-w-full"
              />
              <div className="text-white font-bold text-sm leading-5 max-w-[90px] uppercase">
                INCLUSIVE MINDSET
              </div>
            </div>
          </div>

          {/* Trainers Grid */}
          <div className="grid grid-cols-3 gap-10">
            {/* Trainer 1 */}
            <div className="transform-none">
              <div className="flex flex-col items-start gap-10 h-full">
                <div className="relative w-full h-full">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fc2c84d94f6141853764f_d5f56dbb21cff7b51b892a80f328e627_trainer-image1.webp"
                    alt="Trainer Image"
                    className="inline-block max-w-full rounded-xl relative z-[1]"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fe0baf0a572d9dd24d829_trainer-image-small.jpg"
                    alt=""
                    height="145"
                    className="hidden absolute -bottom-[50px] -left-[55px] -right-[30%] h-[145px] max-w-full opacity-0 rounded-xl filter blur-[3px]"
                  />
                </div>
                <p className="text-lg leading-[22.5px] max-w-[330px]">
                  Empowering women through strength and movement. 6+ years of
                  experience.
                </p>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="transform-none">
              <div className="flex flex-col items-start gap-10 h-full">
                <div className="relative w-full h-full">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fc2c9d7f8d2b9a0534e93_trainer-image2.webp"
                    alt="Trainer Image"
                    className="inline-block max-w-full rounded-xl relative z-[1]"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fe9bd1e3e6a2f716917e3_trainer-image-small2.jpg"
                    alt=""
                    height="145"
                    className="hidden absolute -bottom-[50px] -left-[55px] -right-[30%] h-[145px] max-w-full opacity-0 rounded-xl filter blur-[3px]"
                  />
                </div>
                <p className="text-lg leading-[22.5px] max-w-[330px]">
                  Believes in slow, sustainable changes that stick — with a mix
                  of grit and grace.
                </p>
              </div>
            </div>

            {/* Trainer 3 */}
            <div className="transform-none">
              <div className="flex flex-col items-start gap-10 h-full">
                <div className="relative w-full h-full">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fc2c9678f2c633179bd4c_trainer-image3.webp"
                    alt="Trainer Image"
                    className="inline-block max-w-full rounded-xl relative z-[1]"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fe9bdabfc1dadb6d4eb71_trainer-image-small3.jpg"
                    alt=""
                    height="145"
                    className="hidden absolute -bottom-[50px] -left-[55px] -right-[30%] h-[145px] max-w-full opacity-0 rounded-xl filter blur-[3px]"
                  />
                </div>
                <p className="text-lg leading-[22.5px] max-w-[330px]">
                  Helps people reconnect with their bodies through mindful
                  movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white/5 py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex flex-col gap-6 text-center">
            <div className="text-white font-bold text-sm leading-5 text-center uppercase transform-none">
              WHY CHOOSE HYPERFIT
            </div>
            <h2 className="text-[48px] font-black leading-[43.2px] text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform-none">
                FITNESS SHOULD
              </span>
              <span className="text-white font-black transform-none">
                FEEL LIKE IT FITS.
              </span>
            </h2>
            <p className="text-white/80 text-sm leading-5 max-w-[509px] mx-auto text-center transform-none">
              Start your FREE 2-month journey today. Get complete access to training,
              nutrition plans, video lessons, recipes, and personal support.
              No contracts, no hidden fees - just results.
            </p>
            <div className="flex items-center flex-wrap justify-center gap-3 mt-2 text-center transform-none">
              <a
                href="#"
                className="flex items-center text-white font-bold text-sm uppercase text-center"
              >
                <div className="border-2 border-white rounded-full px-7 py-3.5 font-bold uppercase text-center">
                  WATCH FREE PREVIEW
                </div>
                <div className="border-2 border-white rounded-full w-12 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72d33feceaffe97c371_play.svg"
                    alt=""
                    className="max-w-full text-center"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-15">
            {/* Left Column */}
            <div className="h-full">
              <div className="flex flex-col stretch gap-20 h-full justify-end">
                <div className="flex items-start bg-[#0d0d0d] gap-4 relative z-[1]">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fee9e8bdfbbecc1eb56f8_why-choose-us-icon3.svg"
                    alt=""
                    className="bg-[#0d0d0d] -mt-3 max-w-full relative z-[1] transform-none"
                  />
                  <div className="bg-[#0d0d0d] flex flex-col gap-3.5 relative z-[1] transform-none">
                    <div className="text-sm font-medium leading-5">
                      COMMUNITY FEELS LIKE HOME
                    </div>
                    <p className="text-white/80 text-sm leading-5 max-w-[230px]">
                      Group classes, events, and support that keep you motivated
                      — and connected.
                    </p>
                  </div>
                  <div className="flex items-center justify-end absolute -right-[24%] top-[3%]">
                    <div className="bg-white h-0.5 w-[130px]"></div>
                    <div className="bg-white rounded-full h-3.5 w-3.5 shadow-[rgba(255,255,255,0.2)_0px_8px] transform-none"></div>
                  </div>
                </div>
                <div className="flex items-start bg-[#0d0d0d] gap-4 mb-[120px] ml-auto relative z-[1]">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fee9e25279c7c5fe915a9_why-choose-us-icon4.svg"
                    alt=""
                    className="bg-[#0d0d0d] -mt-3 max-w-full relative z-[1] transform-none"
                  />
                  <div className="bg-[#0d0d0d] flex flex-col gap-3.5 relative z-[1] transform-none">
                    <div className="text-sm font-medium leading-5">
                      PLANS THAT FIT REAL LIVES
                    </div>
                    <p className="text-white/80 text-sm leading-5 max-w-[230px]">
                      Flexible memberships, transparent pricing, and no pressure
                      to commit.
                    </p>
                  </div>
                  <div className="flex items-center justify-end absolute -right-[45%] top-[3%]">
                    <div className="bg-white h-0.5 w-[130px]"></div>
                    <div className="bg-white rounded-full h-3.5 w-3.5 shadow-[rgba(255,255,255,0.2)_0px_8px] transform-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="h-full">
              <div>
                <img
                  src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684feea006c8046ffc30c0c6_why-choose-us-image.webp"
                  alt="Why Choose Us Image"
                  className="inline-block max-w-full rounded-xl w-full"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="h-full">
              <div className="flex flex-col stretch gap-20 h-full justify-start">
                <div className="flex items-start bg-[#0d0d0d] gap-4 mt-7 relative z-[1]">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fee9ed6a8d4e0cf785153_why-choose-us-icon1.svg"
                    alt=""
                    className="bg-[#0d0d0d] -mt-3 max-w-full relative z-[1] transform-none"
                  />
                  <div className="bg-[#0d0d0d] flex flex-col gap-3.5 relative z-[1] transform-none">
                    <div className="text-sm font-medium leading-5">
                      SIMPLE, HUMAN EXPERIENCE
                    </div>
                    <p className="text-white/80 text-sm leading-5">
                      Clean layouts and intuitive flows that feel natural �� not
                      overwhelming.
                    </p>
                  </div>
                  <div className="flex items-center justify-end absolute -left-[23%] top-[3%]">
                    <div className="bg-white rounded-full h-3.5 w-3.5 shadow-[rgba(255,255,255,0.2)_0px_8px] transform-none"></div>
                    <div className="bg-white h-0.5 w-[60px]"></div>
                  </div>
                </div>
                <div className="flex items-start bg-[#0d0d0d] gap-4 relative z-[1]">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fee9e74b82a732d3060f4_why-choose-us-icon2.svg"
                    alt=""
                    className="bg-[#0d0d0d] -mt-3 max-w-full relative z-[1] transform-none"
                  />
                  <div className="bg-[#0d0d0d] flex flex-col gap-3.5 relative z-[1] transform-none">
                    <div className="text-sm font-medium leading-5">
                      NO HYPE, JUST RESULTS
                    </div>
                    <p className="text-white/80 text-sm leading-5">
                      Every session is designed to build strength, stamina, and
                      confidence
                    </p>
                  </div>
                  <div className="flex items-center justify-end absolute -left-[42%] top-[3%]">
                    <div className="bg-white rounded-full h-3.5 w-3.5 shadow-[rgba(255,255,255,0.2)_0px_8px] transform-none"></div>
                    <div className="bg-white h-0.5 w-[130px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-[48px] font-black leading-[43.2px] text-center text-white">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">200+ FREE RECIPES</span> OF THE MOST DELICIOUS DISHES FOR WEIGHT LOSS
            </h2>
            <p className="text-white/80 text-lg leading-6 max-w-[600px] mx-auto text-center">
              Access our complete recipe library FREE for 2 months - healthy, delicious meals
              with step-by-step video tutorials and nutritional guidance.
            </p>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fa33d2c274fd54437bc4b524246da78df?format=webp&width=800"
                  alt="Delicious pancakes with berries"
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fcee6e50756d841758d154773895ee2e7?format=webp&width=800"
                  alt="Fresh healthy salad"
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F92858630486c4aa5834867ecec309fae?format=webp&width=800"
                  alt="Nutritious noodle bowl"
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex flex-col gap-6 text-center">
            <div className="text-white font-bold text-sm leading-5 text-center uppercase transform-none">
              HOW IT WORKS
            </div>
            <h2 className="text-[48px] font-black leading-[43.2px] text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform-none">
                GETTING STARTED IS SIMPLE.
              </span>
              <span className="text-white font-black transform-none">
                STAYING ON TRACK IS EASIER.
              </span>
            </h2>
            <p className="text-white/80 text-sm leading-5 text-center transform-none">
              At Hyperfit, we make your fitness journey feel natural — one
              small, confident step at a time.
            </p>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-15 grid-cols-4 mt-15">
            {/* Step 1 */}
            <div className="col-span-4 grid-row-1 transform-none">
              <div className="bg-white/5 rounded-2xl flex flex-col gap-15 px-8 py-8">
                <div className="flex items-start flex-wrap justify-between gap-13">
                  <div className="text-[48px] font-bold leading-[43.2px] text-white">
                    01
                  </div>
                  <div className="-mt-9 opacity-0">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684faa70a1e68e77c07c9a72_personal-training3.jpg"
                      loading="lazy"
                      width="69"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full relative z-[1] w-[69px]"
                      style={{
                        transform:
                          "matrix(0.984808, -0.173648, 0.173648, 0.984808, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684faa6f168be5fb13a61f4d_personal-training2-p-500.jpg"
                      loading="lazy"
                      width="150"
                      alt=""
                      className="rounded-2xl inline-block -ml-5.5 -mr-7 max-w-full w-[150px]"
                      style={{
                        transform:
                          "matrix(0.93358, 0.358368, -0.358368, 0.93358, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684faa6f25e45d423cb50655_personal-training1.jpg"
                      loading="lazy"
                      width="68"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full w-[68px]"
                      style={{
                        transform:
                          "matrix(0.71934, 0.694658, -0.694658, 0.71934, 0, 0)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="text-2xl font-bold leading-[30px] text-white">
                    Book a Free Intro Session
                  </div>
                  <p className="text-white/80 text-sm leading-5 max-w-[310px]">
                    Let's talk. We'll sit down with you, understand your goals,
                    and answer any questions you have — no pressure.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-span-4 grid-row-1 transform-none">
              <div className="bg-white/5 rounded-2xl flex flex-col gap-15 px-8 py-8">
                <div className="flex items-start flex-wrap justify-between gap-13">
                  <div className="text-[48px] font-bold leading-[43.2px] text-white">
                    02
                  </div>
                  <div className="-mt-9 opacity-0">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf1c2532c63aee1b075_nutrition-guidance1.jpg"
                      loading="lazy"
                      width="69"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full relative z-[1] w-[69px]"
                      style={{
                        transform:
                          "matrix(0.984808, -0.173648, 0.173648, 0.984808, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbeeb467cc4a8e846a15_nutrition-guidance2-p-500.jpg"
                      loading="lazy"
                      width="150"
                      alt=""
                      className="rounded-2xl inline-block -ml-5.5 -mr-7 max-w-full w-[150px]"
                      style={{
                        transform:
                          "matrix(0.93358, 0.358368, -0.358368, 0.93358, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbed7326a3ff0d414603_nutrition-guidance3.jpg"
                      loading="lazy"
                      width="68"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full w-[68px]"
                      style={{
                        transform:
                          "matrix(0.71934, 0.694658, -0.694658, 0.71934, 0, 0)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="text-2xl font-bold leading-[30px] text-white">
                    Get a Personal Fitness Check
                  </div>
                  <p className="text-white/80 text-sm leading-5 max-w-[310px]">
                    We'll assess where your body is right now - flexibility,
                    strength, stamina - and note what needs focus.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-span-4 grid-row-1 transform-none">
              <div className="bg-white/5 rounded-2xl flex flex-col gap-15 px-8 py-8">
                <div className="flex items-start flex-wrap justify-between gap-13">
                  <div className="text-[48px] font-bold leading-[43.2px] text-white">
                    03
                  </div>
                  <div className="-mt-9 opacity-0">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbedaa837dca8c6bcbb5_strength-conditioning1.jpg"
                      loading="lazy"
                      width="69"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full relative z-[1] w-[69px]"
                      style={{
                        transform:
                          "matrix(0.984808, -0.173648, 0.173648, 0.984808, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbede65b6e12ebd0f008_strength-conditioning2-p-500.jpg"
                      loading="lazy"
                      width="150"
                      alt=""
                      className="rounded-2xl inline-block -ml-5.5 -mr-7 max-w-full w-[150px]"
                      style={{
                        transform:
                          "matrix(0.93358, 0.358368, -0.358368, 0.93358, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbedce6b9bae00cf2b9c_strength-conditioning3.jpg"
                      loading="lazy"
                      width="68"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full w-[68px]"
                      style={{
                        transform:
                          "matrix(0.71934, 0.694658, -0.694658, 0.71934, 0, 0)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="text-2xl font-bold leading-[30px] text-white">
                    Start with a Plan Made for You
                  </div>
                  <p className="text-white/80 text-sm leading-5 max-w-[310px]">
                    Based on your lifestyle, time, and goals - we'll create a
                    personalised plan that fits into your life, not the other
                    way around.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-span-4 grid-row-1 justify-self-end transform-none">
              <div className="bg-white/5 rounded-2xl flex flex-col gap-15 px-8 py-8">
                <div className="flex items-start flex-wrap justify-between gap-13">
                  <div className="text-[48px] font-bold leading-[43.2px] text-white">
                    04
                  </div>
                  <div className="-mt-9 opacity-0">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbee00626b3c2a7fec28_yoga-flexibility1.jpg"
                      loading="lazy"
                      width="69"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full relative z-[1] w-[69px]"
                      style={{
                        transform:
                          "matrix(0.984808, -0.173648, 0.173648, 0.984808, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf0ce6b9bae00cf2c7e_yoga-flexibility2-p-500.jpg"
                      loading="lazy"
                      width="150"
                      alt=""
                      className="rounded-2xl inline-block -ml-5.5 -mr-7 max-w-full w-[150px]"
                      style={{
                        transform:
                          "matrix(0.93358, 0.358368, -0.358368, 0.93358, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf03b96909871d88fc1_yoga-flexibility3.jpg"
                      loading="lazy"
                      width="68"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full w-[68px]"
                      style={{
                        transform:
                          "matrix(0.71934, 0.694658, -0.694658, 0.71934, 0, 0)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="text-2xl font-bold leading-[30px] text-white">
                    Train with the Right Support
                  </div>
                  <p className="text-white/80 text-sm leading-5 max-w-[310px]">
                    Join guided sessions with expert coaches who adjust,
                    explain, and motivate — all at your pace.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="col-span-4 grid-row-1 justify-self-start transform-none">
              <div className="bg-white/5 rounded-2xl flex flex-col gap-15 px-8 py-8">
                <div className="flex items-start flex-wrap justify-between gap-13">
                  <div className="text-[48px] font-bold leading-[43.2px] text-white">
                    05
                  </div>
                  <div className="-mt-9 opacity-0">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf0e467876639fab8ac_progress-tracking1.jpg"
                      loading="lazy"
                      width="69"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full relative z-[1] w-[69px]"
                      style={{
                        transform:
                          "matrix(0.984808, -0.173648, 0.173648, 0.984808, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf0a16df6a9f8dee3ba_progress-tracking2-p-500.jpg"
                      loading="lazy"
                      width="150"
                      alt=""
                      className="rounded-2xl inline-block -ml-5.5 -mr-7 max-w-full w-[150px]"
                      style={{
                        transform:
                          "matrix(0.93358, 0.358368, -0.358368, 0.93358, 0, 0)",
                      }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684fbbf1eccfb1a99ba1776e_progress-tracking3.jpg"
                      loading="lazy"
                      width="68"
                      alt=""
                      className="rounded-xl inline-block -mt-2.5 max-w-full w-[68px]"
                      style={{
                        transform:
                          "matrix(0.71934, 0.694658, -0.694658, 0.71934, 0, 0)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="text-2xl font-bold leading-[30px] text-white">
                    Track Progress & Stay Consistent
                  </div>
                  <p className="text-white/80 text-sm leading-5 max-w-[310px]">
                    See your progress over time, fine-tune your plan, and stay
                    inspired with check-ins, support, and real wins — big and
                    small.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex flex-col gap-6 text-center mt-px">
            <h2 className="text-[48px] font-black leading-[43.2px] text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform-none">
                JOIN THE WAY THAT
              </span>
              <span className="text-white font-black transform-none">
                FEELS RIGHT FOR YOU.
              </span>
            </h2>
            <p className="text-white/80 text-sm leading-5 max-w-[350px] mx-auto text-center transform-none">
              Choose a plan that fits your pace — whether you're just starting
              out or going all in.
            </p>
            <p className="text-white/80 text-sm leading-5 text-center transform-none">
              No hidden fees. No long-term lock-ins.
            </p>
          </div>

          <div className="mt-15 relative">
            {/* Pricing Tabs */}
            <div className="flex items-center justify-center mb-15 relative transform-none mt-[19px]">
              <a
                role="tab"
                href="#monthly"
                className="bg-white text-black rounded-full px-6 py-3 font-bold text-sm relative"
              >
                <p>TRY</p>
              </a>
            </div>

            <div className="mt-15 overflow-hidden relative">
              {/* Monthly Plans */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-5">
                  {/* Starter Plan - Removed */}
                  <div className="pb-1.5 px-0 py-0 relative transform-none"></div>

                  {/* Progress Plan */}
                  <div className="pb-1.5 px-0 py-0 relative transform-none">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl h-full absolute left-0 top-0 w-full z-0"></div>
                    <div className="bg-[#0e0d0d] rounded-2xl flex flex-col gap-8 overflow-hidden px-7 py-11 relative z-[1] text-white">
                      <div className="relative">
                        <div
                          className="bg-[#0f0f0f] rounded-xl h-full absolute origin-bottom-center w-full"
                          style={{
                            transform: "matrix(0.87, 0, 0, 0.87, 0, 0)",
                          }}
                        ></div>
                        <img
                          src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/685010186a2643b44ca4e777_plan-card2.svg"
                          loading="lazy"
                          alt=""
                          className="rounded-xl inline-block max-w-full relative w-full z-[1]"
                          style={{ transform: "matrix(1, 0, 0, 1, 0, -16)" }}
                        />
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="text-xs font-bold tracking-wider leading-[15px] uppercase">
                          PROGRESS MEMBERSHIP
                        </div>
                        <div className="text-[48px] font-bold leading-[43.2px]">
                          <span>
                            <p>$0.00</p>
                          </span>
                          <span className="inline text-sm leading-5">
                            / 3 MONTH
                          </span>
                        </div>
                        <div className="text-white/80 text-sm leading-5 max-w-[250px]">
                          Ideal for those ready to build a consistent habit.
                        </div>
                      </div>
                      <a
                        href="#contact"
                        className="flex items-center text-black font-bold text-sm uppercase"
                      >
                        <div className="bg-white text-black rounded-full px-7 py-3.5 font-bold uppercase text-center w-full">
                          <div className="text-black font-bold text-sm uppercase text-center">
                            BOOK A MEMBERSHIP
                          </div>
                        </div>
                        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                          <img
                            src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72d9064731ba17ea52b_button-arrow.svg"
                            loading="lazy"
                            alt=""
                            className="max-w-full"
                          />
                        </div>
                      </a>
                      <div className="flex flex-col items-start gap-4.5 relative">
                        <div className="border-b border-dashed border-white/60 pb-1.25 text-white/80 text-sm leading-5">
                          Everything in Starter
                        </div>
                        <div className="border-b border-dashed border-white/60 pb-1.25 text-white/80 text-sm leading-5">
                          2 personal training sessions every month
                        </div>
                        <div className="border-b border-dashed border-white/60 pb-1.25 text-white/80 text-sm leading-5">
                          Customised workout plan
                        </div>
                        <div className="border-b border-dashed border-white/60 pb-1.25 text-white/80 text-sm leading-5">
                          Community events & wellness sessions
                        </div>
                        <div className="border-b border-dashed border-white/60 pb-1.25 text-white/80 text-sm leading-5">
                          Progress tracking and monthly check-ins
                        </div>
                        <div className="border-b border-dashed border-white/60 pb-1.25 text-white/80 text-sm leading-5">
                          Priority support from our training team
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commit Plan - Removed */}
                  <div className="pb-1.5 px-0 py-0 relative transform-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white/5 py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex flex-col gap-6 text-center">
            <div className="text-white font-bold text-sm leading-5 text-center uppercase transform-none">
              TESTIMONIALS
            </div>
            <h2 className="text-[48px] font-black leading-[43.2px] text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform-none">
                BECAUSE STAYING FIT
              </span>
              <span className="text-white font-black transform-none">
                SHOULD FEEL GOOD
              </span>
            </h2>
            <p className="text-white/80 text-sm leading-5 text-center transform-none">
              Real results from real people who transformed their lives with our online fitness platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
            {/* Testimonial 1 */}
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098cdee8ef9e581c6519_user-image1.png"
                  alt="Sarah M."
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-bold text-lg">Sarah M.</div>
                  <div className="text-white/60 text-sm">Lost 25 lbs in 3 months</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <img key={star} src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098a406c7c5fed8b2e54_star-full.svg" alt="" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "The online platform is amazing! I never thought I could get such personalized training from home. The recipes are delicious and the video tutorials made everything so easy to follow."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098cdee8ef9e581c6519_user-image1.png"
                  alt="Mike T."
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-bold text-lg">Mike T.</div>
                  <div className="text-white/60 text-sm">Gained 15 lbs muscle</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <img key={star} src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098a406c7c5fed8b2e54_star-full.svg" alt="" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "Best $15/month I spend! The personal coaching calls and custom workout plans helped me build more muscle than I ever did at traditional gyms. Everything online but feels so personal."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098cdee8ef9e581c6519_user-image1.png"
                  alt="Emma L."
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-bold text-lg">Emma L.</div>
                  <div className="text-white/60 text-sm">Transformed lifestyle</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <img key={star} src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098a406c7c5fed8b2e54_star-full.svg" alt="" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "As a busy mom, having everything online was perfect. The 2-month free trial convinced me - now I can't imagine life without my daily workouts and healthy recipes. Worth every penny!"
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098cdee8ef9e581c6519_user-image1.png"
                  alt="James R."
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-bold text-lg">James R.</div>
                  <div className="text-white/60 text-sm">Beginner to athlete</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <img key={star} src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098a406c7c5fed8b2e54_star-full.svg" alt="" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "Started as a complete beginner. The support team guided me through every step. 6 months later, I'm in the best shape of my life. The online format actually works better for me than any gym."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098cdee8ef9e581c6519_user-image1.png"
                  alt="Lisa K."
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-bold text-lg">Lisa K.</div>
                  <div className="text-white/60 text-sm">Improved health</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <img key={star} src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098a406c7c5fed8b2e54_star-full.svg" alt="" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "The nutrition guidance and recipes changed my relationship with food. Having everything accessible online means I never miss a workout. The community support is incredible too!"
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098cdee8ef9e581c6519_user-image1.png"
                  alt="David P."
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-bold text-lg">David P.</div>
                  <div className="text-white/60 text-sm">Consistent results</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <img key={star} src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851098a406c7c5fed8b2e54_star-full.svg" alt="" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "Tried many fitness programs before. This online platform finally gave me the structure and accountability I needed. The progress tracking keeps me motivated every day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-[48px] font-black leading-[43.2px] text-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform-none">
                FREQUENTLY
              </span>
              <span className="text-white font-black transform-none">
                ASKED QUESTIONS
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 max-w-[810px] mx-auto mt-15">
            <div
              className={`border-b border-white/10 rounded-xl mx-auto relative text-left w-full z-[900] transform-none transition-all duration-300 ${openFAQ === 0 ? "h-auto" : "h-[90px] overflow-hidden"}`}
            >
              <button
                onClick={() => toggleFAQ(0)}
                className="flex items-center gap-2.5 h-[90px] justify-between mx-auto px-8 py-5 relative text-left align-top w-full"
              >
                <div className="font-bold text-xl leading-6 text-left text-white">
                  I'm a complete beginner. Can I still join Hyperfit?
                </div>
                <div className="flex items-center bg-white rounded-full h-11 justify-center min-h-11 min-w-11 text-left w-11">
                  <span className="text-black font-bold text-lg">
                    {openFAQ === 0 ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openFAQ === 0 && (
                <div className="min-w-full pb-8 px-8 text-left">
                  <p className="text-white/80 text-lg leading-[22.5px] max-w-[550px] text-left">
                    Absolutely! We welcome all fitness levels. Our expert
                    trainers will guide you step-by-step at your own pace. We'll
                    start with a comprehensive fitness assessment to understand
                    your current level and create a personalized plan that's
                    perfect for beginners — no pressure, no judgment, just
                    support.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`border-b border-white/10 rounded-xl mx-auto relative text-left w-full z-[900] transform-none transition-all duration-300 ${openFAQ === 1 ? "h-auto" : "h-[90px] overflow-hidden"}`}
            >
              <button
                onClick={() => toggleFAQ(1)}
                className="flex items-center gap-2.5 h-[90px] justify-between mx-auto px-8 py-5 relative text-left align-top w-full"
              >
                <div className="font-bold text-xl leading-6 text-left text-white">
                  Do I need to bring anything for my first session?
                </div>
                <div className="flex items-center bg-white rounded-full h-11 justify-center min-h-11 min-w-11 text-left w-11">
                  <span className="text-black font-bold text-lg">
                    {openFAQ === 1 ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openFAQ === 1 && (
                <div className="min-w-full pb-8 px-8 text-left">
                  <p className="text-white/80 text-lg leading-[22.5px] max-w-[550px] text-left">
                    Just bring comfortable workout clothes, athletic shoes, and
                    a water bottle. We provide all the equipment you'll need
                    including towels, mats, and weights. For your first intro
                    session, we'll also provide a complimentary fitness
                    assessment and goal-setting consultation.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`border-b border-white/10 rounded-xl mx-auto relative text-left w-full z-[900] transform-none transition-all duration-300 ${openFAQ === 2 ? "h-auto" : "h-[90px] overflow-hidden"}`}
            >
              <button
                onClick={() => toggleFAQ(2)}
                className="flex items-center gap-2.5 h-[90px] justify-between mx-auto px-8 py-5 relative text-left align-top w-full"
              >
                <div className="font-bold text-xl leading-6 text-left text-white">
                  Are personal training sessions included in the plans?
                </div>
                <div className="flex items-center bg-white rounded-full h-11 justify-center min-h-11 min-w-11 text-left w-11">
                  <span className="text-black font-bold text-lg">
                    {openFAQ === 2 ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openFAQ === 2 && (
                <div className="min-w-full pb-8 px-8 text-left">
                  <p className="text-white/80 text-lg leading-[22.5px] max-w-[550px] text-left">
                    Yes! Our Progress Membership includes 2 personal training
                    sessions every month, while our Commit Membership includes 4
                    sessions monthly. Each session is tailored to your specific
                    goals and fitness level, ensuring maximum results and proper
                    form guidance from our certified trainers.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`border-b border-white/10 rounded-xl mx-auto relative text-left w-full z-[900] transform-none transition-all duration-300 ${openFAQ === 3 ? "h-auto" : "h-[90px] overflow-hidden"}`}
            >
              <button
                onClick={() => toggleFAQ(3)}
                className="flex items-center gap-2.5 h-[90px] justify-between mx-auto px-8 py-5 relative text-left align-top w-full"
              >
                <div className="font-bold text-xl leading-6 text-left text-white">
                  What kind of group classes do you offer?
                </div>
                <div className="flex items-center bg-white rounded-full h-11 justify-center min-h-11 min-w-11 text-left w-11">
                  <span className="text-black font-bold text-lg">
                    {openFAQ === 3 ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openFAQ === 3 && (
                <div className="min-w-full pb-8 px-8 text-left">
                  <p className="text-white/80 text-lg leading-[22.5px] max-w-[550px] text-left">
                    We offer a variety of classes including Strength &
                    Conditioning, Yoga & Flexibility, HIIT workouts, functional
                    training, and nutrition workshops. All classes are designed
                    for different fitness levels and are led by certified
                    instructors who provide modifications for every participant.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`border-b border-white/10 rounded-xl mx-auto relative text-left w-full z-[900] transform-none transition-all duration-300 ${openFAQ === 4 ? "h-auto" : "h-[90px] overflow-hidden"}`}
            >
              <button
                onClick={() => toggleFAQ(4)}
                className="flex items-center gap-2.5 h-[90px] justify-between mx-auto px-8 py-5 relative text-left align-top w-full"
              >
                <div className="font-bold text-xl leading-6 text-left text-white">
                  Can I freeze or pause my membership if needed?
                </div>
                <div className="flex items-center bg-white rounded-full h-11 justify-center min-h-11 min-w-11 text-left w-11">
                  <span className="text-black font-bold text-lg">
                    {openFAQ === 4 ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openFAQ === 4 && (
                <div className="min-w-full pb-8 px-8 text-left">
                  <p className="text-white/80 text-lg leading-[22.5px] max-w-[550px] text-left">
                    Yes, we understand life happens! You can freeze your
                    membership for up to 3 months per year for valid reasons
                    like travel, injury, or family circumstances. Simply give us
                    7 days notice and we'll pause your membership without any
                    fees.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`border-b border-white/10 rounded-xl mx-auto relative text-left w-full z-[900] transform-none transition-all duration-300 ${openFAQ === 5 ? "h-auto" : "h-[90px] overflow-hidden"}`}
            >
              <button
                onClick={() => toggleFAQ(5)}
                className="flex items-center gap-2.5 h-[90px] justify-between mx-auto px-8 py-5 relative text-left align-top w-full"
              >
                <div className="font-bold text-xl leading-6 text-left text-white">
                  How do I cancel my membership?
                </div>
                <div className="flex items-center bg-white rounded-full h-11 justify-center min-h-11 min-w-11 text-left w-11">
                  <span className="text-black font-bold text-lg">
                    {openFAQ === 5 ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openFAQ === 5 && (
                <div className="min-w-full pb-8 px-8 text-left">
                  <p className="text-white/80 text-lg leading-[22.5px] max-w-[550px] text-left">
                    You can cancel your membership anytime with 30 days written
                    notice. We don't believe in binding contracts or
                    cancellation fees. Simply speak with our front desk staff or
                    send us an email, and we'll process your cancellation
                    request promptly and hassle-free.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-x-12.5">
            <div>
              <div className="flex flex-col gap-4"></div>
            </div>

            <div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="text-white/80 text-sm tracking-wide leading-5 max-w-[300px] transform-none">
                    <span>
                      If you'd rather get started with a mail - then write to us
                      at{" "}
                    </span>
                    <a
                      href="mailto:sales@hyperfit.com"
                      className="text-orange-500 underline inline"
                    >
                      sales@hyperfit.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/App Download Section */}
      <section className="pt-35 pb-20">
        <div className="max-w-[1320px] mx-auto px-5">
          <div
            className="rounded-2xl transform-none"
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851508e2d51a6ccda834d54_newsletter-background.webp")',
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
            }}
          >
            <div className="grid grid-cols-2 gap-10">
              <div className="flex-col gap-10">
                <div className="flex flex-col gap-10 h-full px-10 py-10">
                  <h2 className="text-[48px] font-black leading-[43.2px]">
                    <span className="text-[48px] font-black leading-[43.2px]">
                      <p>START NOW!</p>
                    </span>
                    <span className="inline text-[48px] leading-[43.2px]">
                      <p>
                        <br />
                      </p>
                    </span>
                  </h2>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 tracking-wide">
                      <img
                        src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851550a2ca39dc68bec570a_check.svg"
                        loading="lazy"
                        alt=""
                        className="tracking-wide max-w-full"
                      />
                      <div className="text-sm font-medium tracking-wide leading-5">
                        View class schedules instantly
                      </div>
                    </div>
                    <div className="flex items-center gap-2 tracking-wide">
                      <img
                        src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851550a2ca39dc68bec570a_check.svg"
                        loading="lazy"
                        alt=""
                        className="tracking-wide max-w-full"
                      />
                      <div className="text-sm font-medium tracking-wide leading-5">
                        Manage your membership easily
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/games"
                    ></a>
                    <a
                      target="_blank"
                      href="https://www.apple.com/in/app-store/"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="flex-col gap-10">
                <div className="h-full pr-10 relative text-right">
                  <img
                    src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/6851508fced1885ded303e8e_download-app-image-p-500.webp"
                    loading="lazy"
                    height="590"
                    alt=""
                    className="absolute bottom-0 h-[590px] max-w-full right-10 text-right -mt-px pt-[79px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="my-10">
            <div className="grid grid-cols-3 gap-4 items-center justify-items-stretch">
              <div className="transform-none">
                <div className="inline-block gap-3">
                  <a href="#home" className="inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72dd140c63504d2fff1_b85e775781cf5e5524443e30d349eaca_logo.svg"
                      loading="lazy"
                      alt="Logo"
                      className="inline-block max-w-full"
                    />
                  </a>
                </div>
              </div>
              <div className="justify-self-center transform-none">
                <div></div>
              </div>
              <div className="transform-none">
                <div className="flex items-center justify-end">
                  <a
                    href="#home"
                    className="flex items-center text-black font-bold text-sm leading-5 uppercase"
                  >
                    <div className="bg-white text-black rounded-full px-7 py-3.5 font-bold uppercase">
                      <div className="text-black font-bold text-sm leading-5 uppercase">
                        BACK TO TOP
                      </div>
                    </div>
                    <div className="flex items-center justify-center bg-white text-black rounded-full h-12 min-h-12 min-w-12 uppercase w-12">
                      <img
                        src="https://cdn.prod.website-files.com/683831da792ffd3d821f0be5/684bd72d9064731ba17ea52b_button-arrow.svg"
                        loading="lazy"
                        alt=""
                        className="max-w-full"
                        style={{
                          transform:
                            "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)",
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-sm bg-white/5 py-5">
          <div className="max-w-[1320px] mx-auto px-5">
            <div className="flex items-center flex-wrap justify-between gap-6">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-3 transform-none">
                  <div className="text-sm leading-5 max-w-[170px] uppercase">
                    <span>DESIGN & Developed by </span>
                    <a
                      target="_blank"
                      href="https://flowcub.com/?utm_source=webflow&utm_medium=hyperfit"
                      className="inline text-sm font-bold leading-5 uppercase"
                    >
                      FLOWCUB DESIGN
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 transform-none">
                  <div className="text-sm leading-5 max-w-[170px] uppercase">
                    <span>Powered BY </span>
                    <a
                      target="_blank"
                      href="https://webflow.com/"
                      className="inline text-sm font-bold leading-5 uppercase"
                    >
                      WEBFLOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-sm font-bold leading-5 uppercase transform-none">
                © 2025. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Promotional Elements */}
      <div className="z-[999999999]">
        <div className="fixed bottom-6 right-6 h-[77px] w-[363px] z-[99999999]">
          <div className="absolute h-10 -right-[4%] -top-[18%] w-10 z-[999999]">
            <div className="inline h-[30px] overflow-clip-margin-content-box overflow-hidden w-[30px] transform-none">
              {/* Green dot animation placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
