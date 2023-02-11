import NavBar from '@/components/NavBar';
import Head from 'next/head';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chloe Law</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className="mt-20 p-20">
        <div className="flex flex-wrap justify-center">
          <div className="text-center flex flex-col items-center">
            <Image
              className="rounded-full"
              alt="profile picture"
              src="/Profile_Picture.jpg"
              width={300}
              height={300}
            />
            <h1 className="mt-5 text-4xl">Chloe Law</h1>
            <hr className="mt-2 border w-56" />
            <h2 className="mt-2 text-xl">Software Engineering</h2>
            <h3 className="">Concordia University</h3>
            <div className="flex space-x-1">
              <a href="https://www.linkedin.com/in/chloehylaw/" target="blank">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/chloehylaw" target="blank">
                <GitHubIcon />
              </a>
              <a href="mailto:chloelaw75@hotmail.com" target="blank">
                <EmailIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:ml-20">
            <div className="border-2 rounded-lg p-5 space-y-2 mt-10">
              <h1 className="text-4xl">Hello!👋</h1>
              <p>
                My name is Chloe and I&apos;m a third year software engineering
                student from Canada. Here is some info about me!
              </p>
              <p>⚡ Work experience:</p>
              <ul className="list-disc ml-10">
                <li>
                  Software Engineer part time at Prodapt [Remote. Summer 2022]
                </li>
                <li>
                  Software Engineer intern at Rogers [Remote. Winter 2022]
                </li>
                <li>
                  Software Developer intern at Energir [Remote. Fall 2021]
                </li>
              </ul>
              <p>
                ✍ Students can find my school notes and documents{' '}
                <a
                  className="text-lime-700"
                  href="https://chloehylaw.notion.site/chloehylaw/Concordia-Software-Engineering-7c70a78abca54184a03eaeb6b6f8a2f0"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
