import {
  Table,
  TableBody, 
  TableCell, 
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import PropTypes from 'prop-types'
import { columns } from '../Utils/columns';

const BasicTable = ({ rows }) => {
  const data = rows.map(applicant => ({
    id: applicant._id,
    fullName: `${applicant.lastName} ${applicant.firstName}`,
    email: applicant.email,
    phone: applicant.phone,
    parent: applicant.parent,
    ageRange: applicant.ageRange,
    state: applicant.state,
    dateApplied: new Date(applicant.createdAt).toLocaleDateString(),
  }))

  return (
    <Table className="font-General_Sans">
        <TableHeader className="">
          <TableRow className="bg-[#D9D9D9] rounded-lg">
          {columns.map((column) => (
            <TableHead key={column.accessorKey} className="font-semibold text-[#3a3a3aa5]">{column.header}</TableHead>
          ))}
        </TableRow>
        <div className="w-full h-5" />
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <>
          <div className="w-full h-3" />
          <TableRow key={row.id} className="font-medium border-[0.4px] border-[#16656fa7]">
            {columns.map((column) => (
              <TableCell key={column.accessorKey} className="text-[#3a3a3aa5]">{row[column.accessorKey]}</TableCell>
            ))}
          </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
}

BasicTable.propTypes = {
  rows: PropTypes.array.isRequired,
}

export default BasicTable;