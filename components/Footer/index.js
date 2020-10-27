import {darken} from 'polished'
import {FiBook} from 'react-icons/fi'
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai'
import {GoGitPullRequest} from 'react-icons/go'
import {FaDiscord} from 'react-icons/fa'

import Clipoard from '../Clipoard'

import styles from './Footer.module.css'

export default () => (
	<>
		<div
			className={styles.borderCustom}
			style={{
				backgroundColor: darken(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')),
				backgroundImage: `linear-gradient(to top, ${darken(0.03, getComputedStyle(document.body).getPropertyValue('--secundaryBackground'))}, ${darken(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground'))})`
			}}
		/>
		<footer className={styles.container}>
			<div
				className={styles.projectThis}
				style={{
						alignItems: 'center',
						justifyContent: 'flex-start',
						position: 'absolute',
						left: 0,
				    height: '100%',
				    display: 'flex',
				    padding: '15px',
				}}
			>
				<a className={styles.link} href="https://github.com/SMCodesP/portfolio" target="_blank">
					<GoGitPullRequest
						title="Link para esse projeto no meu github"
						className={styles.icon}
						color={getComputedStyle(document.body).getPropertyValue('--text')}
						size={28}
					/>
				</a>
				<a className={styles.link} href="https://smcodesp.github.io/portfolio/" target="_blank">
					<FiBook
						title="Link para a documentação desse projeto no github pages"
						className={styles.icon}
						color={getComputedStyle(document.body).getPropertyValue('--text')}
						size={28}
					/>
				</a>
			</div>
			<div className={styles.footerContainer}>
				<p className={styles.title}>Feito com ❤ por SMCodes</p>
				<p className={styles.subTitle}>Este site não possuí quaisquer vínculos com a Mojang AB.</p>
			</div>
			<div className={styles.socialNetworking}>
				<a className={styles.link} href="https://github.com/SMCodesP" target="_blank">
					<AiOutlineGithub
						title="Link para o meu perfil do github"
						className={styles.icon}
						color={getComputedStyle(document.body).getPropertyValue('--text')}
						size={32}
					/>
				</a>
				<a className={styles.link} href="https://br.linkedin.com/in/samuel-pereira-da-silva-947bb31a5" target="_blank">
					<AiFillLinkedin
						title="Link para o meu perfil do linkedin"
						className={styles.icon}
						color="#0e76a8"
						size={32}
					/>
				</a>
				<div className={styles.containerColumn}>
					<Clipoard
						text="SMCodes#4207"
						success="Usuário do discord copiado com sucesso!"
					>
						<FaDiscord
							title="Clique para copiar username e minha tag no discord"
							className={styles.icon}
							color="#7289DA"
							size={32}
						/>
					</Clipoard>
					<a className={styles.link}
						href="https://discord.com/users/360247173356584960"
						target="_blank"
						title="Link para o meu perfil no discord"
					>
						<p className={styles.goTo}>
							Go to
						</p>
					</a>
				</div>
			</div>
		</footer>
	</>
)
