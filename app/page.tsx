import fs from 'node:fs';
import path from 'node:path';

const htmlSource = fs.readFileSync(
  path.join(process.cwd(), 'public', 'index.html'),
  'utf-8',
);

const styleMatch = htmlSource.match(/<style>([\s\S]*?)<\/style>/i);
const styleContent = styleMatch ? styleMatch[1] : '';

const bodyMatch = htmlSource.match(/<body[^>]*>([\s\S]*)<\/body>/i);
const bodyContent = bodyMatch ? bodyMatch[1] : '';

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}
