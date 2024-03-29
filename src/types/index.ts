import React, { ComponentProps } from "react"
import { LinkProps } from "react-router-dom"

export type UserProps = {
	id: string
	firstName: string
	lastName: string
	email: string
	phone: string
	image: string
	track: TrackTypes
}

export type TrackProps = {
	id: string
	name: string
	description: string
	icon: JSX.Element
	courses: CourseProps[]
}

export type CourseProps = {
	id: string
	name: string
	description: string
	duration: number
	modules?: ModuleProps[]
}

export type ModuleProps = {
	id: string
	name: string
	duration: number
}

export type BookProps = {
	id: string
	title: string
	author: string
	year: Date | string
	cover: string
	content: string
	course: TrackTypes
}

export type TrackTypes =
	| "backend engineering"
	| "cloud engineering"
	| "frontend engineering"
	| "data analysis"
	| "data engineering"
	| "data science"
	| "ui/ux design"
	| "graphics design"
	| "branding & logo"

export type InputProps =
	| (ComponentProps<"input"> & {
			as?: "input"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })
	| (ComponentProps<"textarea"> & {
			as: "textarea"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })
	| (ComponentProps<"select"> & {
			as: "select"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })

export type ButtonProps =
	| (ComponentProps<"button"> & {
			as?: "button"
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })
	| (LinkProps & {
			as: "link"
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })

export interface CountryProps {
	iso2: string
	iso3: string
	name: string
	states: StateProps[]
}

export interface StateProps {
	name: string
	state_code: string
}

export interface HttpErrorProps {
	response: {
		data: {
			message: string
			name: string
			options: {}
			response: {
				message: string
				error: string
				statusCode: number
			}
			status: number
		}
	}
}

export type LogLevelProps = "success" | "error" | "warning" | "info" | "default"

export type Testimonial = {
	id: string
	name: string
	image: string
	content: string
	company: string
	position: string
}
