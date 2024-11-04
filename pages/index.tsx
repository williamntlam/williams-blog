import Image from "next/image";
import { GetStaticProps } from "next";
import postsData from "../data/posts.json";

type Post = {
  id: number;
  title: string;
  date: string;
  content: string;
};

// Define the props type for the Home component
type HomeProps = {
  posts: Post[];
};

// getStaticProps with proper type annotations
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      posts: postsData as Post[], // Type assertion to ensure TypeScript knows postsData matches the Post[] type
    },
  };
};

export default function Home({ posts }: HomeProps) {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside
        className="w-full md:w-80 h-auto md:h-screen bg-cover bg-center flex flex-col items-center justify-start pt-16 p-4 md:fixed top-0 left-0"
        style={{
          backgroundImage: `url('/toronto-flatiron-building-dark.jpg')`,
        }}
      >
        {/* Profile Picture Section */}
        <section className="relative z-10 mb-4">
          <Image
            src="/personal-picture.jpg"
            alt="A personal picture of William Lam"
            width={170}
            height={170}
            className="rounded-full mx-auto aspect-square"
          />
        </section>

        {/* About Me Description */}
        <section className="relative z-10 mb-4 text-center">
          <h2 className="text-3xl font-bold text-white">William Lam</h2>
          <p className="text-sm text-white">
            Hey! My name is William. I&apos;m currently a student at the
            University of Toronto studying Computer Science! In my spare time, I
            like to read, play volleyball and basketball, and play chess.
            I&apos;m also very passionate about teaching, and hope to one day be
            a Project Lead for a software project or a volleyball coach. This is
            my personal blog, where I will share my thoughts and reflections. I
            hope this website gives some perspective into who I am as a person.
          </p>
        </section>

        {/* Social Media Links */}
        <nav className="relative z-10">
          <section className="flex justify-center space-x-4">
            <a
              href="https://github.com/williamntlam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600 transition-colors text-white"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/william-lam-b3a8a2213/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600 transition-colors text-white"
            >
              Linkedin
            </a>
            <a
              href="https://devpost.com/williamntlam?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600 transition-colors text-white"
            >
              Devpost
            </a>
          </section>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full p-10 bg-white text-black md:ml-80">
        <section className="mb-8 pb-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold mb-2">
            My vow to never give up on myself and the world around me
          </h2>
          <small className="text-sm text-gray-500 block mb-4">
            August 9th, 2024
          </small>
          <p className="leading-relaxed">
            No matter how hard life gets, I vow to never give up on my humanity.
            I vow to always be a good person, to treat everyone I see with
            respect and kindness, and to constantly push myself to be a better
            person. I understand that some days you want to let go of your
            humanity, to give up because the world has treated you unfairly. Why
            be kind? Why be a good person when the world hasn&apos;t been good
            to you? I understand. I understand the feeling of wanting to let go,
            to be apathetic in a world that feels otherwise nihilistic. I
            believe that the greatest thing we have as humans is our humanity.
            Our humanity comes from our ability to be compassionate, to treat
            others with kindness and respect no matter what background or
            circumstances we&apos;ve been through. It is through these values
            that someone is able to develop their character. For me, I believe
            that character is the single most important thing someone can work
            on in their life. My volleyball coach used to say this: &quot;Watch
            your actions, they become habits; watch your habits, they become
            your character; watch your character, it becomes your destiny.&quot;
            I truly believe that you cannot give up on your humanity because
            your humanity is really the core of your character. No matter how
            hard life gets, I vow to never stop caring for the world and those
            around me. I vow to give back to the world precisely because the
            world has given so much to me.
          </p>
        </section>
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <section
              key={post.id}
              className="mb-8 pb-4 border-b border-gray-300"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <small className="text-sm text-gray-500 block mb-4">
                {post.date}
              </small>
              <p className="leading-relaxed">{post.content}</p>
            </section>
          ))}
      </main>
    </div>
  );
}
