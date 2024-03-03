import Link from "next/link";
import logo from '@/assets/logo.png'
import styles from './main-header.module.css';

export default function MainHeader() {
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.logo}>
				<img src={logo.src} alt="A plate with food on it" />
				NextLevel Food
			</Link>

			<nav className={styles.nav}>
				<ul>
					<li>
						<Link href='/meals'>Browse Meals</Link>
						<Link href='/community'>Foodies Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
