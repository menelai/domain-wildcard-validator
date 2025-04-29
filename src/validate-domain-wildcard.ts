import {toASCII} from 'punycode/punycode';
import {isFQDN} from 'validator';

export function validateDomainWildcard(str: string): boolean {
  str = toASCII(str);

  if (str.length > 253) {
    return false;
  }

  const parts = str.split('.');
  const firstPart = parts[0];

  if ((firstPart.startsWith('*') || firstPart.endsWith('*'))) {
    if (parts.length < 3 || firstPart.startsWith('xn--')) {
      return false;
    }

    if (firstPart === '*') {
      parts.splice(0, 1);
    } else if (firstPart.startsWith('*')) {
      parts[0] = firstPart.slice(1);
    } else if (firstPart.endsWith('*')) {
      parts[0] = firstPart.slice(0, -1);
    }

    str = parts.join('.');
  }

  return isFQDN(str);
}
