export interface DiplomaDetailsResponse {
     status: boolean;
     code: number;
     payload: DiplomaDetailsPayload;
}
export interface DiplomaDetailsPayload{
      diploma: DiplomaDetailsModel;

}
export interface DiplomaDetailsModel {
 
  id: string
  title: string
  description: string
  image: string
  immutable: boolean
  createdAt: string
  updatedAt: string
  exams: Exam[]
}
export interface Exam{
    
    id: string,
    title: string ,
    description: string,
    image: string,
    duration: number,
    createdAt: string,
    questionsCount: number

}
