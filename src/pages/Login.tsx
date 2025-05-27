import React from "react"
import Video from "@/components/Video"

const Login: React.FC = () => (
  <section className="text-md md:text-lg">
    <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4">🔐 HOW TO LOG IN</h1>
    <p className="text-gray-700 py-4">
      Once a user has an account, they can log in using their email and password.
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
        If already logged in, scroll down to the bottom of the page and click on the <strong>Sign out</strong> button.
      </li>
      <li>Enter your <strong>email</strong> and <strong>password</strong>.</li>
      <li>Click on the <strong>Login</strong> button.</li>
    </ul>

    < Video videoPath="02. Login/en/01. Logout and Login" />
  </section>
)

export default Login
