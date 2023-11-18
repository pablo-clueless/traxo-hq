import React, { ComponentProps } from "react"
import { LinkProps } from "react-router-dom"

export type UserProps = {
	id: string
	firstName: string
	lastName: string
	email: string
	phone: string
	image: string
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
