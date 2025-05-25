import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BankAccounts() {
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
      < CreateInactiveSection />
      < CreateCashTransactionSection />
      < DeleteSection />
    </div>
  )
}

const CreateSection = () => {
  return (
    <section id="create" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># CREATE</h1>

      <p className="py-2">
        A Bank Account is an arrangement made between a <strong>bank</strong> and a <strong>
          client</strong> where the <strong>client</strong> can deposit and withdraw his funds.
      </p>

      <p className="py-2">
        On <strong>30/Fev</strong>, a <strong>Bank Account</strong> functions in a similar way,
        but mainly used to store the source or destination of a <strong>Cash Transaction</strong>.
      </p>

      <div className="py-3">
        <Alert variant="destructive">
          <AlertCircle className="size-4 mt-1" />

          <AlertTitle>
            <span className="text-lg">
            At the moment, it is <strong>NOT</strong> recommended to create transactions between your own accounts.
            </span>
          </AlertTitle>

          <AlertDescription>
            <span className="text-slate-600 text-lg">
              For example, moving your own money from bank A to bank B should not be registered in this system, and if done so,
              we do <strong>NOT</strong> guarantee that processes work smoothly as they should.
              And even if they do, the complexity introduced to the system is very likely uncalled for.

              <p className="py-2">
                We are aware that this is not the ideal behaviour, but we are trying to find a solution.
              </p>
            </span>
          </AlertDescription>
        </Alert>
      </div>


      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Basics</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>Accounts</strong> from the second row of the top menu.</li>

        <li>Click the <strong>New Bank Account</strong> button.</li>

        <li>Fill in:</li>

        <li className="pl-6">
          <strong>Bank Account Name*</strong> - The name of the Bank Account.
        </li>

        <li className="pl-6">
          <strong>Bank*</strong> - The physical or digital bank where the Bank Account is located.
        </li>

        <li className="pl-6">
          <strong>Agency Number (4 digits)</strong> - The agency number of the bank where the Bank Account is located. (optional)
        </li>

        <li className="pl-6">
          <strong>Account Number</strong> - The account number of the Bank Account. (optional)
        </li>

        <li className="pl-6">
          <strong>Active*</strong> (default is true) - Whether the Bank Account is active or not.
          An active Bank Account shows up as one of the available options when creating a <strong>Cash Transaction</strong>.
        </li>

        <li>
          Click on the <strong>Submit Bank Account</strong> button.
        </li>

        <p className="py-2">
          In case the form was submitted with the necessary data AND the Active checkbox is checked, you will be redirected to <strong>
          Cash Transaction</strong> creation with the given Bank Account you have created already preselected.
        </p>
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
}

const EditSection = () => {
  return (
    <section id="edit" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># EDIT</h1>

      <p className="py-2">
        A Bank Account can be edited thoroughly. When it is edited, everything attached to it should also be edited.
        So if a Bank Account named <strong>Ace</strong> becomes <strong>Apex</strong>, every <strong>Cash Transaction</strong>
        that was created with <strong>Ace</strong> will now become <strong>Apex</strong>.
      </p>

      <p className="py-2">
        A Bank Account has some columns that cannot be edited because they are automatically calculated.
        These are <strong>balance</strong>, <strong>count of cash transactions</strong>, and <strong>sum of cash transactions</strong>.
        Although <strong>30/Fev</strong> can already be used in a fairly functional way, I do not recommend relying on <strong>balance</strong>.
        I still have not implemented a way to tell the balance of each bank account without registering transfers between one`s own accounts (
        which I also do not recommend for how complex and honestly, tedious, this can become).
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Basics</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>Accounts</strong> from the second row of the top menu.</li>

        <li>Find the Bank Account you want to edit.</li>

        <li>Click the <strong>Edit</strong> button. (blue pencil)</li>

        <li>Make your changes.</li>

        <li>
          Click on the <strong>Submit Bank Account</strong> button.
        </li>

        <p className="py-2">
          In case the form was submitted with the necessary data AND the Active checkbox is checked, you will be redirected to <strong>
          Cash Transaction</strong> creation with the given Bank Account you have edited already preselected.
        </p>
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
}

const CreateInactiveSection = () => {
  return (
    <section id="create-inactive" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># CREATE INACTIVE</h1>

      <p className="py-2">
        A Bank Account, when created, can be chosen from the <strong>Cash Transaction</strong> form, unless they are inactive.
        An inactive Bank Account is useful in that the user can still have it registered in the system, without having to use it in any way.
      </p>

      <p className="py-2">
        When editing an <strong>active</strong> Bank Account into <strong>inactive</strong>, the user should expect the same behaviour:
        the Bank Account will <strong>NOT</strong> be selectable in the <strong>Cash Transaction</strong> form.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Basics</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>Accounts</strong> from the second row of the top menu.</li>

        <li>Click the <strong>New Bank Account</strong> button.</li>

        <li>Fill in the necessary fields, but <strong>uncheck</strong> the Active checkbox.</li>

        <li>
          Click on the <strong>Submit Bank Account</strong> button.
        </li>

        <p className="py-2">
          After submitting the form, you will be redirected to the listing of <strong>Bank Accounts</strong>.
          You will not see your newly-created inactive Bank Account there unless you click on the top right corner button <strong>Show Inactive</strong>.
        </p>
        <p className="py-2">
          Plus, when inactive, a Bank Account will not show up as one of the options in the <strong>Cash Transaction</strong> form.
        </p>
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
}

const CreateCashTransactionSection = () => {
  return (
    <section id="create-cash-transaction" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># CREATE CASH TRANSACTION</h1>

      <p className="py-2">
        Although this is not recommended, a <strong>Cash Transaction</strong> can be created without a bank account.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Cash Transactions</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>Pix</strong> from the second row of the top menu.</li>

        <li>Click the <strong>New Cash Transaction</strong> button.</li>

        <li>Fill in only the following fields for now:</li>

        <li className="pl-6">
          <strong>Description*</strong> - The description of the Cash Transaction.
        </li>

        <li className="pl-6">
          <strong>Comment</strong> - A comment for the Cash Transaction. (optional)
        </li>

        <li className="pl-6">
          <strong>Bank Account</strong> - The Bank Account to which the Cash Transaction will be associated. (optional, not recommended)
        </li>
        <p className="pl-12">Fill in this field with one of the Bank Accounts we have created so far.</p>

        <li className="pl-6">
          <strong>Date*</strong> - The date of the Cash Transaction.
        </li>

        <li className="pl-6">
          <strong>Price*</strong> - The price of the Cash Transaction.
        </li>

        <li>
          Click on the <strong>Submit Cash Transaction</strong> button.
        </li>

        <p className="py-2">
          Moving back to Bank Accounts Listing page, you will see that the used Bank Account has updated its transactions count and transactions total.
        </p>

        <p className="py-2">
          As for the transactions count, you are able to click on the link that takes you to the listing of all these cash transactions that belong to the given bank account.
        </p>
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
}

const DeleteSection = () => {
  return (
    <section id="delete" className="scroll-mt-26 text-gray-900">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 pb-4"># DELETE</h1>

      <div className="py-3">
        <Alert variant="destructive">
          <AlertCircle className="size-4 mt-1" />

          <AlertTitle>
            <span className="text-lg">
              A Bank Account can only be deleted if there are no <strong>Cash Transactions</strong> associated with it.
            </span>
          </AlertTitle>

          <AlertDescription>
            <span className="text-slate-600 text-lg">
              In case, the user still wishes to delete it, he will have to do one of the following:

              <ul className="list-disc list-inside space-y-1">
                <li>Delete all the <strong>Cash Transactions</strong> associated with it.</li>
                <li>Update the Bank Account to be inactive (recommended).</li>
              </ul>
            </span>
          </AlertDescription>
        </Alert>
      </div>

      <p className="py-2">
        On <strong>30/Fev</strong>, a <strong>Bank Account</strong> functions in a similar way,
        but mainly used to store the source or destination of a <strong>Cash Transaction</strong>.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Basics</strong> from the first row of the top menu.</li>

        <li>Navigate to <strong>Accounts</strong> from the second row of the top menu.</li>

        <li>Find the bank account you want to delete.</li>

        <li>Click the <strong>Delete</strong> icon (red little x).</li>

        <li>Upon confirmation, click <strong>Yes</strong>.</li>

        <p className="py-2">
          In case the chosen bank account to be deleted has transactions attached to it, the deletion will fail.
          An alert notification will pop up to inform the user.
        </p>
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
}
