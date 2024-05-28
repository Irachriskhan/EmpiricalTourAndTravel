import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const recentDonorData = [
	{
		id: '1',
		donor_id: '4324',
		donor_name: 'Shirley A. Lape',
		donation_date: '2022-05-17T03:24:00',
		total_donation: '200',
		hospital_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		donor_id: '7453',
		donor_name: 'Ryan Carroll',
		donation_date: '2022-05-14T05:24:00',
		total_donation: '960',
		hospital_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		donor_id: '5434',
		donor_name: 'Mason Nash',
		donation_date: '2022-05-17T07:14:00',
		total_donation: '836',
		hospital_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		donor_id: '9854',
		donor_name: 'Luke Parkin',
		donation_date: '2022-05-16T12:40:00',
		total_donation: '453',
		hospital_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		donor_id: '8763',
		donor_name: 'Anthony Fry',
		donation_date: '2022-05-14T03:24:00',
		total_donation: '876',
		hospital_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		donor_id: '5627',
		donor_name: 'Ryan Carroll',
		donation_date: '2022-05-14T05:24:00',
		total_donation: '100',
		hospital_address: 'Los Angeles, CA 90017'
	}
]

export default function RecentDonors() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Donors</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Touriste ID</th>
							<th>Touriste Name</th>
							<th>TouristeDate</th>
							<th>Total Touriste</th>
						</tr>
					</thead>
					<tbody>
						{recentDonorData.map((donor) => (
							<tr key={donor.id}>
								<td>
									<Link to={`/donor/${donor.id}`}>#{donor.id}</Link>
								</td>
								<td>
									<Link to={`/donor/${donor.donor_id}`}>#{donor.donor_id}</Link>
								</td>
								<td>
									<Link to={`/donor/${donor.donor_id}`}>{donor.donor_name}</Link>
								</td>
								<td>{format(new Date(donor.donation_date), 'dd MMM yyyy')}</td>
								<td>{donor.total_donation}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
