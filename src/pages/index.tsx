import { NextPage } from 'next';
import Head from 'next/head';

import { loadFull } from 'tsparticles';

import {
  BottomNetwork,
  ContainerContent,
  ContainerHome,
  ContainerMain,
  ContainerSpace,
  HeaderHome,
  Network,
  NetworkContent,
  NetworkDescription,
  NetworkLogo,
  NetworkTitle,
  ParticlesContainer,
  Skills,
  Title,
} from '@/styles/pages/home';

import { SiLinkedin, SiDiscord, SiGithub } from 'react-icons/si';

import Menu from '@/components/Menu';
import { particlesOptions } from '@/utils/particlesOptions';

import { ListIframe } from '@/components/Skill/styles';
import { useTheme } from 'styled-components';
import Skill from '@/components/Skill';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { toast } from 'react-toastify';

import axios from 'axios';
import Product from '@/components/Product';
import Image from 'next/image';

const skills = [
  {
    name: `Node.JS`,
    id: `35608`,
    projects: [
      `HurkitaBOT`,
      `BotGame`,
      `TaskOrganizer-backend`,
      `be-the-hero-backend`,
      `backendOmnistack`,
      `Omnistack11`,
    ],
  },
  {
    name: `React`,
    id: `42923`,
    projects: [
      `portfolio`,
      `SMEconomy`,
      `SMp3Play`,
      `SMp3Play-web`,
      `SMp3Play-mobile`,
      `SMLauncher`,
      `HugolosaoApp`,
      `Omnistack11`,
    ],
  },
  {
    name: `Next.js`,
    id: `3399`,
    projects: [`portfolio`, `SMEconomy`, `SMp3Play`, `SMp3Play-web`],
  },
  {
    name: `React Native`,
    id: `49871`,
    projects: [`SMp3Play-mobile`, `HugolosaoApp`, `Omnistack11`],
  },
  { name: `NestJS`, id: `22335`, projects: [`HugulosaoAPI`] },
];

const Home: NextPage<{
  products: TProduct[];
}> = ({ products }) => {
  const theme = useTheme();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <>
      <Head>
        <title>Página Inicial - Portifólio SMCodes</title>
      </Head>
      <ContainerHome>
        <HeaderHome>
          <Menu myLocation="home" />
          <div
            style={{
              flex: 1,
              zIndex: 0,
              position: `absolute`,
              width: `100%`,
            }}
          >
            <ParticlesContainer
              id="tsparticles"
              init={particlesInit}
              options={particlesOptions as any}
            />
          </div>
          <ContainerContent>
            <ContainerSpace>
              <Title>
                Pode me chamar de <span>SMCodes</span>. E eu irei desenvolver os
                softwares ideais para seu negócio.
              </Title>
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  gap: 15,
                }}
              >
                <Skills>
                  <Skill
                    skill={{
                      name: `SMCodesP`,
                      id: `sT83HNt`,
                      Content: () => (
                        <Image
                          src="https://github-readme-stats.vercel.app/api?username=SMCodesP&show_icons=true&theme=omni&count_private=true&hide_border=true&locale=pt-br&card_width=500"
                          alt="User stats SMCodesP"
                          width={500}
                          height={200}
                        />
                      ),
                    }}
                  />
                </Skills>
                <Skills>
                  {skills.map((skill) => (
                    <Skill
                      key={skill.id}
                      skill={{
                        ...skill,
                        Content: () => (
                          <ListIframe>
                            {skill.projects?.map((project) => (
                              <Image
                                key={project}
                                src={`https://github-readme-stats.vercel.app/api/pin?username=SMCodesP&repo=${project}&show_owner=true&show_icons=true&theme=omni&hide_border=true&locale=pt-br&card_width=400`}
                                alt="Project stats SMCodesP"
                                width={400}
                                height={150}
                              />
                            ))}
                          </ListIframe>
                        ),
                      }}
                    />
                  ))}
                </Skills>
              </div>
              <BottomNetwork>
                <a
                  href="https://www.linkedin.com/in/samuel-pereira-da-silva-947bb31a5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Network>
                    <NetworkLogo>
                      <SiLinkedin color={theme.currentLine} size={52} />
                    </NetworkLogo>
                    <NetworkContent>
                      <NetworkTitle>LinkedIn</NetworkTitle>
                      <NetworkDescription>
                        Fique por dentro de meus novos projetos.
                      </NetworkDescription>
                    </NetworkContent>
                  </Network>
                </a>
                <a
                  href="https://github.com/SMCodesP"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Network>
                    <NetworkLogo>
                      <SiGithub color={theme.currentLine} size={52} />
                    </NetworkLogo>
                    <NetworkContent>
                      <NetworkTitle>Github</NetworkTitle>
                      <NetworkDescription>
                        Explore todos meus projetos públicos.
                      </NetworkDescription>
                    </NetworkContent>
                  </Network>
                </a>
                <CopyToClipboard
                  text="SMCodes#6874"
                  onCopy={() => toast(`Usuário do discord copiado!`)}
                >
                  <Network>
                    <NetworkLogo>
                      <SiDiscord color={theme.currentLine} size={52} />
                    </NetworkLogo>
                    <NetworkContent>
                      <NetworkTitle>Discord</NetworkTitle>
                      <NetworkDescription>
                        Entre em contato comigo em qualquer horário.
                      </NetworkDescription>
                    </NetworkContent>
                  </Network>
                </CopyToClipboard>
              </BottomNetwork>
            </ContainerSpace>
          </ContainerContent>
        </HeaderHome>

        <ContainerMain>
          {products.map((product, index) => (
            <Product
              key={product.id}
              product={product}
              inverse={index % 2 === 1}
            />
          ))}
        </ContainerMain>
      </ContainerHome>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.DOMAIN}/api/products`);
  console.log(data);

  return {
    props: {
      products: data.slice(0, 2),
    },
  };
}

export default Home;
