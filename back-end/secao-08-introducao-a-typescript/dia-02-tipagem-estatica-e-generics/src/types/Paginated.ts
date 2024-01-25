export type Paginated<GenericType> = {
  data: GenericType[],
  hasMorePage: boolean
}