// @ts-nocheck
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import {
	DataGrid,
	GridAddIcon,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { columns } from './GridColumns';
import { Button } from '@mui/material';

export default function SurveyDataGrid({ tableData, handleOpenModal }) {
	function CustomToolbar() {
		return (
			<GridToolbarContainer>
				<GridToolbarColumnsButton />
				<GridToolbarFilterButton />
				<GridToolbarDensitySelector />
				<GridToolbarExport />
				<Button startIcon={<GridAddIcon />} onClick={handleOpenModal}>
					ADD
				</Button>
			</GridToolbarContainer>
		);
	}
	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={tableData}
				columns={columns}
				slots={{
					toolbar: CustomToolbar,
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
