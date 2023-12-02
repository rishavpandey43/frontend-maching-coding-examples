import { useState } from "react";

function MortgageCalculator() {
  const [principalLoanAmount, setPrincipalLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [totalYears, setTotalYears] = useState("");

  const [calculatedValue, setCalculatedValue] = useState("");

  function calculateMortgage() {
    // Convert the annual interest rate to a monthly rate and decimal
    let monthlyInterestRate = interestRate / 100 / 12;

    // Convert the total years to number of monthly payments
    let totalPayments = totalYears * 12;

    // Calculate the monthly payment
    let monthlyPayment =
      (principalLoanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalPayments))) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    setCalculatedValue(monthlyPayment);
  }

  return (
    <div>
      <h1 className="text-4xl mb-10">Mortgage Calculator</h1>
      <form
        className="max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();
          calculateMortgage();
        }}
      >
        <div className="mb-5">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Principal loan amount:
          </label>
          <input
            type="number"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-md p-3 rounded-lg"
            min={0}
            required
            value={principalLoanAmount}
            onChange={(e) => {
              setPrincipalLoanAmount(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Interest Rate
          </label>
          <input
            type="number"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-md p-3 rounded-lg"
            min={0}
            max={100}
            required
            value={interestRate}
            onChange={(e) => {
              setInterestRate(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Length of Loan
          </label>
          <input
            type="number"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-md p-3 rounded-lg"
            min={0}
            required
            value={totalYears}
            onChange={(e) => {
              setTotalYears(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <button
            type="submit"
            className="py-2.5 px-5 me-2 mb-2 text-xl font-medium text-white bg-blue-700 hover:bg-blue-800 rounded"
          >
            Calculate
          </button>
        </div>

        {!!calculatedValue && (
          <p>
            Your monthly mortgage payment will be INR{" "}
            {calculatedValue.toFixed(2)}
          </p>
        )}
      </form>
    </div>
  );
}

export default MortgageCalculator;
