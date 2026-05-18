import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const skill = fs.readFileSync(new URL('../skills/lecture-presentation-markdown/SKILL.md', import.meta.url), 'utf8');

test('skill has valid frontmatter shape', () => {
  assert.match(skill, /^---\n/);
  assert.match(skill, /\n---\n\n#/);
  assert.match(skill, /name: lecture-presentation-markdown/);
  assert.match(skill, /description:/);
  assert.match(skill, /license: MIT/);
});

test('skill references paperclip companion files', () => {
  for (const rel of ["references/templates/deck-outline.md","references/templates/lecture-deck.md","references/templates/speaker-notes.md","references/checklists/slide-quality.md","references/checklists/delivery-readiness.md","references/examples/example-lecture-deck.md","assets/STYLE-GUIDE.md"]) {
    assert.equal(fs.existsSync(new URL('../skills/lecture-presentation-markdown/' + rel, import.meta.url)), true, rel);
  }
});
