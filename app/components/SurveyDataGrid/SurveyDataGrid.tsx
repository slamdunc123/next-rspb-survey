// @ts-nocheck
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns } from './GridColumns';

export default function SurveyDataGrid({ tableData }) {
	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={tableData}
				columns={columns}
				slots={{
					toolbar: GridToolbar,
				}}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
				getRowId={() => Math.floor(Math.random() * 100000000)}
			/>
		</Box>
	);
}
