import { Observable } from "rxjs";
import { DiplomasPayload } from "../interfaces/diploma-response";


export abstract class DiplomasAbstract{
abstract getAllDiplomas():Observable<DiplomasPayload>;
}