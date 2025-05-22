import React from "react"
import { Button } from "@/components/ui/button"

const UserCards: React.FC = () => (
  <section>
    <h2 className="text-xl font-semibold mb-2">User Cards</h2>
    <p className="text-gray-700 mb-2">
      Dive deeper into advanced usage, including custom theming, adding more shadcn/ui components, and optimizing your build for production.
    </p>
    <Button className="mt-2">Learn More</Button>
  </section>
)

export default UserCards
