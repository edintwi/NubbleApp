import {describe, expect, it} from '@jest/globals';
import {stringUtilis} from '../stringUtils';

describe('stringUtils', () => {
  describe('capTalizeFirstLetter', () => {
    it('should captalize the first letter of eacth word', () => {
      stringUtilis.capTalizeFirstLetter('Ana Maria'); //Ana Maria
      stringUtilis.capTalizeFirstLetter('ANA MARRIA'); //Ana Maria

      expect(stringUtilis.capTalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtilis.capTalizeFirstLetter('ana maria')).toBe('Ana Maria');
      expect(stringUtilis.capTalizeFirstLetter('aNa mAria')).toBe('Ana Maria');
      expect(stringUtilis.capTalizeFirstLetter('maria')).toBe('Maria');
    });

    it('should remove leadingtrailing space', () => {
      expect(stringUtilis.capTalizeFirstLetter(' ANA MARIA')).toBe('Ana Maria');
      expect(stringUtilis.capTalizeFirstLetter(' ana maria ')).toBe(
        'Ana Maria',
      );
    });
  });
});
