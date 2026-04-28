export interface DiplomaResponse {
status: boolean
  code: number
  payload: DiplomasPayload
}

export interface DiplomasPayload {
  diplomas: Diploma[]
  metadata: PaginationMetadata
}

export interface Diploma{
  id: string
  title: string
  description: string
  image: string
  immutable: boolean
  createdAt: string
  updatedAt: string
}

export interface PaginationMetadata {
  page: number
  limit: number
  total: number
  totalPages: number
}


