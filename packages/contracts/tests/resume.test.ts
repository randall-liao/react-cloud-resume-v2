import { describe, expect, it } from 'vitest';
import { parseResumeDocument, resumeData } from '../src/resume';
import validResumeData from '../src/resume.json';

/** Deep-clone valid resume JSON and set a nested value by dotted/bracket path. */
function withPath(path: string, value: unknown): unknown {
  const root = structuredClone(validResumeData) as Record<string, unknown>;
  const tokens = path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);

  let cursor: Record<string, unknown> = root;
  for (let i = 0; i < tokens.length - 1; i += 1) {
    cursor = cursor[tokens[i]] as Record<string, unknown>;
  }
  cursor[tokens[tokens.length - 1]] = value;
  return root;
}

describe('parseResumeDocument', () => {
  it('parses valid resume data correctly', () => {
    const parsedData = parseResumeDocument(validResumeData);

    // Check some key fields to ensure it parsed
    expect(parsedData.header.name).toBe(validResumeData.header.name);
    expect(parsedData.hero.status).toBe(validResumeData.hero.status);
    expect(parsedData.experience.length).toBe(validResumeData.experience.length);
  });

  it('produces a structure that round-trips against the source JSON', () => {
    // toEqual (not toStrictEqual) so that optional fields explicitly set to undefined
    // are treated as equivalent to absent keys in the raw JSON.
    expect(parseResumeDocument(validResumeData)).toEqual(validResumeData);
  });

  it('exposes a pre-parsed resumeData export matching the source JSON', () => {
    expect(resumeData).toEqual(validResumeData);
  });

  it('throws an error if resume data is not an object', () => {
    expect(() => parseResumeDocument(null)).toThrow('resumeData must be an object.');
    expect(() => parseResumeDocument('string')).toThrow('resumeData must be an object.');
    expect(() => parseResumeDocument([])).toThrow('resumeData must be an object.');
  });

  it('throws an error if a required string field is missing or invalid', () => {
    const invalidData = {
      ...validResumeData,
      header: {
        ...validResumeData.header,
        name: 123, // Invalid type
      },
    };

    expect(() => parseResumeDocument(invalidData)).toThrow('resumeData.header.name must be a string.');
  });

  it('throws an error if an array field is not an array', () => {
    const invalidData = {
      ...validResumeData,
      experience: 'not an array',
    };

    expect(() => parseResumeDocument(invalidData)).toThrow('resumeData.experience must be an array.');
  });

  it('reports the offending index for an invalid nested object-array entry', () => {
    const invalidData = {
      ...validResumeData,
      header: {
        ...validResumeData.header,
        socialLinks: [
          validResumeData.header.socialLinks[0],
          { icon: 'fab fa-linkedin' }, // missing url
        ],
      },
    };

    expect(() => parseResumeDocument(invalidData)).toThrow(
      'resumeData.header.socialLinks[1].url must be a string.',
    );
  });

  it('reports the offending index for an invalid string-array element', () => {
    const invalidData = {
      ...validResumeData,
      hero: {
        ...validResumeData.hero,
        ideSnippet: {
          ...validResumeData.hero.ideSnippet,
          code: {
            ...validResumeData.hero.ideSnippet.code,
            stack: ['Python', 42], // second element is not a string
          },
        },
      },
    };

    expect(() => parseResumeDocument(invalidData)).toThrow(
      'resumeData.hero.ideSnippet.code.stack[1] must be a string.',
    );
  });

  it('accepts side projects that omit their optional fields', () => {
    const minimalProject = {
      title: 'Minimal',
      icon: 'bolt',
      url: 'https://example.com',
      description: 'No optional fields here.',
      metrics: [],
    };
    const data = {
      ...validResumeData,
      sideProjects: [minimalProject],
    };

    const parsed = parseResumeDocument(data);

    expect(parsed.sideProjects[0].uptime).toBeUndefined();
    expect(parsed.sideProjects[0].statusLabel).toBeUndefined();
    expect(parsed.sideProjects[0].statusPercentage).toBeUndefined();
  });

  it('validates the type of an optional numeric side-project field when present', () => {
    const data = {
      ...validResumeData,
      sideProjects: [
        {
          ...validResumeData.sideProjects[0],
          statusPercentage: '100', // should be a number
        },
      ],
    };

    expect(() => parseResumeDocument(data)).toThrow(
      'resumeData.sideProjects[0].statusPercentage must be a number.',
    );
  });

  it('validates the type of an optional string side-project field when present', () => {
    const data = {
      ...validResumeData,
      sideProjects: [
        {
          ...validResumeData.sideProjects[0],
          statusLabel: 99, // should be a string
        },
      ],
    };

    expect(() => parseResumeDocument(data)).toThrow(
      'resumeData.sideProjects[0].statusLabel must be a string.',
    );
  });

  it('accepts interests that omit the optional url field', () => {
    const data = {
      ...validResumeData,
      interests: [
        {
          ...validResumeData.interests[0],
          url: undefined,
        },
      ],
    };

    const parsed = parseResumeDocument(data);

    expect(parsed.interests[0].url).toBeUndefined();
  });

  it('validates the type of the optional interest url when present', () => {
    const data = {
      ...validResumeData,
      interests: [
        {
          ...validResumeData.interests[0],
          url: 42, // should be a string
        },
      ],
    };

    expect(() => parseResumeDocument(data)).toThrow(
      'resumeData.interests[0].url must be a string.',
    );
  });

  describe('exact error context paths', () => {
    const notAnObject = 123;
    const notAString = 123;
    const notAnArray = 'not-an-array';

    const objectPathCases: Array<{ path: string; message: string }> = [
      { path: 'header', message: 'resumeData.header must be an object.' },
      { path: 'hero', message: 'resumeData.hero must be an object.' },
      { path: 'originStory', message: 'resumeData.originStory must be an object.' },
      { path: 'footer', message: 'resumeData.footer must be an object.' },
      { path: 'hero.primaryButton', message: 'resumeData.hero.primaryButton must be an object.' },
      { path: 'hero.secondaryButton', message: 'resumeData.hero.secondaryButton must be an object.' },
      { path: 'hero.ideSnippet', message: 'resumeData.hero.ideSnippet must be an object.' },
      { path: 'hero.ideSnippet.code', message: 'resumeData.hero.ideSnippet.code must be an object.' },
      {
        path: 'header.socialLinks[0]',
        message: 'resumeData.header.socialLinks[0] must be an object.',
      },
      {
        path: 'sideProjects[0]',
        message: 'resumeData.sideProjects[0] must be an object.',
      },
      {
        path: 'sideProjects[0].metrics[0]',
        message: 'resumeData.sideProjects[0].metrics[0] must be an object.',
      },
      {
        path: 'experience[0]',
        message: 'resumeData.experience[0] must be an object.',
      },
      {
        path: 'education[0]',
        message: 'resumeData.education[0] must be an object.',
      },
      {
        path: 'certifications[0]',
        message: 'resumeData.certifications[0] must be an object.',
      },
      {
        path: 'interests[0]',
        message: 'resumeData.interests[0] must be an object.',
      },
      {
        path: 'interests[0].metrics[0]',
        message: 'resumeData.interests[0].metrics[0] must be an object.',
      },
    ];

    const arrayPathCases: Array<{ path: string; message: string }> = [
      { path: 'header.socialLinks', message: 'resumeData.header.socialLinks must be an array.' },
      { path: 'sideProjects', message: 'resumeData.sideProjects must be an array.' },
      { path: 'experience', message: 'resumeData.experience must be an array.' },
      { path: 'education', message: 'resumeData.education must be an array.' },
      { path: 'certifications', message: 'resumeData.certifications must be an array.' },
      { path: 'interests', message: 'resumeData.interests must be an array.' },
      {
        path: 'sideProjects[0].metrics',
        message: 'resumeData.sideProjects[0].metrics must be an array.',
      },
      {
        path: 'experience[0].technologies',
        message: 'resumeData.experience[0].technologies must be an array.',
      },
      {
        path: 'hero.ideSnippet.code.stack',
        message: 'resumeData.hero.ideSnippet.code.stack must be an array.',
      },
      {
        path: 'interests[0].metrics',
        message: 'resumeData.interests[0].metrics must be an array.',
      },
    ];

    const stringPathCases: string[] = [
      'header.name',
      'header.socialLinks[0].icon',
      'header.socialLinks[0].url',
      'hero.status',
      'hero.headlinePrefix',
      'hero.headlineHighlight',
      'hero.description',
      'hero.primaryButton.text',
      'hero.primaryButton.url',
      'hero.secondaryButton.text',
      'hero.secondaryButton.url',
      'hero.ideSnippet.filename',
      'hero.ideSnippet.code.name',
      'hero.ideSnippet.code.role',
      'hero.ideSnippet.code.location',
      'hero.ideSnippet.code.status',
      'originStory.title',
      'originStory.icon',
      'originStory.content',
      'sideProjects[0].title',
      'sideProjects[0].icon',
      'sideProjects[0].url',
      'sideProjects[0].description',
      'sideProjects[0].metrics[0].label',
      'sideProjects[0].metrics[0].value',
      'sideProjects[0].uptime',
      'sideProjects[0].introUrl',
      'experience[0].company',
      'experience[0].role',
      'experience[0].period',
      'experience[0].description',
      'education[0].institution',
      'education[0].degree',
      'education[0].graduationDate',
      'education[0].icon',
      'education[0].color',
      'certifications[0].name',
      'certifications[0].subtitle',
      'certifications[0].validationId',
      'certifications[0].icon',
      'certifications[0].color',
      'certifications[0].url',
      'interests[0].title',
      'interests[0].subtitle',
      'interests[0].icon',
      'interests[0].description',
      'interests[0].status',
      'interests[0].metrics[0].label',
      'interests[0].metrics[0].value',
      'footer.systemStatus',
      'footer.region',
      'footer.latency',
    ];

    it.each(objectPathCases)('reports exact object context for $path', ({ path, message }) => {
      expect(() => parseResumeDocument(withPath(path, notAnObject))).toThrow(message);
    });

    it.each(arrayPathCases)('reports exact array context for $path', ({ path, message }) => {
      expect(() => parseResumeDocument(withPath(path, notAnArray))).toThrow(message);
    });

    it.each(stringPathCases)('reports exact string context for resumeData.%s', (path) => {
      expect(() => parseResumeDocument(withPath(path, notAString))).toThrow(
        `resumeData.${path} must be a string.`,
      );
    });
  });
});
