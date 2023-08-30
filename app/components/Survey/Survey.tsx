// @ts-nocheck
'use client';

import React, { useState } from 'react';
import SurveyForm from '../SurveyForm/SurveyForm';
import SurveyDataGrid from '../SurveyDataGrid/SurveyDataGrid';

const Survey = () => {
	const [tableData, setTableData] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const addTableRow = (formData) => {
		setTableData([...tableData, formData]);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	

	return (
		<>
			<SurveyForm
				addTableRow={addTableRow}
				isModalOpen={isModalOpen}
				handleCloseModal={handleCloseModal}
			/>
			<SurveyDataGrid
				tableData={tableData}
				handleOpenModal={handleOpenModal}
			/>
		</>
	);
};

export default Survey;
