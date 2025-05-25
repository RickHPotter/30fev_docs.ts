import React from "react"

const Signup: React.FC = () => (
  <section className="text-md md:text-lg">
    <h2 className="text-2xl md:text-4xl font-semibold md:mb-2">🔐 How to Sign Up</h2>
    <p className="text-gray-700 py-4">
      To get started, a user needs to have an account. To do that, you need to Sign Up.
    </p>

    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>
        Go to the <a
          href="https://30fev.fun/"
          className="underline text-blue-950 hover:text-blue-600"
          target="_blank"
        >
          30/Fev page
        </a>.
      </li>
      <li>
        Click on <a
          href="https://30fev.fun/users/sign_up"
          target="_blank"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          create your account for FREE
        </a>.
      </li>
      <li>On the page that opens, fill in your <strong>first name, last name, email</strong>, and <strong>password</strong>.</li>
      <li>Note that the password <strong>MUST</strong> be at least 6 (six) characters long.</li>
      <li>Click on the <strong>Sign Up</strong> button.</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2 mt-4">🎬 You can watch the video below to learn step by step.</h2>
    <div className="mb-4 rounded overflow-hidden shadow">
      <video
        src={`${import.meta.env.BASE_URL}/videos/signup/01. Signup.mp4`}
        muted
        loop
        playsInline
        controls
      />
    </div>
  </section>
)

export default Signup
