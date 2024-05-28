import { FC, ReactNode, useState } from 'react'
import styles from './nav.module.scss'

type Props = {
	children: ReactNode
	tags?: string[]
	onTagClick: (tag: string) => void
}

const Nav: FC<Props> = ({ children, tags, onTagClick }) => {
	const [isActive, setIsActive] = useState('Все темы')

	const handleClick = (tag: string) => {
		setIsActive(tag)
		onTagClick(tag)
	}
	if (tags)
		return (
			<div className={styles.wrapper}>
				<div className={styles.navButtonWrapper}>
					{['Все темы', ...tags].map(tag => (
						<div
							key={tag}
							className={isActive === tag ? styles.navActive : styles.navButton}
							onClick={() => handleClick(tag)}
						>
							{tag}
						</div>
					))}
				</div>
				{children}
			</div>
		)
}

export default Nav
