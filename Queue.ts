import {Patient} from "./Patient";

export class Queue {
    container: Patient[] = [];
    listCheckUp: string[] = [];
    constructor() {
    }
    enqueue(patient: Patient) {
        this.container.push(patient);
    }
    dequeue() {
        let x: Patient | undefined = this.container.shift();
        if (x) {
            this.listCheckUp.push(x.getName());
        }
    }
    sortListPatients() {
        this.container.sort((a,b) => a.getCode() - b.getCode());
    }
    showListPatients(): Patient[] {
        return this.container;
    }

    size(): number {
        return this.container.length;
    }
    currentPatient() {
        return `${this.container[0].getName()} vào khám`
    }
    nextPatient() {
        return `${this.container[1].getName()} chuẩn bị`
    }
}