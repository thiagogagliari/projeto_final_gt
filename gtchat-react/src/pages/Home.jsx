import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/App.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container main-content">
          <div className="text-area">
            <h1>
              <span>CHAT GT</span>:<br />
              Conecte-se com outros<br />
              Devs do <strong>Geração Tech</strong>
            </h1>
            <p>
              O chat moderno para alunos do Geração Tech. Conecte-se com devs,
              compartilhe conhecimento e evolua em grupo. Participe de discussões,
              tire dúvidas e cresça com a comunidade.
            </p>
          </div>
          <div className="image-area">
            <img src="/assets/chat-image-fundo.png" alt="Imagem do chat" />
          </div>
        </div>
      </main>

      <section className="features">
        <div className="container">
          <h2>Por que usar o GTChat?</h2>
          <div className="cards">
            <div className="card">
              <h3>Conexão em tempo real</h3>
              <p>Fale com outros alunos instantaneamente e troque experiências.</p>
            </div>
            <div className="card">
              <h3>100% Gratuito</h3>
              <p>Feito para todos os estudantes do Geração Tech sem nenhum custo.</p>
            </div>
            <div className="card">
              <h3>Ambiente Colaborativo</h3>
              <p>Ajude e aprenda com outros devs iniciantes como você.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home; 