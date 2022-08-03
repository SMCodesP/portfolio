import Link from "next/link";

import ProgressiveImage from "react-progressive-graceful-image";

import RenderMarkdown from "../RenderMarkdown/";

import { Container, ImageLogo } from "./styles";

function ResumeProduct({ product }) {
	return (
		<Container>
			<>
				<Link
					href={`/products${product.category.link}/[id]`}
					as={`/products${product.category.link}/${product.id}`}
				>
					<a href={`/products${product.category.link}/${product.id}`}>
						<ProgressiveImage
							src={product.image_large}
							placeholder={product.image_small}
						>
							{(src, loading) =>
								product.image_size ? (
									<ImageLogo
										style={{
											height: 142,
											filter: loading ? "blur(5px)" : "",
										}}
										not_auto={true}
										src={src}
										alt={`${product.title} logo image`}
									/>
								) : (
									<ImageLogo
										style={{
											height: 142,
											filter: loading ? "blur(10px)" : "",
										}}
										not_auto={false}
										src={src}
										alt={`${product.title} logo image`}
									/>
								)
							}
						</ProgressiveImage>
					</a>
				</Link>
				<RenderMarkdown children={"`" + product.title + "`"} />
			</>
		</Container>
	);
}

export default ResumeProduct;
