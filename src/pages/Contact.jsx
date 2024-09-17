function Contact() {
  return (
    <div id="contact" className="py-16 pt-12 lg:pt-20 lg:py-24">
      <div className="container">
        <div className="bg-gradient-to-r from-sky-400 to-gray-300 text-gray-900 py-8 px-10 md:text-left rounded-3xl text-center">
          <div className="flex flex-col md:flex-row md:gap-32 gap-8 items-center">
            <div>
              <h2 className="font-calistoga text-2xl md:text-3xl">
                Get In Touch
              </h2>
              <p className="text-sm mt-2 md:text-base ">
                {
                  "I'm always excited to connect ! Feel free to drop me a message."
                }
              </p>
            </div>
            <div>
              <a href="mailto:impurewhitee@gmail.com?subject=Contact%20from%20Website">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2  w-max border border-gray-950">
                  <span className="semibold">Contact Me</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="#e8eaed"
                  >
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
