import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const skill = fs.readFileSync(new URL('../skills/lecture-presentation-markdown/SKILL.md', import.meta.url), 'utf8');

test('skill has minimal valid frontmatter shape', () => {
  const match = skill.match(/^---\n([\s\S]*?)\n---\n\n#/);
  assert.ok(match, 'frontmatter block missing or malformed');
  const frontmatter = match[1];
  assert.match(frontmatter, /^name: lecture-presentation-markdown$/m);
  assert.match(frontmatter, /^description: ".+"$/m);
  assert.doesNotMatch(frontmatter, /^version:/m);
  assert.doesNotMatch(frontmatter, /^author:/m);
  assert.doesNotMatch(frontmatter, /^license:/m);
  assert.doesNotMatch(frontmatter, /^tags:/m);
});

test('skill references paperclip companion files', () => {
  for (const rel of ["references/templates/deck-outline.md","references/templates/lecture-deck.md","references/templates/speaker-notes.md","references/templates/board-outline.md","references/templates/board-deck-input.json","references/checklists/slide-quality.md","references/checklists/delivery-readiness.md","references/checklists/board-slide-quality.md","references/examples/example-lecture-deck.md","assets/STYLE-GUIDE.md"]) {
    assert.equal(fs.existsSync(new URL('../skills/lecture-presentation-markdown/' + rel, import.meta.url)), true, rel);
  }
});
