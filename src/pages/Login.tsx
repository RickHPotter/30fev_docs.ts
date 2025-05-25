import React from "react"

const Login: React.FC = () => (
  <section className="text-lg">
    <h2 className="text-4xl font-semibold mb-2">🔐 How to Log in</h2>
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

    <div className="mb-4 rounded overflow-hidden shadow">
      <h2 className="text-xl font-semibold mb-2 mt-4">🎬 You can watch the video below to learn step by step.</h2>

      <video
        src={`${import.meta.env.BASE_URL}/videos/signup/01. Signup.mp4`}
        muted
        loop
        playsInline
        controls
        style={{ maxWidth: "75%" }}
      />
    </div>
  </section>
)

export default Login
