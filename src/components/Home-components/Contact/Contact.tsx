
const ContactMe = () => {
    return (
        <section id='contact' className="w-[90%] sm:container mx-auto rounded-xl px-1 sm:px-5 bg-gray-800 text-white py-16 relative overflow-hidden my-10">
            <div className="container mx-auto relative z-10 px-6">
                <h2 className="text-4xl font-extrabold mb-8 text-center">Let&rsquo;s Connect!</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Contact Information */}
                    <div className="flex flex-col justify-center items-start text-white">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-2 text-[#2ed573]">Contact Information</h3>
                            <p className="text-gray-300">Feel free to reach out to me using the contact form or the information below:</p>
                        </div>

                        <div className="mb-4 text-start">
                            <p className="flex items-center text-lg font-semibold text-gray-200">
                                Email:
                            </p>
                            <p className="text-xl font-semibold">htanvir.sadi@gmail.com <span className='text-sm'>(Recommended)</span></p>
                        </div>

                        <div className="mb-8 text-start">
                            <p className="text-lg font-semibold text-gray-200">Phone:</p>
                            <p className="text-xl font-semibold">+880 1881-540890</p>
                        </div>

                        <p className="text-gray-300 text-center">I typically respond within 24 hours.</p>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-gray-200 p-5 sm:p-8 rounded-2xl shadow-lg">
                        <form>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Your Name</label>
                                <input type="text" id="name" name="name" className="rounded-md mt-1 p-3 w-full border-b-2 focus:outline-none focus:border-gray-800 transition duration-300" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Your Email</label>
                                <input type="email" id="email" name="email" className="rounded-md mt-1 p-3 w-full border-b-2 focus:outline-none focus:border-gray-800 transition duration-300" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-800">Your Message</label>
                                <textarea id="message" name="message" rows={4} className="rounded-md mt-1 p-3 w-full border-b-2 focus:outline-none focus:border-gray-800 transition duration-300"></textarea>
                            </div>

                            <button type="submit" className="bg-[#2ed573] text-white p-3 rounded-md hover:bg-gray-800 transition duration-300">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
