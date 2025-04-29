import {
  buildMessage,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import {validateDomainWildcard} from '@/validate-domain-wildcard';

export function IsDomainWildcard(options?: ValidationOptions): PropertyDecorator {
  return (object: any, propertyName: string): void => {
    registerDecorator({
      name: 'IsDomainWildcard',
      target: object.constructor,
      propertyName,
      options,
      validator: IsDomainWildcardConstraint,
    });
  };
}

@ValidatorConstraint()
export class IsDomainWildcardConstraint implements ValidatorConstraintInterface {

  validate(value: any): boolean {
    return validateDomainWildcard(value);
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return buildMessage(eachPrefix => eachPrefix + `$property must be a Domain Wildcard`)();
  }

}
