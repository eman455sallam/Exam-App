import { Observable } from "rxjs";
import {  DiplomasPayload } from "../interfaces/diploma-response";
import { DiplomaDetailsModel } from "../interfaces/diploma-details-response";


export abstract class DiplomasAbstract{
abstract getAllDiplomas():Observable<DiplomasPayload>;
abstract getDiplomaById(id:string):Observable<DiplomaDetailsModel>;
}