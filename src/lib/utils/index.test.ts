import { describe, it, expect } from 'vitest';
import { mergePriorityClasses } from './index';

describe('mergePriorityClasses', () => {
    it('should return ourClasses when userClasses is undefined', () => {
        expect(mergePriorityClasses(undefined, 'bg-red text-white')).toBe('bg-red text-white');
    });

    it('should merge userClasses and ourClasses when there are no overlapping class types', () => {
        expect(mergePriorityClasses('border-2', 'bg-red text-white')).toBe('border-2 bg-red text-white');
    });

    it('should prioritize userClasses when class types overlap', () => {
        expect(mergePriorityClasses('bg-blue', 'bg-red text-white')).toBe('bg-blue text-white');
    });

    it('should handle multiple overlapping classes correctly', () => {
        expect(mergePriorityClasses('bg-blue text-black', 'bg-red text-white')).toBe('bg-blue text-black');
    });

    it('should handle empty userClasses correctly', () => {
        expect(mergePriorityClasses('', 'bg-red text-white')).toBe('bg-red text-white');
    });
});
