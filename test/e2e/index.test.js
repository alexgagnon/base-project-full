import {IndexPage} from './index.model.js';

fixture`Index page`.page('../../src/index.html');

test('Index page', async t => {
  const page = new IndexPage();

  await t.expect(page.title.textContent).eql('Testing Project');
  await t
  .expect(page.kicker.textContent)
  .eql('This is a test to make sure everything works...');
});
