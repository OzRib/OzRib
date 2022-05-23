import React from 'react'
import Head from 'next/head'
import {
  Divider,
  Link
} from '@mui/material'
import Paragraph from '@components/globals/Paragraph'
import StandardPage from '@components/globals/StandardPage'
import Avatar from '@components/Home/Avatar'
import Header from '@components/Home/Header'
import SocialNetworks from '@components/Home/SocialNetworks'
import HeaderMessage from '@components/Home/HeaderMessage'
import Body from '@components/Home/Body'
import Column from '@components/Home/Column'
import Footer from '@components/Home/Footer'
import type { CustomNextPage } from '@type/index'

const Home: CustomNextPage = () => {
  return (
    <StandardPage>
      <Head>
        <title>Ozeias Ribeiro - Programador</title>
        <meta name="description" content="Ozeias Ribeiro - Programador" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Avatar />
        <SocialNetworks />
        <HeaderMessage />
      </Header>
      <Divider />
      <Body>
        <Column>
          <Paragraph>
            Meu nome é Ozeias Ribeiro.
            Sou um programador Full Stack web com várias competências.
            Atualmente trabalho em projetos próprios e faço freelances.
            Amo tecnologia.
            Sou um apaixonado por Linux, programação de alto e baixo nível, técnicas de performance, infraestrutura e sou adepto do Clean Code.
            Meu foco principal é desenvolvimento Back End, porém tenho espertise tanto no Front End, Mobile e possuo bons conhecimentos em infraestrutura e CI(Integração Contínua).
          </Paragraph>
          <Paragraph>
            Desenvolvo desde o Front End(software do lado do cliente, aplicativo mobile ou o site em si) até o Back End(software do lado do servidor, onde a maior parte das informações são armazenadas).
            Minha última atuação foi o desenvolvimento de um sistema de frequência para os colaboradores(funcionários e alunos) de uma escola de ensino médio em Itapipoca - CE, o CCI(Centro Cearense de Idiomas).
            O sistema em si(
            <Link
              href="https://frequenciascci.com.br"
              target="_blank"
            >
              SFSCCI - Sistema de Frequência e Segurança CCI
            </Link>
            ), é responsável por gerenciar a frequência desses alunos(entrada e saída), gerar relatórios em PDF e possibilitar o registro dessa frequência por uma interface de um leitor de QR Code.
          </Paragraph>
        </Column>
        <Column>
          <Paragraph>
            Meu principal objetivo como programador é ajudar o máximo de pessoas que eu puder com meus conhecimentos de tecnologia.
            Uma vez, Lutero, após iniciar a reforma protestante foi questionado por um sapateiro da seguinte forma:
            "O que eu posso fazer para servir melhor à Deus e ser uma pessoa melhor?", Lutero responde: "Faça os melhores sapatos  que puder e os venda a um preço justo".
            O que me leva a uma conclusão: não importa sua religião, credo ou cultura, faça um bom trabalho e seja honesto.
            A vida tratará de te recompensar e a maior recompensa será a pessoa que você se tornará.
          </Paragraph>
          <Paragraph>
            Estudei em uma escola profissionalizante, a EEEP José Ribeiro Damasceno em Trairi - CE.
            Porém, tenho em mente que não adianta estudar na melhor e mais competente escola do mundo se você não estiver constantemente ativo na busca pelo conhecimento.
            Prezo pelo autoditatismo mas não desprezo uma boa instituição de ensino.
            Atualmente estou fazendo faculdade de Ciências da Computação na Universidade Estácio de Sá.
            Aguardo ansiosamente por matérias como Estruturas de Dados e Algoritmos.
            Amo matemática e todo o raciocínio lógico matemático que a matéria envolve.
          </Paragraph>
        </Column>
        <Footer />
      </Body>
    </StandardPage>
  )
}

Home.headerHeight = {
  xs: 300,
  sm: 400
}

export default Home
