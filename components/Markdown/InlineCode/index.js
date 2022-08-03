import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled, { useTheme } from "styled-components";

import copyTextToClipboard from "../../../utils/copyTextToClipboard";

const Container = styled.code`
	background: ${({ theme }) => theme.colors.background};
	padding: 5px;
	margin: 0 2px;
	border-radius: 5px;
	cursor: pointer;
	transition: filter 0.4s;

	&:hover {
		filter: brightness(65%);
	}
`;

const InlineCode = ({ children }) => {
	const theme = useTheme();

	async function codeCopyText() {
		const res = await copyTextToClipboard(children);

		console.log(theme.title);

		toast("Texto copiado com sucesso!", {
			autoClose: 2500,
			theme: theme.title.toLowerCase(),
		});
	}

	return (
		<>
			<Container onClick={codeCopyText}>{children}</Container>
		</>
	);
};

export default InlineCode;
