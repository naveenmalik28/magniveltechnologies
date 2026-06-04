import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { blogPosts, blogCategories } from "@/lib/blog";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = blogCategories.find((c) => c.slug === category);

  if (!cat) return {};

  return {
    title: `${cat.label} Articles | Blog`,
    description: `Read technical articles, guides, and updates about ${cat.label} from the Magnivel Technologies engineering team.`,
    alternates: {
      canonical: `https://magnivel.com/blog/category/${category}`,
    },
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = blogCategories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const posts = blogPosts.filter((p) => p.category === category);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Blog Category"
        title={`${cat.label} Insights`}
        description={`Read all our latest articles, insights, tutorials, and templates related to ${cat.label.toLowerCase()}.`}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-dark transition-colors mb-8">
          <Icon name="arrow-right" size={12} className="rotate-180" />
          Back to all articles
        </Link>

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md hover:border-accent/30 transition-all glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="rounded-full bg-accent-subtle px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-accent-dark">
                      {post.categoryLabel}
                    </span>
                    <span className="text-[10px] font-bold text-dimmed">{post.publishedAt}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="group">
                    <h3 className="mt-4 text-lg font-extrabold text-heading group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 border-t border-subtle-border/50 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white font-bold text-[10px]">
                      {post.author.avatar}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold text-heading leading-none">{post.author.name}</p>
                      <p className="text-[9px] text-dimmed mt-0.5 leading-none">{post.author.role}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-dimmed flex items-center gap-1">
                    <Icon name="clock" size={11} />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-subtle-border rounded-2xl bg-slate-50/50">
            <Icon name="message-circle" size={32} className="mx-auto text-dimmed" />
            <h3 className="mt-4 text-base font-extrabold text-heading font-semibold">No articles yet</h3>
            <p className="mt-2 text-xs text-muted">Check back soon for new insights in the {cat.label} vertical.</p>
          </div>
        )}
      </section>
    </PageShell>
  );
}
