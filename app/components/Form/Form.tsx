'use client';

import React, { FormEvent, ChangeEventHandler, useState } from 'react';

const Form = () => {
	const initialFormData = {
		fieldNo: '',
    startTime: '',
    curlew: '',
    lapwing: '',
    oystercatcherPairs: '',
    oystercatcherSingles: '',
    snipeDrumChip: '',
    snipeTotal: '',
    landUseCode: '',
    grazed: '',
    vegHeight: '',
    fieldWetness: '',
    standingWater: '',
    du: '',
    su: '',
    mr: '',
    mn: '',
    foxCrow: '',

	};

	const [formData, setFormData] = useState(initialFormData);

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

  const handleReset = () => {
    setFormData(initialFormData)
  }
	return (
		<>
			<div>Form</div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type='text'
					name='fieldNo'
          value={formData.fieldNo}
          placeholder='Field No'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='startTime'
          value={formData.startTime}
          placeholder='Start Time'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='curlew'
          value={formData.curlew}
          placeholder='Curlew'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='lapwing'
          value={formData.lapwing}
          placeholder='Lapwing'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='oystercatcherPairs'
          value={formData.oystercatcherPairs}
          placeholder='Oystercatcher Pairs'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='oystercatcherSingles'
          value={formData.oystercatcherSingles}
          placeholder='Oystercatcher Singles'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='snipeDrumChip'
          value={formData.snipeDrumChip}
          placeholder='Snipe Drumming / Chipping'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='snipeTotal'
          value={formData.snipeTotal}
          placeholder='Snipe Total'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='landUseCode'
          value={formData.landUseCode}
          placeholder='Land Use Code'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='grazed'
          value={formData.grazed}
          placeholder='Grazed'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='vegHeight'
          value={formData.vegHeight}
          placeholder='Veg Height'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='fieldWetness'
          value={formData.fieldWetness}
          placeholder='Field Wetness'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='standingWater'
          value={formData.standingWater}
          placeholder='Standing Water'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='du'
          value={formData.du}
          placeholder='DU'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='su'
          value={formData.su}
          placeholder='SU'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='mr'
          value={formData.mr}
          placeholder='MR'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='mn'
          value={formData.mn}
          placeholder='MN'
					onChange={(e) => handleOnChange(e)}
				/>
				<input
					type='text'
					name='foxCrow'
          value={formData.foxCrow}
          placeholder='Foxes / Crows'
					onChange={(e) => handleOnChange(e)}
				/>
				<button>Submit</button>
				<button onClick={handleReset}>Reset</button>
			</form>
		</>
	);
};

export default Form;
