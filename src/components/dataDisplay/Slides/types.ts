export interface SectionData {
  title?: string
}

export interface SlideProps {
  title: string
  subtitle: string
  src: string
  link?: string
  children?: React.ReactNode
}

export type SlidesProps<T = SectionData> = T & {
  slides: SlideProps[]
}
