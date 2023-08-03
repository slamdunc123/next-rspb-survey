// @ts-nocheck
'use client';

import React, { useState } from 'react';
import SurveyForm from '../SurveyForm/SurveyForm';
import SurveyDataGrid from '../SurveyDataGrid/SurveyDataGrid';

const Survey = () => {
	const [tableData, setTableData] = useState([]);

	const addTableRow = (formData) => {
		setTableData([...tableData, formData]);
	};

	return (
		<>
			<SurveyForm addTableRow={addTableRow} />
			<SurveyDataGrid tableData={tableData} />
		</>
	);
};

export default Survey;
