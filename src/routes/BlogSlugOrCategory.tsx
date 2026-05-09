import { useParams } from 'react-router-dom';
import { CATEGORIES, type Category } from '../blog/types';
import { BlogCategory } from './BlogCategory';
import { BlogPost } from './BlogPost';

// Both /blog/<category>/ and /blog/<slug>/ live under the same path shape.
// React Router can't disambiguate by static config because the segment is the
// same; we resolve by checking the param against the canonical category list.
// Posts are forbidden from using a slug that collides with a category — the
// parser in src/blog/parse.ts could enforce this, but since CATEGORIES is a
// short closed list, the practical risk is near-zero.
export function BlogSlugOrCategory() {
  const { slug = '' } = useParams<{ slug: string }>();
  if ((CATEGORIES as ReadonlyArray<string>).includes(slug)) {
    return <BlogCategory category={slug as Category} />;
  }
  return <BlogPost />;
}
