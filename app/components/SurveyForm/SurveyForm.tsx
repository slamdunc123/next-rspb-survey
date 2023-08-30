// @ts-nocheck
'use client';

import React, { FormEvent, ChangeEventHandler, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Divider, Modal } from '@mui/material';

const Form = ({ isModalOpen, handleCloseModal, addTableRow }) => {
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
		comments: '',
	};

	const [formData, setFormData] = useState(initialFormData);

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleReset = () => {
		setFormData(initialFormData);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>, formData) => {
		e.preventDefault();
		addTableRow(formData);
		setFormData(initialFormData);
		handleCloseModal();
	};

	return (
		<Modal
			open={isModalOpen}
			onClose={handleCloseModal}
			sx={{ height: '100%', overflow: 'scroll' }}
		>
			<form onSubmit={(e) => handleSubmit(e, formData)}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 350,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							id='outlined-basic'
							label='Field No'
							variant='outlined'
							type='text'
							name='fieldNo'
							value={formData.fieldNo}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Start Time'
							variant='outlined'
							type='text'
							name='startTime'
							value={formData.startTime}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
					</Box>
					<Divider sx={{ mt: 1, mb: 1 }} />
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							id='outlined-basic'
							label='Curlew'
							variant='outlined'
							type='text'
							name='curlew'
							value={formData.curlew}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Lapwing'
							variant='outlined'
							type='text'
							name='lapwing'
							value={formData.lapwing}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Oystercatcher Pairs'
							variant='outlined'
							type='text'
							name='oystercatcherPairs'
							value={formData.oystercatcherPairs}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Oystercatcher Singles'
							variant='outlined'
							type='text'
							name='oystercatcherSingles'
							value={formData.oystercatcherSingles}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Snipe Drumming / Chipping'
							variant='outlined'
							type='text'
							name='snipeDrumChip'
							value={formData.snipeDrumChip}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Snipe Total'
							variant='outlined'
							type='text'
							name='snipeTotal'
							value={formData.snipeTotal}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
					</Box>
					<Divider sx={{ mt: 1, mb: 1 }} />
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							id='outlined-basic'
							label='Land Use Code'
							variant='outlined'
							type='text'
							name='landUseCode'
							value={formData.landUseCode}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Grazed'
							variant='outlined'
							type='text'
							name='grazed'
							value={formData.grazed}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Veg Height'
							variant='outlined'
							type='text'
							name='vegHeight'
							value={formData.vegHeight}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Field Wetness'
							variant='outlined'
							type='text'
							name='fieldWetness'
							value={formData.fieldWetness}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
						<TextField
							id='outlined-basic'
							label='Standing Water'
							variant='outlined'
							type='text'
							name='standingWater'
							value={formData.standingWater}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '125px' }}
						/>
					</Box>
					<Divider sx={{ mt: 1, mb: 1 }} />
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							id='outlined-basic'
							label='DU'
							variant='outlined'
							type='text'
							name='du'
							value={formData.du}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '50px' }}
						/>
						<TextField
							id='outlined-basic'
							label='SU'
							variant='outlined'
							type='text'
							name='su'
							value={formData.su}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '50px' }}
						/>
						<TextField
							id='outlined-basic'
							label='MR'
							variant='outlined'
							type='text'
							name='mr'
							value={formData.mr}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '50px' }}
						/>
						<TextField
							id='outlined-basic'
							label='MN'
							variant='outlined'
							type='text'
							name='mn'
							value={formData.mn}
							onChange={handleOnChange}
							size='small'
							margin='dense'
							sx={{ width: '50px' }}
						/>
					</Box>
					<Divider sx={{ mt: 1, mb: 1 }} />

					<TextField
						id='outlined-basic'
						label='Foxes / Crows'
						variant='outlined'
						type='text'
						name='foxCrow'
						value={formData.foxCrow}
						onChange={handleOnChange}
						size='small'
						margin='dense'
					/>
					<Divider sx={{ mt: 1, mb: 1 }} />

					<TextField
						id='outlined-basic'
						label='Comments'
						variant='outlined'
						type='text'
						name='comments'
						value={formData.comments}
						onChange={handleOnChange}
						size='small'
						margin='dense'
					/>
					<ButtonGroup size='small' sx={{ marginTop: 2 }}>
						<Box mr={2}>
							<Button
								variant='contained'
								type='submit'
								value='Submit'
							>
								Submit
							</Button>
						</Box>
						<Box>
							<Button
								variant='contained'
								type='button'
								value='Reset'
								onClick={handleReset}
							>
								Reset
							</Button>
						</Box>
					</ButtonGroup>
				</Box>
			</form>
		</Modal>
	);
};

export default Form;
