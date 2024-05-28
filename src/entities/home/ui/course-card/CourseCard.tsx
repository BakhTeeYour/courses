import { Courses } from 'entities/home/model'
import styles from './course-card.module.scss'

const CourseCard = (course: Courses) => {
	return (
		<div className={styles.card}>
			<div
				style={{
					backgroundColor: course.bgColor
				}}
				className={styles.cardImageWrapper}
			>
				<img src={course.image} alt='image' className={styles.cardImage} />
			</div>
			<p className={styles.cardTitle}>{course.name}</p>
		</div>
	)
}

export default CourseCard
