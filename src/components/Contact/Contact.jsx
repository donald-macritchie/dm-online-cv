import React from 'react'

const Contact = () => {

  const formActionUrl = process.env.REACT_APP_CONTACT_FORM_URL;



  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 mb-8">
      <form
        action={formActionUrl}
        method="post"
        className="flex flex-col max-w-[600px] w-full border-black border-2 rounded-md p-10 shadow-2xl my-[150px]"
      >
        <div className="pb-8">
          <p className="text-3xl font-bold inline">Contact</p>
          <p className="py-4">
            To get in touch, please complete the form below.
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="my-4 p-2 shadow-xl border-black border-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="my-4 p-2 shadow-xl border-black border-2 rounded-md"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="my-4 p-2 shadow-xl border-black border-2 rounded-md"
        ></textarea>
        <button className="border-2 border-black rounded-md max-w-[200px] w-full flex flex-col justify-center items-center mx-auto my-4 p-3 transition-colors duration-300 ease-in-out hover:bg-orange-300">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact
