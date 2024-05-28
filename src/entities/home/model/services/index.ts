import { api } from 'shared/api/api'
import { Course } from '../types'

type Props = {
	setIsLoading: (isLoading: boolean) => void
	setCourses: (courses: Course[]) => void
	setFilteredCourses: (courses: Course[]) => void
	setTags: (tags: string[]) => void
}

export const getCourses = async ({
	setIsLoading,
	setCourses,
	setFilteredCourses,
	setTags
}: Props) => {
	try {
		setIsLoading(true)
		const res = await fetch(api)
		const courses: Course[] = await res.json()
		setCourses(courses)
		setFilteredCourses(courses)
		setTags(
			Array.from(new Set(courses.flatMap(item => item.tags.filter(tag => tag))))
		)
	} catch (error) {
		console.log(error)
	} finally {
		setIsLoading(false)
	}
}
