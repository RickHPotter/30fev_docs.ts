import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Video from "@/components/Video"

export default function UserCards() {
  const { section } = useParams()

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [section])

  return (
    <div className="space-y-12 text-md md:text-lg">
      < CreateSection />
      < EditSection />
      < CreateCardTransactionSection />
      < DeleteSection />
    </div>
  )
}

const CreateSection = () => {
  return (
    <section id="create" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># CREATE</h1>

      <p className="py-2">
        A User Card (Credit Card) is a facility that allows you to pay for various expenses.
        It comes with a set credit limit. When you use this card for payments, the issuing entity pays for your expenses on your behalf.
        The entity then bills you for the expenses incurred on the card, which you must repay by a predetermined due date.
      </p>

      <p className="py-2">
        On <strong>30/Fev</strong>, a User Card functions in the same way, except that for now, the credit limit is not required.
      </p>

      <p className="py-2">
        Note that a <strong>Card Transaction</strong> has to always have a User Card attached to it, and all
        transactions that belong to this User Card given a reference month-year will be grouped together for payment
        at the given due date informed. We'll see more of it later on <strong>Card Transaction</strong> section.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Basics</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>Cards</strong> from the second row of the top menu.</li>

        <li>Click the <strong>New User Card</strong> button.</li>

        <li>Fill in:</li>

        <li className="pl-6">
          <strong>User Card Name*</strong> - The name of the User Card.
        </li>

        <li className="pl-6">
          <strong>Card Brand*</strong> - The physical or digital brand of the User Card.
        </li>

        <li className="pl-6">
          <strong>Closing Date*</strong> - The (current) closing date of the User Card. Used for measuring the amount of days until due date.
        </li>

        <li className="pl-6">
          <strong>Due Date*</strong> - The date in which the User Card is due for payment.
        </li>

        <li className="pl-6">
          <strong>Minimun Spend</strong> - The minimum spend allowed for the User Card. (optional)
        </li>

        <li className="pl-6">
          <strong>Credit Limit</strong> - The credit limit of the User Card. (optional, but recommended)
        </li>

        <li className="pl-6">
          <strong>Active*</strong> (default is true) - Whether the User Card is active or not.
          An active User Card shows up as one of the available options when creating a <strong>Card Transaction</strong>.
        </li>

        <li>
          Click on the <strong>Submit User Card</strong> button.
        </li>

        <p className="py-2">
          In case the form was submitted with the necessary data AND the Active checkbox is checked, you will be redirected to <strong>
          Card Transaction</strong> creation with the given User Card you have created already preselected.
        </p>
      </ul>

      < Video videoPath="03. Basics/02. UserCards/en/01. Create" />
    </section>
  )
}

const EditSection = () => {
  return (
    <section id="edit" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># EDIT</h1>

      <p className="py-2">
        A User Card can be edited thoroughly. When it is edited, everything attached to it should also be edited.
        So if a User Card named <strong>Ace</strong> becomes <strong>Apex</strong>, every <strong>Card Transaction
        </strong> that was created with <strong>Ace</strong> will now become <strong>Apex</strong>.
      </p>

      <p className="py-2">
        A User Card has some columns that cannot be edited because they are automatically calculated.
        These are <strong>count of card transactions</strong> and <strong>sum of card transactions</strong>.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Basics</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>Cards</strong> from the second row of the top menu.</li>

        <li>Find the User Card you want to edit.</li>

        <li>Click the <strong>Edit</strong> button. (blue pencil)</li>

        <li>Make your changes.</li>

        <li>
          Click on the <strong>Submit User Card</strong> button.
        </li>

        <p className="py-2">
          In case the form was submitted with the necessary data AND the Active checkbox is checked, you will be redirected to <strong>
          Card Transaction</strong> creation with the given User Card you have edited already preselected.
        </p>
      </ul>

      < Video videoPath="03. Basics/02. UserCards/en/02. Edit" />

      <p className="py-2">
        For the purpose of showcasing, we are creating some other User Cards as you can see in the image below.
      </p>

      <img src="videos/03. Basics/02. UserCards/en/03. Create Other User Cards.png" alt="Listing of User Cards Newly Created" />
    </section>
  )
}

const CreateCardTransactionSection = () => {
  return (
    <section id="create-card-transaction" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># CREATE CARD TRANSACTION</h1>

      <p className="py-2">
        As mentioned before, a <strong>Card Transaction</strong> can only be created with a User Card.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Card Transactions</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>(user card name)</strong> from the second row of the top menu.</li>

        <li>Click the <strong>New Card Transaction (user card name)</strong> button.</li>

        <li>Fill in only the following fields for now:</li>

        <li className="pl-6">
          <strong>Description*</strong> - The description of the Card Transaction.
        </li>

        <li className="pl-6">
          <strong>Comment</strong> - A comment for the Card Transaction. (optional)
        </li>

        <li className="pl-6">
          <strong>User Card*</strong> - The User Card to which the Card Transaction will be associated.
        </li>
        <p className="pl-12">This field will be preselected, but can be changed to some other.</p>

        <li className="pl-6">
          <strong>Date*</strong> - The date of the Card Transaction.
        </li>

        <li className="pl-6">
          <strong>Price*</strong> - The price of the Card Transaction.
        </li>

        <li>
          Click on the <strong>Submit Card Transaction</strong> button.
        </li>

        <p className="py-2">
          Moving back to User Cards Listing page, you will see that the used User Card has updated its transactions count and transactions total.
        </p>

        <p className="py-2">
          As for the transactions count, you are able to click on the link that takes you to the listing of all these card transactions that belong to the given user card.
        </p>
      </ul>

      < Video videoPath="03. Basics/02. UserCards/en/04. Create CardTransaction" />
    </section>
  )
}

const DeleteSection = () => {
  return (
    <section id="delete" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># DELETE</h1>

      <div className="py-3">
        <Alert variant="destructive">
          <AlertCircle className="size-4 mt-1" />

          <span className="text-lg hidden md:block">
            <AlertTitle>
              A User Card can only be deleted if there are no <strong>Card Transactions</strong> associated with it.
            </AlertTitle>
          </span>

          <AlertDescription>
            <span className="block md:hidden text-md md:text-lg">
              A User Card can only be deleted if there are no <strong>Card Transactions</strong> associated with it.
            </span>

            <span className="text-slate-600 text-md md:text-lg">
              If that is not the case and the user still wishes to delete it, he will have to do one of the following:

              <ul className="list-disc list-inside space-y-1">
                <li>Delete all the <strong>Card Transactions</strong> associated with it.</li>
                <li>Update the User Card to be inactive (recommended).</li>
              </ul>
            </span>
          </AlertDescription>
        </Alert>
      </div>

      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Basics</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>Cards</strong> from the second row of the top menu.</li>

        <li>Find the user card you want to delete.</li>

        <li>Click the <strong>Delete</strong> icon (red little x).</li>

        <li>Upon confirmation, click <strong>Yes</strong>.</li>

        <p className="py-2">
          In case the chosen user card to be deleted has transactions attached to it, the deletion will fail.
          An alert notification will pop up to inform the user.
        </p>
      </ul>

      < Video videoPath="03. Basics/02. UserCards/en/05. Delete and Delete Failure Because UserCard Has Transactions"/>
    </section>
  )
}
