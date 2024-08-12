import PropTypes from 'prop-types'

const BasicTable = ({ rows }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="w-full gap-y-5 text-xs text-gray-700 uppercase">
          <tr className="bg-[#D9D9D9]">
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email Address
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Parent
            </th>
            <th scope="col" className="px-6 py-3">
              Age Range
            </th>
            <th scope="col" className="px-6 py-3">
              State
            </th>
            <th scope="col" className="px-6 py-3">
              Date Applied
            </th>
          </tr>
        </thead>
        <tbody className="w-full gap-y-5">
          {rows.map((applicant) => {
            return (
              <tr key={applicant._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  { `${applicant.lastName} ${applicant.firstName}` }
                </th>
                <td className="px-6 py-4">
                  {applicant.email}
                </td>
                <td className="px-6 py-4">
                  {applicant.phone}
                </td>
                <td className="px-6 py-4">
                  {applicant.parent}
                </td>
                <td className="px-6 py-4">
                  {applicant.ageRange}
                </td>
                <td className="px-6 py-4">
                  {applicant.state}
                </td>
                <td className="px-6 py-4">
                  {new Date(applicant.createdAt).toLocaleDateString()}
                </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  );
}

BasicTable.propTypes = {
  rows: PropTypes.array.isRequired,
}

export default BasicTable;