import styled from '@emotion/styled';

export const Section = styled.section`
	margin-top: var(--spacing-larger) !important;
	margin-bottom: var(--spacing-larger) !important;

	&:first-of-type {
		margin-top: 0 !important;
	}
	&:last-child {
		margin-bottom: 0 !important;
	}

	> * {
		margin-top: 0;
		margin-bottom: 1em;
		&:last-child {
			margin-bottom: 0;
		}
	}
`;
