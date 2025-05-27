import React from "react"
import Video from "@/components/Video"

const Signup: React.FC = () => (
  <section className="text-md md:text-lg">
    <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4">🔐 HOW TO SIGN UP</h1>
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

    < Video videoPath="01. Signup/en/01. Signup" />
  </section>
)

export default Signup
