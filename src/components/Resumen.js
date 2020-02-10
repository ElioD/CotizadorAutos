import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { primerMyuscula } from '../Helpers';

const ContenerResumen = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838f;
	color: #ffffff;
	margin-top: 1rem;
`;

const Resumen = ({ resumen }) => {
	//Estraemos datos
	const { marca, year, plan } = resumen.datos;

	if (marca === '' || year === '' || plan === '') return null;

	return (
		<ContenerResumen>
			<h2>Resumen de Cotizacion</h2>
			<ul>
				<li>Marca: {primerMyuscula(marca)}</li>
				<li>Plan: {primerMyuscula(plan)}</li>
				<li>Año del Auto: {year}</li>
			</ul>
		</ContenerResumen>
	);
};

export default Resumen;
