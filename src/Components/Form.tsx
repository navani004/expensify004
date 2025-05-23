import React, { useState } from 'react';

interface FormProps {
  onSubmit: (expense: { name: string; amount: number; personName: string }) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [personName, setPersonName] = useState('');  // New field for name

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expense || !amount || !personName) return;  // Ensure personName is provided

    // Send the expense data to the parent component
    onSubmit({ name: expense, amount: parseFloat(amount), personName });

    // Reset form fields after submission
    setExpense('');
    setAmount('');
    setPersonName('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Person's Name Field */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      {/* Expense Name Field */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Expense</label>
        <input
          type="text"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      {/* Amount Field */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default Form;
