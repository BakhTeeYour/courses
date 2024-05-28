import { useEffect, useState } from 'react'
import Nav from 'shared/layout'
import styles from './home.module.scss'
import CourseCard from './ui/course-card'
import { Course, getCourses } from './model'
import { Loader } from 'shared/ui'

const Home = () => {
	const [courses, setCourses] = useState<Course[]>([])
	const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [tags, setTags] = useState<string[]>()
	const [tag, setTag] = useState('Все темы')

	useEffect(() => {
		if (tag === 'Все темы') {
			setFilteredCourses(courses)
			return
		}
		setFilteredCourses(courses.filter(course => course.tags.includes(tag)))
	}, [courses, tag])

	useEffect(() => {
		getCourses({ setIsLoading, setCourses, setFilteredCourses, setTags })
	}, [])

	if (isLoading)
		return (
			<div className={styles.loader}>
				<Loader />
			</div>
		)
	return (
		<Nav tags={tags} onTagClick={setTag}>
			<div className={styles.wrapper}>
				{filteredCourses.map(course => (
					<CourseCard key={course.id} {...course} />
				))}
			</div>
		</Nav>
	)
}

export default Home
