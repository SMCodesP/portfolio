import styles from './About.module.css'

export default function About() {
	return (
		<div className={styles.container_about}>
			<div className={styles.infos}>
				<h1 className={styles.info_title}>Sobre</h1>
				<p className={styles.info_text}>
					Começei a minha caminhada no universo da programação bem jovem, com 9 anos de idade, mesmo com 6 anos de experiência ainda me considero um programador inexperiente/intermediário.
				</p>
				<p className={styles.info_text}>
					Dei start nessa caminhada partindo de um jogo que eu gosto, enquanto eu jogava descobri uma coisa que fez meus olhos brilharem, foi o desenvolvimento para mudar o jogo, o jogo dava suporte a desenvolver plugins para servir como extensão nisso servidores da comunidade usavam muito, e sempre desejei abrir um servidor para começar uma comunidade limpa e legal, a partir dai começei a pesquisar muito como fazia esses plugins, hospedar servidores, esse jogo tinha uma API em Java ou seja começei a "programar" em Java, de começo ainda nem sabia que aquilo era programar algo, o jogo se chama <strong>Minecraft</strong>.
				</p>
			</div>
		</div>
	)
}
