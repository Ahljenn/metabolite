import React from 'react';
interface StandardsTableProps {
  strengthStandards: number[];
  multiplier: Record<string, number>;
}

const StandardsTable: React.FC<StandardsTableProps> = ({ strengthStandards, multiplier }) => {
  return (
    <div className="mt-5">
      <table className="w-full text-sm text-left text-white">
        <thead className="bg-neutral-800 text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Body Weight
            </th>
            <th scope="col" className="px-6 py-3">
              Beginner
            </th>
            <th scope="col" className="px-6 py-3">
              Novice
            </th>
            <th scope="col" className="px-6 py-3">
              Intermediate
            </th>
            <th scope="col" className="px-6 py-3">
              Advanced
            </th>
            <th scope="col" className="px-6 py-3">
              Elite
            </th>
          </tr>
        </thead>
        <tbody>
          {strengthStandards.map((weight: number, idx: number) => (
            <tr className="border-b bg-neutral-900 border-neutral-800" key={idx}>
              <td className="px-6 py-4">{weight}</td>
              <td className="px-6 py-4">{Math.floor(weight * multiplier['Beginner'])}</td>
              <td className="px-6 py-4">{Math.floor(weight * multiplier['Novice'])}</td>
              <td className="px-6 py-4">{Math.floor(weight * multiplier['Intermediate'])}</td>
              <td className="px-6 py-4">{Math.floor(weight * multiplier['Advanced'])}</td>
              <td className="px-6 py-4">{Math.floor(weight * multiplier['Elite'])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandardsTable;
