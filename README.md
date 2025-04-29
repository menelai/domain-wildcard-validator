## Domain wildcard validator

Custom validator to match `domain.com`, `*.domain.com`, `домен.рф`, `*.домен.рф`

## Installation

```
npm i @kovalenko/domain-wildcard-validator
```

## Usage

```typescript
IsDomainWildcard(options?: ValidationOptions): PropertyDecorator;
```

### For class validation

```typescript
import {IsDomainWildcard} from '@kovalenko/domain-wildcard-validator';

export class Foo {
  @IsDomainWildcard()
  readonly domain: string;
}
```

### Manual validation

```typescript
import {validateDomainWildcard} from '@kovalenko/domain-wildcard-validator';

const isValid = validateDomainWildcard('*.domain.com');
```

[MIT](LICENSE)
