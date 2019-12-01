import React, { Component } from 'react';
import Header from "../components/Header";
import Meta from "../components/Meta";
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import theme from "./styles/theme";


injectGlobal`
	html {
		font-size: 16px;
	}

	body {
		font-size: 1rem;
		font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	html,
	body,
	p,
	ol,
	ul,
	li,
	dl,
	dt,
	dd,
	blockquote,
	figure,
	fieldset,
	legend,
	textarea,
	pre,
	iframe,
	hr,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		padding: 0;
	}

	// Headings
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 100%;
		font-weight: normal;
	}

	// List
	ul {
		list-style: none;
	}

	// Form
	button,
	input,
	select,
	textarea { 
		margin: 0;
	}

	// Box sizing
	html {
		box-sizing: border-box
	}

	*
	&,
	&::before,
	&::after {
		box-sizing: inherit
	}

	// Media
	img,
	video {
		height: auto;
		max-width: 100%;
	}

	// Iframe
	iframe {
		border: 0
	}

	// Table
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	td,
	th {
		padding: 0;
		&:not([align]) {
			text-align: left
		}
	}

`

const StyledPage = styled.div`
	background: white;
`;

const Container = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Container>
						{this.props.children}
					</Container>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
