import { ClassConstructor } from 'class-transformer';
export declare class ValidationHelper {
    static validate<T extends object>(body: unknown, classType: ClassConstructor<T>): Promise<T>;
}
