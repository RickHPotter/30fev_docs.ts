import React from "react"

const BankAccounts: React.FC = () => (
  <section>
    <h2 className="text-xl font-semibold mb-2">Bank Accounts</h2>
    <div className="aspect-w-16 aspect-h-9 mb-4 rounded overflow-hidden shadow">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Video Guide"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
    <p className="text-gray-700">
      Watch this video for a quick walkthrough of the setup and features.
    </p>
  </section>
)

export default BankAccounts
