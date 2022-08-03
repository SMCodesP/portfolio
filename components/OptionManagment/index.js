import { useState, useEffect } from "react";

import { Rings } from "react-loader-spinner";
import { Form } from "@unform/web";

import renderJSON from "../../utils/renderJSON";
import yaml from "js-yaml";

import {
	ContainerOptionsManagment,
	OptionManagment as OptionManagmentComponent,
	ContainerManagment,
	ButtonSubmit,
	ContainerButtons,
} from "./styles";

function OptionManagment({ theme }) {
	const [optionManagment, setOptionManagment] = useState("configs");
	const [config, setConfig] = useState(null);

	useEffect(() => {
		async function load() {
			try {
				const response = await fetch(
					"/plugins/config/ddl-economy.json"
				);
				const data = await response.json();

				setConfig(data);
			} catch (err) {
				console.log(err);
			}
		}

		load();
	}, []);

	function handleSubmit(data) {
		console.log(data);
		console.log(yaml.dump(data));
	}

	return (
		<>
			<ContainerOptionsManagment>
				<OptionManagmentComponent
					selected={optionManagment === "configs"}
					onClick={() => setOptionManagment("configs")}
					style={{
						marginRight: 2.5,
					}}
				>
					<h1>Configuração</h1>
				</OptionManagmentComponent>
				<OptionManagmentComponent
					selected={optionManagment === "logs"}
					onClick={() => setOptionManagment("logs")}
					style={{
						marginLeft: 2.5,
					}}
				>
					<h1>Logs</h1>
				</OptionManagmentComponent>
			</ContainerOptionsManagment>

			<ContainerManagment>
				{!config ? (
					<div
						style={{
							width: "100%",
							height: "85vh",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Rings
							color={theme.colors.fifthText}
							secondaryColor="#00BFFF"
							height={160}
							width={160}
						/>
						<h3>Carregando...</h3>
					</div>
				) : (
					<Form
						style={{
							flexDirection: "column",
						}}
						onSubmit={handleSubmit}
					>
						{Object.keys(config).map((objectKey, index) => {
							let value = config[objectKey];

							const Rendered = renderJSON(objectKey, value);

							value.defaultValue = value.value;

							return (
								<>
									<h1>{objectKey.replaceAll("_", " ")}</h1>
									{Rendered(value, objectKey)}
								</>
							);
						})}
						<ContainerButtons>
							<ButtonSubmit type="submit">Baixar</ButtonSubmit>
							<ButtonSubmit type="submit">Salvar</ButtonSubmit>
							<ButtonSubmit type="submit">
								Salvar & reiniciar
							</ButtonSubmit>
						</ContainerButtons>
					</Form>
				)}
			</ContainerManagment>
		</>
	);
}

export default OptionManagment;
