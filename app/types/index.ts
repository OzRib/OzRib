import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type HeaderHeight = number | {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export type CustomNextPage<P = {}, IP = {}> = NextPage<P, IP> & { headerHeight?: HeaderHeight }

export type CustomAppProps = AppProps & { Component: CustomNextPage }
