type InputProps = {
    queryType?:string
    handleSearchString?: (searchString:string)=>void
    searchString?:string
    handleQueryType?:(queryType:string)=>void
    
}

type ListProps = {
    queryType:string
    page: number
    items:any
    handleNext: ( page:number)=>void
  }

  type ForkProps = {
    name : string,
    description : string,
    url: string,
    avatarUrl:string
  }

export type {InputProps, ListProps, ForkProps}